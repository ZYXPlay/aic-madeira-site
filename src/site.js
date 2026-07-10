/* A.I.C. Madeira — comportamento do site.
   Três módulos independentes; cada um só corre se a página tiver o elemento respetivo. */
(function () {
  'use strict';

  /* ---------- Menu móvel ---------- */
  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.nav-toggle');
  if (header && toggle) {
    toggle.addEventListener('click', function () {
      var open = header.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  /* ---------- Fotografias: esconder imagens em falta para mostrar a moldura ---------- */
  document.querySelectorAll('.photo-frame img').forEach(function (img) {
    function hide() { img.hidden = true; }
    if (img.complete && img.naturalWidth === 0) hide();
    else img.addEventListener('error', hide);
  });

  /* ---------- Documentos: lista os PDF da pasta documentos/ do repositório ---------- */
  var docsApp = document.getElementById('docs-app');
  if (docsApp) {
    var REPO = 'ZYXPlay/aic-madeira-site';
    var PASTA = 'documentos';

    var groupsEl = document.getElementById('docs-groups');
    var showState = function (state) {
      docsApp.querySelectorAll('[data-docs-state]').forEach(function (el) {
        el.hidden = el.getAttribute('data-docs-state') !== state;
      });
    };
    var make = function (tag, className, text) {
      var el = document.createElement(tag);
      el.className = className;
      if (text !== undefined) el.textContent = text;
      return el;
    };

    if (!REPO || REPO.indexOf('/') === -1) {
      showState('unconfigured');
    } else {
      fetch('https://api.github.com/repos/' + REPO + '/contents/' + PASTA)
        .then(function (res) {
          if (!res.ok) throw new Error('HTTP ' + res.status);
          return res.json();
        })
        .then(function (files) {
          var pdfs = files.filter(function (f) {
            return f.type === 'file' && /\.pdf$/i.test(f.name);
          });
          if (pdfs.length === 0) {
            showState('empty');
            return;
          }
          var docs = pdfs.map(function (f) {
            var nome = f.name.replace(/\.pdf$/i, '').replace(/[-_]/g, ' ');
            var mb = f.size / (1024 * 1024);
            var tamanho = mb >= 1 ? mb.toFixed(1).replace('.', ',') + ' MB' : Math.round(f.size / 1024) + ' KB';
            return { nome: nome, detalhe: 'PDF · ' + tamanho, href: PASTA + '/' + f.name, norm: nome.toLowerCase() };
          });
          var grupos = [
            { titulo: 'Estatutos', docs: docs.filter(function (d) { return d.norm.indexOf('estatuto') !== -1; }) },
            { titulo: 'Relatórios de Contas', docs: docs.filter(function (d) { return d.norm.indexOf('relat') !== -1 || d.norm.indexOf('contas') !== -1; }).sort(function (a, b) { return b.nome.localeCompare(a.nome); }) },
            { titulo: 'Outros documentos', docs: docs.filter(function (d) { return d.norm.indexOf('estatuto') === -1 && d.norm.indexOf('relat') === -1 && d.norm.indexOf('contas') === -1; }) }
          ].filter(function (g) { return g.docs.length > 0; });

          grupos.forEach(function (g) {
            var group = make('div', 'doc-group');
            group.appendChild(make('h2', 'box-title', g.titulo));
            var list = make('div', 'doc-list');
            g.docs.forEach(function (d) {
              var row = make('a', 'doc-row');
              row.href = d.href;
              row.appendChild(make('span', 'doc-badge', 'PDF'));
              var info = make('span', 'doc-info');
              info.appendChild(make('span', 'doc-name', d.nome));
              info.appendChild(make('span', 'doc-meta', d.detalhe));
              row.appendChild(info);
              row.appendChild(make('span', 'doc-dl', 'Descarregar ↓'));
              list.appendChild(row);
            });
            group.appendChild(list);
            groupsEl.appendChild(group);
          });
          showState('none');
          groupsEl.hidden = false;
        })
        .catch(function () {
          showState('error');
        });
    }
  }

  /* ---------- Formulário de contacto (Formspree) ---------- */
  var form = document.getElementById('contact-form');
  if (form) {
    var FORMSPREE_ID = 'mjgqnbja';
    var success = form.querySelector('.form-success');
    var errorMsg = form.querySelector('.form-error');
    var actions = form.querySelector('.form-actions');
    var button = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      errorMsg.hidden = true;
      button.disabled = true;
      button.textContent = 'A enviar…';
      var data = new FormData(form);
      fetch('https://formspree.io/f/' + FORMSPREE_ID, {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome: data.get('nome'),
          email: data.get('email'),
          _replyto: data.get('email'),
          assunto: data.get('assunto'),
          mensagem: data.get('mensagem')
        })
      })
        .then(function (res) {
          if (!res.ok) throw new Error('HTTP ' + res.status);
          form.reset();
          actions.hidden = true;
          success.hidden = false;
        })
        .catch(function () {
          errorMsg.hidden = false;
          button.disabled = false;
          button.textContent = 'Enviar';
        });
    });
  }
})();
