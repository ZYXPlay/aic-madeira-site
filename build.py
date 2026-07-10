#!/usr/bin/env python3
"""Assemble dist/ from src/: expands <!-- include: name.html --> markers with
files from src/partials/, then copies styles.css, site.js, assets/ and the
repo-root documentos/ folder. Stdlib only — run with `python3 build.py`."""
import re
import shutil
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent
SRC = ROOT / "src"
DIST = ROOT / "dist"
INCLUDE = re.compile(r"<!--\s*include:\s*([\w.-]+)\s*-->")


def expand(text: str, page: Path) -> str:
    def repl(match):
        partial = SRC / "partials" / match.group(1)
        if not partial.is_file():
            sys.exit(f"error: {page.name} includes missing partial {match.group(1)}")
        return partial.read_text(encoding="utf-8")

    return INCLUDE.sub(repl, text)


def main() -> None:
    if DIST.exists():
        shutil.rmtree(DIST)
    DIST.mkdir()

    for page in sorted((SRC / "pages").glob("*.html")):
        html = expand(page.read_text(encoding="utf-8"), page)
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
        print("  documentos/")

    print("Built dist/")


if __name__ == "__main__":
    main()
