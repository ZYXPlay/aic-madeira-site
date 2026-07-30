#!/usr/bin/env python3
"""Assemble dist/ from src/: expands <!-- include: name.html --> markers with
files from src/partials/, replaces <!-- docs-list --> with the listing built
from the repo-root documentos/ folder, then copies styles.css, site.js,
assets/ and documentos/. Stdlib only — run with `python3 build.py`."""
import re
import shutil
import sys
import unicodedata
from html import escape
from pathlib import Path
from urllib.parse import quote

ROOT = Path(__file__).resolve().parent
SRC = ROOT / "src"
DIST = ROOT / "dist"
INCLUDE = re.compile(r"<!--\s*include:\s*([\w.-]+)\s*-->")
DOCS_LIST = re.compile(r"<!--\s*docs-list\s*-->")

# Grupos da página de documentos, por ordem de apresentação. O nome do ficheiro
# decide o grupo; cada documento entra num só (o primeiro que corresponder).
GRUPOS = (
    ("Estatutos", lambda n: "estatuto" in n, False),
    ("Relatórios de Contas", lambda n: "relat" in n or "contas" in n, True),
    ("Outros documentos", lambda n: True, False),
)


def expand(text: str, page: Path) -> str:
    def repl(match):
        partial = SRC / "partials" / match.group(1)
        if not partial.is_file():
            sys.exit(f"error: {page.name} includes missing partial {match.group(1)}")
        return partial.read_text(encoding="utf-8")

    return INCLUDE.sub(repl, text)


def tamanho(bytes_: int) -> str:
    """«1,2 MB» acima de 1 MB, «640 KB» abaixo — vírgula decimal, como em pt_PT."""
    mb = bytes_ / (1024 * 1024)
    if mb >= 1:
        return f"{mb:.1f}".replace(".", ",") + " MB"
    return f"{round(bytes_ / 1024)} KB"


def recolher_documentos() -> list[dict]:
    pasta = ROOT / "documentos"
    if not pasta.is_dir():
        return []
    docs = []
    for pdf in pasta.iterdir():
        if not pdf.is_file() or pdf.suffix.lower() != ".pdf":
            continue
        # Normalizar para NFC: no macOS os nomes com acentos são gravados
        # decompostos (o + ´), o que faria a ordenação por código sair errada.
        # O href mantém o nome tal como está em disco, para o caminho coincidir.
        nome = unicodedata.normalize("NFC", pdf.stem.replace("-", " ").replace("_", " "))
        docs.append(
            {
                "nome": nome,
                "norm": nome.lower(),
                "detalhe": "PDF · " + tamanho(pdf.stat().st_size),
                "href": "documentos/" + quote(pdf.name),
            }
        )
    return docs


def linha(doc: dict) -> str:
    return (
        '        <li><a class="doc-row" href="{href}">'
        '<span class="doc-badge" aria-hidden="true">PDF</span>'
        '<span class="doc-info">'
        '<span class="doc-name">{nome}</span>'
        '<span class="doc-meta">{detalhe}</span>'
        "</span>"
        '<span class="doc-dl">Descarregar<span aria-hidden="true"> ↓</span></span>'
        "</a></li>"
    ).format(
        href=escape(doc["href"], quote=True),
        nome=escape(doc["nome"]),
        detalhe=escape(doc["detalhe"]),
    )


def render_documentos() -> str:
    docs = recolher_documentos()
    if not docs:
        return '<p class="status-msg">De momento não há documentos publicados.</p>'

    baldes: list[list[dict]] = [[] for _ in GRUPOS]
    for doc in docs:
        for indice, (_, corresponde, _recente) in enumerate(GRUPOS):
            if corresponde(doc["norm"]):
                baldes[indice].append(doc)
                break

    blocos = []
    for (titulo, _corresponde, recente_primeiro), grupo in zip(GRUPOS, baldes):
        if not grupo:
            continue
        grupo.sort(key=lambda d: d["nome"], reverse=recente_primeiro)
        linhas = "\n".join(linha(doc) for doc in grupo)
        blocos.append(
            '      <div class="doc-group">\n'
            f'        <h2 class="box-title">{titulo}</h2>\n'
            f'        <ul class="doc-list">\n{linhas}\n        </ul>\n'
            "      </div>"
        )
    # lstrip: a indentação da primeira linha vem do próprio marcador na página.
    return "\n".join(blocos).lstrip()


def main() -> None:
    if DIST.exists():
        shutil.rmtree(DIST)
    DIST.mkdir()

    listagem = render_documentos()

    for page in sorted((SRC / "pages").glob("*.html")):
        html = expand(page.read_text(encoding="utf-8"), page)
        html = DOCS_LIST.sub(lambda _: listagem, html)
        (DIST / page.name).write_text(html, encoding="utf-8")
        print(f"  {page.name}")

    for name in ("styles.css", "site.js"):
        shutil.copy(SRC / name, DIST / name)
        print(f"  {name}")

    shutil.copytree(SRC / "assets", DIST / "assets")
    print("  assets/")

    documentos = ROOT / "documentos"
    if documentos.is_dir():
        shutil.copytree(documentos, DIST / "documentos")
        print(f"  documentos/ ({len(recolher_documentos())} PDF na listagem)")

    cname = ROOT / "CNAME"
    if cname.is_file():
        shutil.copy(cname, DIST / "CNAME")
        print("  CNAME")

    print("Built dist/")


if __name__ == "__main__":
    main()
