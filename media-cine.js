/* Silk Fox Media: showreel que crece con el scroll, storyboard horizontal,
   código de tiempo del scroll, destellos entre secciones, sonido ambiente
   y puntero PLAY. */
(function () {
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var desk = matchMedia('(min-width: 1025px)');
  var de = document.documentElement;
  function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
  function ease(t) { return t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }

  // Showreel: el panel 9:16 se abre hasta pantalla completa y entra en formato cine
  var rx = document.querySelector('.reelx'), fr = rx && rx.querySelector('.reelx__frame');
  function reel() {
    if (!rx || reduce) { if (rx) rx.style.setProperty('--ui', 1); return; }
    var vh = innerHeight, vw = de.clientWidth, r = rx.getBoundingClientRect();
    var p = clamp(-r.top / (r.height - vh), 0, 1), e = ease(clamp(p / .7, 0, 1));
    var h0 = Math.min(vh * .62, 560), w0 = h0 * 9 / 16;
    fr.style.width = (w0 + (vw - w0) * e) + 'px';
    fr.style.height = (h0 + (vh - h0) * e) + 'px';
    fr.style.borderRadius = (12 * (1 - e)) + 'px';
    var bar = vw > vh ? Math.max(0, (vh - vw / 2.39) / 2) * clamp((p - .62) / .2, 0, 1) : 0;
    rx.style.setProperty('--bar', bar + 'px');
    rx.style.setProperty('--ui', clamp((p - .55) / .25, 0, 1));
  }

  // Storyboard: en escritorio el scroll vertical desplaza los fotogramas en horizontal
  var st = document.querySelector('.story'), tr = st && st.querySelector('.story__track'), span = 0;
  function storySize() {
    if (!st) return;
    tr.style.transform = '';
    if (desk.matches && !reduce) {
      span = Math.max(0, tr.scrollWidth - de.clientWidth);
      st.style.height = (span + innerHeight * 1.1) + 'px';
    } else { span = 0; st.style.height = ''; }
  }
  function story() {
    if (!span) return;
    var r = st.getBoundingClientRect();
    var p = clamp(-r.top / (r.height - innerHeight), 0, 1);
    tr.style.transform = 'translate3d(' + (-p * span) + 'px,0,0)';
  }

  // Código de tiempo: la página dura 3 minutos de "película"
  var tcx = document.querySelector('.tcx');
  function pad(n) { return String(n).padStart(2, '0'); }
  function tc() {
    if (!tcx) return;
    var max = de.scrollHeight - innerHeight, t = (max > 0 ? scrollY / max : 0) * 180;
    tcx.textContent = 'TC 00:' + pad(Math.floor(t / 60)) + ':' + pad(Math.floor(t % 60)) + ':' + pad(Math.floor((t % 1) * 24));
  }

  var ticking = false;
  function frame() { reel(); story(); tc(); ticking = false; }
  addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(frame); } }, { passive: true });
  addEventListener('resize', function () { storySize(); frame(); });
  addEventListener('load', function () { storySize(); frame(); });
  storySize(); frame();

  // Destello de luz al cambiar de sección
  var leak = document.querySelector('.leak');
  if (leak && !reduce && 'IntersectionObserver' in window) {
    var last = null, first = true;
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting || e.target === last) return;
        last = e.target;
        if (first) { first = false; return; }
        leak.classList.remove('go'); void leak.offsetWidth; leak.classList.add('go');
      });
    }, { threshold: .35 });
    document.querySelectorAll('main > section').forEach(function (s) { io.observe(s); });
  }

  // Sonido ambiente (apagado por defecto)
  var snd = document.querySelector('.snd'), audio = null;
  if (snd) snd.addEventListener('click', function () {
    var on = snd.getAttribute('aria-pressed') === 'true';
    function set(v) { snd.setAttribute('aria-pressed', String(v)); snd.setAttribute('aria-label', v ? 'Silenciar sonido ambiente' : 'Activar sonido ambiente'); }
    if (!audio) {
      audio = new Audio('assets/media/ambient.mp3');
      audio.loop = true; audio.volume = .35;
      audio.addEventListener('error', function () {
        snd.classList.add('is-missing'); snd.querySelector('.snd__t').textContent = 'Audio pendiente'; set(false);
      });
    }
    if (on) { audio.pause(); set(false); }
    else { var p = audio.play(); if (p && p.then) p.then(function () { set(true); }).catch(function () {}); }
  });

  // Puntero en modo PLAY sobre videos
  var ring = document.querySelector('.cur--ring'), dot = document.querySelector('.cur--dot');
  if (ring) {
    ring.innerHTML = '<span>PLAY</span>';
    addEventListener('pointermove', function (e) {
      var on = !!(e.target.closest && e.target.closest('[data-play]'));
      ring.classList.toggle('is-play', on); if (dot) dot.classList.toggle('is-play', on);
    }, { passive: true });
  }
})();
