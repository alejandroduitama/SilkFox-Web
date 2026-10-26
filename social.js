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

  // Portafolio: filtros por celebración y por formato (foto / video)
  var chips = document.querySelectorAll('.chip'), kinds = document.querySelectorAll('.kind'),
      tiles = document.querySelectorAll('.tile'), empty = document.getElementById('empty');
  var fCat = 'all', fKind = 'all';
  function apply() {
    tiles.forEach(function (t) { t.classList.add('is-fade'); });
    setTimeout(function () {
      var shown = 0;
      tiles.forEach(function (t) {
        var hide = (fCat !== 'all' && t.getAttribute('data-cat') !== fCat) || (fKind !== 'all' && t.getAttribute('data-type') !== fKind);
        t.classList.toggle('is-hide', hide); if (!hide) shown++;
      });
      if (empty) empty.hidden = shown > 0;
      requestAnimationFrame(function () { tiles.forEach(function (t) { t.classList.remove('is-fade'); }); });
    }, reduce ? 0 : 320);
  }
  function wire(list, attr, set) {
    list.forEach(function (c) {
      c.addEventListener('click', function () {
        set(c.getAttribute(attr));
        list.forEach(function (x) { var on = x === c; x.classList.toggle('is-on', on); x.setAttribute('aria-pressed', on); });
        apply();
      });
    });
  }
  wire(chips, 'data-filter', function (v) { fCat = v; });
  wire(kinds, 'data-kind', function (v) { fKind = v; });

  // Vista previa en movimiento al pasar el cursor (solo con puntero fino y clip data-preview)
  if (matchMedia('(hover:hover) and (pointer:fine)').matches && !reduce) {
    tiles.forEach(function (t) {
      var src = t.getAttribute('data-preview'); if (!src) return;
      var btn = t.querySelector('.tile__btn'), v;
      btn.addEventListener('mouseenter', function () {
        if (!v) { v = document.createElement('video'); v.className = 'tile__video'; v.src = src; v.muted = true; v.loop = true; v.playsInline = true; v.setAttribute('aria-hidden', 'true'); btn.insertBefore(v, btn.querySelector('.play')); }
        v.play().catch(function () {});
      });
      btn.addEventListener('mouseleave', function () { if (v) { v.pause(); v.currentTime = 0; } });
    });
  }

  // Visor: fotos, clips propios (mp4) y films largos (embed)
  var lb = document.getElementById('lb'), stage = document.getElementById('lbStage'), cap = document.getElementById('lbCap');
  var items = [], cur = 0, opener = null;
  function render() {
    var el = items[cur], type = el.getAttribute('data-type'), full = el.getAttribute('data-full'),
        mp4 = el.getAttribute('data-video'), emb = el.getAttribute('data-embed'), node;
    stage.textContent = '';
    if (type === 'video' && emb) { node = document.createElement('iframe'); node.src = emb + (emb.indexOf('?') < 0 ? '?' : '&') + 'autoplay=1&rel=0'; node.allow = 'autoplay; fullscreen; picture-in-picture'; node.allowFullscreen = true; node.title = el.getAttribute('data-title') || 'Video'; }
    else if (type === 'video' && mp4) { node = document.createElement('video'); node.src = mp4; node.controls = true; node.autoplay = true; node.playsInline = true; }
    else if (type === 'foto' && full) { node = document.createElement('img'); node.src = full; node.alt = (el.querySelector('img') || {}).alt || ''; }
    else { node = document.createElement('div'); node.className = 'lb__ph'; node.textContent = type === 'video' ? 'Aquí va el video' : 'Aquí va la foto'; }
    stage.appendChild(node);
    var fc = el.querySelector('figcaption'); cap.textContent = (el.getAttribute('data-title') || (fc && fc.textContent) || '') + '  ·  ' + (cur + 1) + ' / ' + items.length;
  }
  function open(el) {
    items = Array.prototype.filter.call(document.querySelectorAll('.tile'), function (t) { return !t.classList.contains('is-hide'); });
    cur = Math.max(0, items.indexOf(el)); opener = el.querySelector('button');
    render(); if (!lb.open) lb.showModal(); document.documentElement.style.overflow = 'hidden';
  }
  function step(d) { cur = (cur + d + items.length) % items.length; render(); }
  document.querySelectorAll('.tile__btn').forEach(function (b) {
    b.addEventListener('click', function () { open(b.closest('figure')); });
  });
  lb.addEventListener('click', function (e) {
    var a = e.target.getAttribute && e.target.getAttribute('data-lb');
    if (a === 'close' || e.target === lb) lb.close(); else if (a === 'prev') step(-1); else if (a === 'next') step(1);
  });
  lb.addEventListener('keydown', function (e) { if (e.key === 'ArrowLeft') step(-1); else if (e.key === 'ArrowRight') step(1); });
  lb.addEventListener('close', function () { stage.textContent = ''; document.documentElement.style.overflow = ''; if (opener) opener.focus(); });

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
