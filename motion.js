(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;


  // Puntero personalizado: punto exacto + aro que lo sigue
  if (fine) {
    var dot = document.createElement('div'), ring = document.createElement('div');
    dot.className = 'cur cur--dot'; ring.className = 'cur cur--ring';
    dot.setAttribute('aria-hidden', 'true'); ring.setAttribute('aria-hidden', 'true');
    document.body.appendChild(ring); document.body.appendChild(dot);
    var mx = -100, my = -100, rx = -100, ry = -100, started = false;
    var sel = 'a,button,summary,label,select,[role="button"]';
    var textSel = 'input,textarea';
    window.addEventListener('pointermove', function (e) {
      mx = e.clientX; my = e.clientY;
      if (!started) { started = true; rx = mx; ry = my; document.documentElement.classList.add('cur-on'); }
      dot.style.transform = 'translate(' + mx + 'px,' + my + 'px)';
      var t = e.target.closest ? e.target : null;
      ring.classList.toggle('is-link', !!(t && t.closest(sel)));
      var onO = !!(t && t.closest('.btn--primary,.fab,.badge,.nav__social'));
      dot.classList.toggle('on-orange', onO); ring.classList.toggle('on-orange', onO);
      var txt = !!(t && t.closest(textSel));
      ring.classList.toggle('is-text', txt); dot.classList.toggle('is-text', txt);
    }, { passive: true });
    window.addEventListener('pointerdown', function () { ring.classList.add('is-down'); });
    window.addEventListener('pointerup', function () { ring.classList.remove('is-down'); });
    document.documentElement.addEventListener('pointerleave', function () { dot.style.opacity = 0; ring.style.opacity = 0; });
    document.documentElement.addEventListener('pointerenter', function () { dot.style.opacity = ''; ring.style.opacity = ''; });
    (function follow() {
      var k = reduce ? 1 : 0.2;
      rx += (mx - rx) * k; ry += (my - ry) * k;
      ring.style.transform = 'translate(' + rx + 'px,' + ry + 'px)';
      requestAnimationFrame(follow);
    })();
  }

  // Barra de progreso de lectura
  var bar = document.createElement('div');
  bar.className = 'progress';
  bar.setAttribute('aria-hidden', 'true');
  document.body.appendChild(bar);

  // Titular del hero palabra por palabra (el texto accesible se conserva en aria-label)
  var h1 = document.querySelector('.hero__title');
  if (h1 && !reduce) {
    h1.setAttribute('aria-label', h1.textContent.replace(/\s+/g, ' ').trim());
    var i = 0;
    var wrap = function (text) {
      return text.trim().split(/\s+/).map(function (w) {
        return '<span class="w" aria-hidden="true"><span style="--i:' + (i++) + '">' + w + '</span></span>';
      }).join(' ');
    };
    var acc = h1.querySelector('.accent');
    var first = h1.firstChild.textContent;
    h1.innerHTML = wrap(first) + '<br><span class="accent">' + wrap(acc.textContent) + '</span>';
    h1.classList.add('split');
  }

  // Foco de luz que sigue al cursor (tarjetas y hero)
  if (fine && !reduce) {
    document.querySelectorAll('.card').forEach(function (c) {
      c.addEventListener('pointermove', function (e) {
        var r = c.getBoundingClientRect();
        c.style.setProperty('--mx', (e.clientX - r.left) + 'px');
        c.style.setProperty('--my', (e.clientY - r.top) + 'px');
      });
      c.addEventListener('pointerleave', function () { c.style.removeProperty('--mx'); c.style.removeProperty('--my'); });
    });
    var hero = document.querySelector('.hero');
    var tx = 78, ty = 82, cx = 78, cy = 82, run = false;
    var loop = function () {
      cx += (tx - cx) * 0.08; cy += (ty - cy) * 0.08;
      hero.style.setProperty('--gx', cx + '%'); hero.style.setProperty('--gy', cy + '%');
      if (Math.abs(tx - cx) + Math.abs(ty - cy) > 0.05) requestAnimationFrame(loop); else run = false;
    };
    hero.addEventListener('pointermove', function (e) {
      var r = hero.getBoundingClientRect();
      tx = (e.clientX - r.left) / r.width * 100; ty = (e.clientY - r.top) / r.height * 100;
      if (!run) { run = true; requestAnimationFrame(loop); }
    });
  }

  // Scroll: barra de progreso
  var ticking = false;
  function onScroll() {
    var max = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = 'scaleX(' + (max > 0 ? Math.min(scrollY / max, 1) : 0) + ')';
    ticking = false;
  }
  window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  onScroll();

  // Precios que cuentan hasta su valor al aparecer
  if (!reduce && 'IntersectionObserver' in window) {
    var targets = document.querySelectorAll('.price, .founders__amount');
    var co = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        co.unobserve(en.target);
        var node = en.target.firstChild;
        var m = node && node.nodeType === 3 && node.textContent.match(/\$([\d.]+)/);
        if (!m) return;
        var end = parseInt(m[1].replace(/\./g, ''), 10), t0 = null, orig = node.textContent;
        (function step(t) {
          if (!t0) t0 = t;
          var p = Math.min((t - t0) / 1400, 1), e = 1 - Math.pow(1 - p, 4);
          node.textContent = orig.replace(m[0], '$' + Math.round(end * e).toLocaleString('es-CO'));
          if (p < 1) requestAnimationFrame(step); else node.textContent = orig;
        })(performance.now());
      });
    }, { threshold: 0.6 });
    targets.forEach(function (t) { co.observe(t); });
  }
})();
