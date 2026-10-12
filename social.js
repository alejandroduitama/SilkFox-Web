(function () {
  var WHATSAPP_NUMBER = '573212841853'; // mismo WhatsApp Business que la web principal; cámbialo si Social tiene otro
  document.documentElement.classList.add('js');
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Revelado escalonado
  var els = document.querySelectorAll('.rv');
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        var sibs = Array.prototype.filter.call(e.target.parentElement.children, function (c) { return c.classList.contains('rv'); });
        e.target.style.setProperty('--d', Math.min(sibs.indexOf(e.target), 6) * 110 + 'ms');
        e.target.classList.add('in'); io.unobserve(e.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach(function (el) { io.observe(el); });
  } else els.forEach(function (el) { el.classList.add('in'); });
  var hero = document.querySelector('.hero');
  setTimeout(function () { hero.classList.add('go'); }, 650);

  // Filtro del portafolio
  var chips = document.querySelectorAll('.chip'), tiles = document.querySelectorAll('.tile');
  chips.forEach(function (c) {
    c.addEventListener('click', function () {
      var f = c.getAttribute('data-filter');
      chips.forEach(function (x) { var on = x === c; x.classList.toggle('is-on', on); x.setAttribute('aria-pressed', on); });
      tiles.forEach(function (t) { t.classList.add('is-fade'); });
      setTimeout(function () {
        tiles.forEach(function (t) { t.classList.toggle('is-hide', f !== 'all' && t.getAttribute('data-cat') !== f); });
        requestAnimationFrame(function () { tiles.forEach(function (t) { t.classList.remove('is-fade'); }); });
      }, reduce ? 0 : 320);
    });
  });


  // Película: se acerca a tamaño completo al entrar en pantalla
  var film = document.querySelector('.film__frame');
  if (film && !reduce) {
    var fTick = false;
    var fUpd = function () {
      var r = film.getBoundingClientRect(), vh = innerHeight;
      var p = Math.max(0, Math.min(1, (vh - r.top) / (vh * .9)));
      film.style.setProperty('--fs', (0.92 + 0.08 * p).toFixed(4));
      fTick = false;
    };
    addEventListener('scroll', function () { if (!fTick) { fTick = true; requestAnimationFrame(fUpd); } }, { passive: true });
    fUpd();
  }

  // Galería: zoom lento (Ken Burns) cuando la foto entra en pantalla
  if ('IntersectionObserver' in window) {
    var kio = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); kio.unobserve(e.target); } });
    }, { threshold: .25 });
    tiles.forEach(function (t) { kio.observe(t); });
  }

  // Elegir paquete: rellena el campo oculto antes de bajar al formulario
  var form = document.getElementById('date');
  document.querySelectorAll('[data-pack]').forEach(function (a) {
    a.addEventListener('click', function () { form.elements.paquete.value = a.getAttribute('data-pack'); });
  });

  // Formulario -> WhatsApp
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var bad = false;
    Array.prototype.forEach.call(form.elements, function (f) {
      if (!f.name || f.type === 'hidden') return;
      var empty = !f.value.trim(); f.classList.toggle('is-bad', empty); if (empty) bad = true;
    });
    var note = document.getElementById('formnote');
    if (bad) { note.textContent = 'Completa todos los campos para continuar.'; form.querySelector('.is-bad').focus(); return; }
    var d = new FormData(form), fecha = d.get('fecha').split('-').reverse().join('/');
    var msg = 'Hola, quiero agendar mi fecha con Silk Fox Social.\n' +
      'Nombre: ' + d.get('nombre').trim() + '\nFecha del evento: ' + fecha + '\nLocación: ' + d.get('lugar').trim() + '\nTipo de evento: ' + d.get('tipo') +
      (d.get('paquete') ? '\nPaquete de interés: ' + d.get('paquete') : '');
    window.open('https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(msg), '_blank', 'noopener');
    note.textContent = 'Listo. Se abrió WhatsApp con tu mensaje; envíalo y te respondemos.';
  });

  var y = document.getElementById('yr'); if (y) y.textContent = new Date().getFullYear();
})();
