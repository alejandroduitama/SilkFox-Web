(function () {
  // Número de WhatsApp Business de Silk Fox Media (formato internacional, sin + ni espacios)
  var WHATSAPP_NUMBER = '573212841853';
  var DEFAULT_MSG = 'Hola, quiero agendar un briefing gratuito con Silk Fox Media.';

  document.documentElement.classList.add('js');

  // CTA -> WhatsApp con mensaje prellenado
  var configured = !/X/.test(WHATSAPP_NUMBER);
  document.querySelectorAll('[data-wa]').forEach(function (a) {
    if (!configured) return; // mientras no haya número, el CTA ancla a #contacto
    var msg = a.getAttribute('data-msg') || DEFAULT_MSG;
    a.href = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(msg);
    a.target = '_blank';
    a.rel = 'noopener';
  });

  // Formulario de cotización -> WhatsApp con el mensaje armado
  var form = document.getElementById('quote');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var bad = false;
      Array.prototype.forEach.call(form.elements, function (f) {
        if (!f.name) return;
        var empty = !f.value.trim();
        f.classList.toggle('is-bad', empty);
        f.setAttribute('aria-invalid', empty ? 'true' : 'false');
        if (empty) bad = true;
      });
      var note = document.getElementById('formnote');
      if (bad) { note.textContent = 'Completa todos los campos para continuar.'; form.querySelector('.is-bad').focus(); return; }
      var d = new FormData(form);
      var msg = 'Hola, quiero cotizar un paquete personalizado con Silk Fox Media.\n' +
        'Nombre: ' + d.get('nombre').trim() + '\n' +
        'Empresa: ' + d.get('empresa').trim() + '\n' +
        'Proyecto: ' + d.get('tipo') + '\n' +
        'Visión: ' + d.get('mensaje').trim();
      window.open('https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(msg), '_blank', 'noopener');
      note.textContent = 'Listo. Se abrió WhatsApp con tu mensaje; envíalo y te respondemos.';
    });
  }

  // Nav sólido al hacer scroll + menú móvil
  var nav = document.getElementById('nav');
  var burger = document.getElementById('burger');
  function onScroll() { nav.classList.toggle('is-solid', window.scrollY > 24); }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  function setMenu(open) {
    nav.classList.toggle('is-open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  }
  burger.addEventListener('click', function () { setMenu(burger.getAttribute('aria-expanded') !== 'true'); });
  document.querySelectorAll('#menu a').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });

  // Reveal al entrar en viewport, escalonado
  var els = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var sibs = Array.prototype.filter.call(en.target.parentElement.children, function (c) { return c.classList.contains('reveal'); });
        en.target.style.setProperty('--d', Math.min(sibs.indexOf(en.target), 5) * 100 + 'ms');
        en.target.classList.add('in');
        io.unobserve(en.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach(function (el, i) {
      // El hero siempre aparece al cargar, aunque sus botones queden en el borde de pantallas bajas
      if (el.closest('.hero')) { el.style.setProperty('--d', Math.min(i, 5) * 100 + 'ms'); el.classList.add('in'); }
      else io.observe(el);
    });
  } else {
    els.forEach(function (el) { el.classList.add('in'); });
  }

  // Timecode decorativo del hero
  var tc = document.getElementById('tc');
  if (tc && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var t0 = Date.now();
    var p = function (n) { return String(n).padStart(2, '0'); };
    (function tick() {
      var ms = Date.now() - t0, f = Math.floor(ms / 1000 * 24) % 24, s = Math.floor(ms / 1000);
      tc.textContent = '00:' + p(Math.floor(s / 60) % 60) + ':' + p(s % 60) + ':' + p(f);
      setTimeout(tick, 1000 / 12);
    })();
  }

  // Showreel: bucle del hero (sin sonido) y visor con el showreel completo
  var loopVideo = document.querySelector('.reel__video');
  if (loopVideo && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    loopVideo.removeAttribute('autoplay');
  }
  var sr = document.getElementById('showreel');
  var srOpen = document.querySelector('[data-showreel-open]');
  if (sr && srOpen) {
    var srVideo = sr.querySelector('video');
    srOpen.addEventListener('click', function () {
      if (typeof sr.showModal === 'function') sr.showModal(); else sr.setAttribute('open', '');
      srVideo.play().catch(function () {});
    });
    sr.querySelector('[data-showreel-close]').addEventListener('click', function () { sr.close(); });
    sr.addEventListener('click', function (e) { if (e.target === sr) sr.close(); });
    sr.addEventListener('close', function () { srVideo.pause(); srOpen.focus(); });
  }

  var yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();
})();
