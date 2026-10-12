(function () {
  var KEY = 'sf-pt';
  var THEMES = {
    social: { bg: '#FAFAFA', fg: '#0A0A0A', accent: '#C5A059', suffix: 'Social' },
    main:   { bg: '#0A0A0A', fg: '#F5F0EB', accent: '#FF5A1F', suffix: 'Media' }
  };
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var html = document.documentElement;

  function build(key) {
    var t = THEMES[key], el = document.createElement('div');
    el.className = 'pt pt--' + key;
    el.setAttribute('aria-hidden', 'true');
    el.style.setProperty('--pt-bg', t.bg);
    el.style.setProperty('--pt-fg', t.fg);
    el.style.setProperty('--pt-accent', t.accent);
    el.innerHTML = '<div class="pt__box"><span class="pt__label"><span class="sf">Silk Fox</span><span class="pt__s">' + t.suffix + '</span></span><span class="pt__line"></span></div>';
    return el;
  }
  function store(v) { try { v ? sessionStorage.setItem(KEY, v) : sessionStorage.removeItem(KEY); } catch (e) {} }

  // Llegada: la cortina ya cubre la página; la levantamos con suavidad
  var arriving = html.getAttribute('data-pt');
  if (arriving && THEMES[arriving]) {
    store(null);
    var el = build(arriving);
    el.classList.add('is-now');
    document.body.appendChild(el);
    html.removeAttribute('data-pt');
    var ready = (document.fonts && document.fonts.ready) ? Promise.race([document.fonts.ready, new Promise(function (r) { setTimeout(r, 700); })]) : Promise.resolve();
    ready.then(function () {
      setTimeout(function () {
        el.classList.remove('is-now');
        void el.offsetWidth;
        el.classList.add('is-out');
        setTimeout(function () { el.remove(); }, 1100);
      }, reduce ? 0 : 450);
    });
  } else if (arriving) { html.removeAttribute('data-pt'); store(null); }

  // Salida: la cortina sube desde abajo con el color de la página de destino
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[data-transition]');
    if (!a || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || a.target === '_blank') return;
    var key = a.getAttribute('data-transition');
    if (!THEMES[key] || reduce) { if (THEMES[key]) store(key); return; }
    e.preventDefault();
    var el = build(key);
    document.body.appendChild(el);
    void el.offsetWidth;
    el.classList.add('is-in');
    store(key);
    var href = a.href;
    setTimeout(function () { window.location.href = href; }, 1350);
  });

  // Si vuelven con el botón "atrás", no dejar la cortina a medias
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) { document.querySelectorAll('.pt').forEach(function (n) { n.remove(); }); store(null); html.removeAttribute('data-pt'); }
  });
})();
