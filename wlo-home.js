/* West London Orthodontist — homepage behaviour
 * Extracted from "Homepage v3.dc.html" (Claude Design canvas export).
 * Plain vanilla JS; no build step, no dependencies.
 */
(function () {
  'use strict';

  // Webflow can execute footer custom code twice, which double-binds listeners.
  if (window.__wloHomeInit) return;
  window.__wloHomeInit = true;

  var io, onScroll, journeyScroll, onResize;
  var frets = [];

  function init() {
    // Gate the hidden reveal states on JS being alive — see wlo-home.css.
    document.documentElement.classList.add('js');

    // Section reveal on scroll
    io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('active'); });
    }, { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));

    // Header transparent -> solid on scroll
    const header = document.getElementById('siteHeader');
    onScroll = () => {
      if (!header) return;
      if (window.scrollY > 90) {
        header.style.setProperty('--hdr-fg', '#1c1c1c');
        header.style.setProperty('--hdr-bg', 'rgba(247,244,239,0.86)');
        header.style.backdropFilter = 'blur(18px)';
        header.style.borderBottomColor = 'rgba(28,28,28,0.08)';
      } else {
        header.style.setProperty('--hdr-fg', '#f5f0ea');
        header.style.setProperty('--hdr-bg', 'transparent');
        header.style.backdropFilter = 'none';
        header.style.borderBottomColor = 'transparent';
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Open the first FAQ item by default
    // Scoped to #faq: unscoped, this opens whichever <details> renders first,
    // which in Webflow may be a nav or CMS accordion.
    const faqRoot = document.getElementById('faq') || document;
    const firstFaq = faqRoot.querySelector('details');
    if (firstFaq) firstFaq.open = true;

    // Journey spiral scroll animation
    initJourney();

    // Video testimonials dot navigation
    const vt = document.getElementById('vidTrack');
    const vdots = [...document.querySelectorAll('.viddot')];
    if (vt && vdots.length) {
      const figs = [...vt.querySelectorAll(':scope > figure')];
      const base = figs.length ? figs[0].offsetLeft : 0;
      const setActive = (idx) => vdots.forEach((d, i) => {
        const on = i === idx;
        d.style.background = on ? '#825f62' : 'rgba(28,28,28,0.2)';
        d.style.width = on ? '26px' : '9px';
        d.style.borderRadius = on ? '5px' : '50%';
      });
      vdots.forEach((d, i) => d.addEventListener('click', () => {
        const f = figs[i];
        if (f) vt.scrollTo({ left: f.offsetLeft - base, behavior: 'smooth' });
        setActive(i);
      }));
      let vraf;
      vt.addEventListener('scroll', () => {
        cancelAnimationFrame(vraf);
        vraf = requestAnimationFrame(() => {
          const sl = vt.scrollLeft;
          let best = 0, bd = 1e9;
          figs.forEach((f, i) => { const dd = Math.abs((f.offsetLeft - base) - sl); if (dd < bd) { bd = dd; best = i; } });
          setActive(best);
        });
      }, { passive: true });
      setActive(0);
    }

    // Interactive fret canvases (dark + light)
    setTimeout(() => initFrets(), 40);
    onResize = () => (frets || []).forEach(f => f.resize());
    window.addEventListener('resize', onResize);
  }

  function initJourney() {
    const track = document.getElementById('journeyTrack');
    const fill = document.getElementById('journeyFill');
    if (!track || !fill) return;
    const steps = [...document.querySelectorAll('.jstep')];
    const dots = [...document.querySelectorAll('.jdot')];
    const thresholds = [0.05, 0.24, 0.43, 0.62, 0.81];
    // With preserveAspectRatio="none" + non-scaling-stroke, the dash pattern is in
    // SCREEN pixels, so the dash length must equal the path's on-screen length, not
    // its viewBox length. Snake spans the full height (1000 user-y) + 126 user-x of
    // horizontal travel, so screenLen = svgHeight + (126/100)*svgWidth.
    const svgEl = fill.ownerSVGElement;
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    journeyScroll = () => {
      const rect = track.getBoundingClientRect();
      // progress as the track scrolls up through the viewport
      let p = (window.innerHeight * 0.62 - rect.top) / rect.height;
      p = Math.max(0, Math.min(1, p));
      if (reduce) p = 1;
      const sr = svgEl.getBoundingClientRect();
      const len = sr.height + 1.4 * sr.width;
      fill.style.strokeDasharray = len;
      fill.style.strokeDashoffset = len * (1 - p);
      steps.forEach((el, i) => {
        const on = p >= thresholds[i];
        el.classList.toggle('on', on);
        if (dots[i]) dots[i].classList.toggle('on', on);
      });
      const cta = document.getElementById('journeyCta');
      if (cta) {
        const lit = p >= 0.985;
        cta.style.background = lit ? '#b08a52' : '#f5f0ea';
        cta.style.color = '#1c1c1c';            // was a no-op ternary, collapsed
        cta.style.boxShadow = lit ? '0 0 0 1px #b08a52, 0 10px 34px -10px rgba(176,138,82,0.65)' : 'none';
      }
    };
    window.addEventListener('scroll', journeyScroll, { passive: true });
    journeyScroll();
  }

  function initFrets() {
    document.querySelectorAll('canvas.fret-canvas').forEach(c => {
      if (!c.__fretInit) { c.__fretInit = true; frets.push(makeFret(c, { light: false })); }
    });
    document.querySelectorAll('canvas.fret-canvas-light').forEach(c => {
      if (!c.__fretInit) { c.__fretInit = true; frets.push(makeFret(c, { light: true })); }
    });
  }

  function makeFret(canvas, opts) {
    opts = opts || {};
    const light = !!opts.light;
    const ctx = canvas.getContext('2d');
    const PTS = [[8,8],[72,8],[72,72],[20,72],[20,20],[60,20],[60,60],[32,60],[32,32],[48,32],[48,48]];
    const CELL = 78;
    const s = { mx:0, my:0, tx:0, ty:0, w:0, h:0, dpr:1, ripples:[], raf:0, started:false };
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function resize() {
      const r = canvas.getBoundingClientRect();
      if (!r.width || !r.height) return;
      s.dpr = Math.min(window.devicePixelRatio || 1, 2);
      s.w = r.width; s.h = r.height;
      canvas.width = Math.round(r.width * s.dpr);
      canvas.height = Math.round(r.height * s.dpr);
      ctx.setTransform(s.dpr, 0, 0, s.dpr, 0, 0);
      if (!s.started) { s.tx = s.mx = s.w * 0.5; s.ty = s.my = s.h * 0.42; s.started = true; }
    }
    resize();

    const parent = canvas.parentElement;
    const onMove = (e) => { const r = canvas.getBoundingClientRect(); s.tx = e.clientX - r.left; s.ty = e.clientY - r.top; };
    const onLeave = () => { s.tx = s.w * 0.5; s.ty = s.h * 0.42; };
    const onDown = (e) => { const r = canvas.getBoundingClientRect(); s.ripples.push({ x: e.clientX - r.left, y: e.clientY - r.top, t: performance.now() }); if (s.ripples.length > 6) s.ripples.shift(); };
    parent.addEventListener('mousemove', onMove);
    parent.addEventListener('mouseleave', onLeave);
    parent.addEventListener('mousedown', onDown);

    function draw(now) {
      s.raf = requestAnimationFrame(draw);
      if (!s.w) { resize(); if (!s.w) return; }
      s.mx += (s.tx - s.mx) * 0.07;
      s.my += (s.ty - s.my) * 0.07;
      ctx.clearRect(0, 0, s.w, s.h);
      const sc = CELL / 80;
      const R = 235;
      const cols = Math.ceil(s.w / CELL) + 1;
      const rows = Math.ceil(s.h / CELL) + 1;
      for (let gy = 0; gy < rows; gy++) {
        for (let gx = 0; gx < cols; gx++) {
          const ox = gx * CELL, oy = gy * CELL;
          const cx = ox + CELL / 2, cy = oy + CELL / 2;
          const dx = s.mx - cx, dy = s.my - cy;
          const dist = Math.sqrt(dx * dx + dy * dy);
          let infl = Math.max(0, 1 - dist / R); infl = infl * infl;
          const amb = reduce ? 0.5 : (0.5 + 0.5 * Math.sin(now * 0.0006 + gx * 0.6 + gy * 0.7));
          let rip = 0;
          for (let i = 0; i < s.ripples.length; i++) {
            const rp = s.ripples[i];
            const age = (now - rp.t) / 1000;
            if (age > 1.6) continue;
            const rr = age * 430;
            const ax = cx - rp.x, ay = cy - rp.y;
            const rd = Math.sqrt(ax * ax + ay * ay);
            const band = Math.max(0, 1 - Math.abs(rd - rr) / 64);
            rip = Math.max(rip, band * (1 - age / 1.6));
          }
          let a, cr, cg, cb;
          if (light) {
            a = Math.min(0.2, 0.02 + amb * 0.012 + infl * 0.16 + rip * 0.13);
            const mix = Math.min(1, infl * 1.05 + rip * 0.8);
            cr = Math.round(150 + (74 - 150) * mix);
            cg = Math.round(120 + (53 - 120) * mix);
            cb = Math.round(122 + (55 - 122) * mix);
          } else {
            a = Math.min(0.72, 0.045 + amb * 0.03 + infl * 0.42 + rip * 0.34);
            const mix = Math.min(1, infl * 1.05 + rip * 0.8);
            cr = Math.round(130 + (176 - 130) * mix);
            cg = Math.round(95 + (138 - 95) * mix);
            cb = Math.round(98 + (82 - 98) * mix);
          }
          const push = infl * 7;
          const nx = dist > 0.001 ? dx / dist : 0, ny = dist > 0.001 ? dy / dist : 0;
          ctx.save();
          ctx.translate(ox + nx * push, oy + ny * push);
          ctx.scale(sc, sc);
          ctx.beginPath();
          ctx.moveTo(PTS[0][0], PTS[0][1]);
          for (let i = 1; i < PTS.length; i++) ctx.lineTo(PTS[i][0], PTS[i][1]);
          ctx.strokeStyle = 'rgba(' + cr + ',' + cg + ',' + cb + ',' + a + ')';
          ctx.lineWidth = lw(infl, rip) / sc;
          ctx.lineJoin = 'miter';
          ctx.stroke();
          ctx.restore();
        }
      }
    }
    function lw(infl, rip) { return 1.0 + infl * 1.7 + rip * 1.1; }
    s.raf = requestAnimationFrame(draw);

    return {
      resize,
      stop() { cancelAnimationFrame(s.raf); parent.removeEventListener('mousemove', onMove); parent.removeEventListener('mouseleave', onLeave); parent.removeEventListener('mousedown', onDown); }
    };
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
