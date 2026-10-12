/* Piezas cinematográficas compartidas por Silk Fox Media y Silk Fox Social:
   carga diferida de video, vistas previas al pasar el cursor, visor a pantalla
   completa y respaldo elegante cuando un asset todavía no existe. */
(function () {
  var html = document.documentElement;
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine = matchMedia('(hover: hover) and (pointer: fine)').matches;

  // En local (o con ?todo) se muestran las rutas de los assets que faltan
  if (location.protocol === 'file:' || /^(localhost|127\.)/.test(location.hostname) || /[?&]todo\b/.test(location.search)) {
    html.classList.add('show-todo');
  }
  function hostOf(el) { return el.closest('[data-media]') || el.parentElement; }

  // Imágenes: si cargan, se marca el contenedor; si faltan, se retiran y queda el relleno
  document.querySelectorAll('img[data-asset]').forEach(function (img) {
    var ok = function () { hostOf(img).classList.add('has-img'); };
    var bad = function () { img.remove(); };
    if (img.complete) { img.naturalWidth ? ok() : bad(); }
    else { img.addEventListener('load', ok); img.addEventListener('error', bad); }
  });

  // Videos: la fuente real se asigna solo cuando hace falta
  function load(v) {
    if (v.dataset.loaded) return;
    v.dataset.loaded = '1';
    var s = v.querySelector('source[data-src]');
    if (!s) return;
    s.addEventListener('error', function () { v.classList.add('is-missing'); });
    s.src = s.dataset.src;
    v.load();
  }
  function play(v) { load(v); if (!v.classList.contains('is-missing')) { var p = v.play(); if (p && p.catch) p.catch(function () {}); } }
  document.querySelectorAll('video').forEach(function (v) {
    v.addEventListener('playing', function () { hostOf(v).classList.add('has-video'); });
  });

  // Bucles de ambiente: se reproducen al entrar en pantalla y se pausan al salir
  var loops = document.querySelectorAll('video[data-lazy]');
  if ('IntersectionObserver' in window) {
    var lio = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) { if (!reduce) play(e.target); else load(e.target); }
        else if (!e.target.paused) e.target.pause();
      });
    }, { rootMargin: '200px 0px' });
    loops.forEach(function (v) { lio.observe(v); });
  }

  // Vistas previas: al pasar el cursor (escritorio) o al centrarse en pantalla (táctil)
  var previews = document.querySelectorAll('video[data-preview]');
  if (fine) {
    previews.forEach(function (v) {
      var card = v.closest('[data-play],[data-img]') || hostOf(v);
      card.addEventListener('pointerenter', function () { if (!reduce) play(v); });
      card.addEventListener('pointerleave', function () { v.pause(); });
    });
  } else if ('IntersectionObserver' in window && !reduce) {
    var pio = new IntersectionObserver(function (es) {
      es.forEach(function (e) { e.isIntersecting ? play(e.target) : e.target.pause(); });
    }, { threshold: 0.6 });
    previews.forEach(function (v) { pio.observe(v); });
  }

  // Visor a pantalla completa
  var dlg = document.createElement('dialog');
  dlg.className = 'lbx';
  dlg.setAttribute('aria-label', 'Reproductor');
  dlg.innerHTML = '<button class="lbx__x" type="button" aria-label="Cerrar">×</button><div class="lbx__stage"></div><p class="lbx__cap"></p>';
  document.body.appendChild(dlg);
  var stage = dlg.querySelector('.lbx__stage'), cap = dlg.querySelector('.lbx__cap');
  function missing(kind) { stage.innerHTML = '<p class="lbx__miss">Est' + (kind === 'img' ? 'a foto' : 'e video') + ' estará disponible muy pronto.</p>'; }
  function open(el) {
    stage.innerHTML = '';
    var d = el.dataset, node;
    if (d.vimeo) {
      node = document.createElement('iframe');
      node.src = 'https://player.vimeo.com/video/' + d.vimeo + '?autoplay=1&title=0&byline=0&portrait=0';
      node.allow = 'autoplay; fullscreen; picture-in-picture'; node.allowFullscreen = true;
    } else if (d.youtube) {
      node = document.createElement('iframe');
      node.src = 'https://www.youtube-nocookie.com/embed/' + d.youtube + '?autoplay=1&rel=0';
      node.allow = 'autoplay; fullscreen; picture-in-picture'; node.allowFullscreen = true;
    } else if (d.video) {
      node = document.createElement('video');
      node.controls = true; node.autoplay = true; node.playsInline = true;
      node.addEventListener('error', function () { missing('video'); }, true);
      var src = document.createElement('source'); src.src = d.video; src.type = 'video/mp4';
      src.addEventListener('error', function () { missing('video'); });
      node.appendChild(src);
    } else if (d.img !== undefined) {
      node = document.createElement('img');
      node.alt = d.title || '';
      node.addEventListener('error', function () { missing('img'); });
      node.src = el.getAttribute('href');
    }
    if (node) stage.appendChild(node);
    cap.textContent = d.title || '';
    dlg.showModal();
    html.classList.add('lbx-open');
  }
  function close() { stage.innerHTML = ''; if (dlg.open) dlg.close(); }
  dlg.addEventListener('close', function () { stage.innerHTML = ''; html.classList.remove('lbx-open'); });
  dlg.querySelector('.lbx__x').addEventListener('click', close);
  dlg.addEventListener('click', function (e) { if (e.target === dlg) close(); });
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('[data-play],[data-img]');
    if (!a || e.metaKey || e.ctrlKey || e.shiftKey) return;
    e.preventDefault();
    open(a);
  });
})();
