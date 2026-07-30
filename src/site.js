/* A.I.C. Madeira — comportamento do site.
   Dois módulos guardados (menu móvel, formulário de contacto), cada um só corre
   se a página tiver o elemento respetivo, mais o fallback das fotografias.
   A lista de documentos é gerada em build.py — não depende de JavaScript. */
(function () {
  'use strict';

  /* ---------- Menu móvel ---------- */
  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.nav-toggle');
  if (header && toggle) {
    var setOpen = function (open) {
      header.classList.toggle('nav-open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    };

    toggle.addEventListener('click', function () {
      setOpen(!header.classList.contains('nav-open'));
    });

    /* Escape fecha o menu e devolve o foco ao botão que o abriu. */
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && header.classList.contains('nav-open')) {
        setOpen(false);
        toggle.focus();
      }
    });

    /* Aos 1024px o botão desaparece e entra a navegação de secretária. Sem isto
       o estado aberto ficava preso: aria-expanded="true" num botão escondido. */
    var desktop = window.matchMedia('(min-width: 1024px)');
    var closeOnDesktop = function (e) { if (e.matches) setOpen(false); };
    if (desktop.addEventListener) desktop.addEventListener('change', closeOnDesktop);
    else if (desktop.addListener) desktop.addListener(closeOnDesktop);
  }

  /* ---------- Fotografias: esconder imagens em falta para mostrar a moldura ---------- */
  document.querySelectorAll('.photo-frame img').forEach(function (img) {
    function hide() { img.hidden = true; }
    if (img.complete && img.naturalWidth === 0) hide();
    else img.addEventListener('error', hide);
  });

  /* ---------- Formulário de contacto (Formspree) ---------- */
  var form = document.getElementById('contact-form');
  if (form) {
    var FORMSPREE_ID = 'mjgqnbja';
    var success = form.querySelector('.form-success');
    var errorMsg = form.querySelector('.form-error');
    var actions = form.querySelector('.form-actions');
    var button = form.querySelector('button[type="submit"]');
    var status = form.querySelector('[data-form-status]');

    /* Anuncia o estado a leitores de ecrã. O texto vem dos próprios painéis,
       para a cópia em português viver só no HTML. */
    var announce = function (msg) {
      if (status) status.textContent = msg;
    };

    /* Guarda de reentrância. O botão fica com aria-disabled em vez de disabled:
       um botão desativado perde o foco, e quem navega por teclado ficava sem
       posição a meio do envio. aria-disabled não impede o clique — daí a guarda. */
    var sending = false;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (sending) return;
      sending = true;
      errorMsg.hidden = true;
      button.setAttribute('aria-disabled', 'true');
      button.textContent = 'A enviar…';
      announce(button.textContent);
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
          announce(success.textContent.trim());
          /* O botão acabou de desaparecer; sem isto o foco caía no início da
             página e era preciso percorrer o site todo para continuar. */
          success.focus();
        })
        .catch(function () {
          sending = false;
          errorMsg.hidden = false;
          button.removeAttribute('aria-disabled');
          button.textContent = 'Enviar';
          announce(errorMsg.textContent.trim());
        });
    });
  }
})();
