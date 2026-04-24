/* ============================================================
   OpenHealth5G — Network Topology Background
   A subtle, drifting web of interconnected nodes evoking 5G
   connectivity. Rendered on a fixed canvas behind all content.
   ============================================================ */

(() => {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Network canvas lives inside the hero section only —
  // that's the only place it won't be hidden by opaque sections.
  const hero = document.querySelector('.hero');
  if (!hero) return;

  const canvas = document.createElement('canvas');
  canvas.style.position = 'absolute';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.zIndex = '0';
  canvas.style.pointerEvents = 'none';
  canvas.style.opacity = prefersReduced ? '0' : '0.35';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  hero.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  let W, H;
  let nodes = [];
  let raf = null;

  // ---- sizing ----
  function resize() {
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.parentElement.getBoundingClientRect();
    const w = canvas.width = Math.round(rect.width) * dpr;
    const h = canvas.height = Math.round(rect.height) * dpr;
    canvas.style.width = rect.width + 'px';
    canvas.style.height = rect.height + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    build();
  }

  // ---- node generation ----
  function build() {
    const rect = canvas.parentElement.getBoundingClientRect();
    const w = rect.width;
    const h = rect.height;
    const density = Math.max(30, Math.min(60, (w * h) / 25000));
    console.log(`Network canvas: ${w}x${h}, density: ${density}, prefersReduced: ${prefersReduced}`);
    nodes = [];
    for (let i = 0; i < density; i++) {
      nodes.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: 4 + Math.random() * 3,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.04 + Math.random() * 0.008,
      });
    }
  }

  // ---- draw ----
  function draw(time) {
    const rect = canvas.parentElement.getBoundingClientRect();
    const w = rect.width;
    const h = rect.height;
    const maxDist = prefersReduced ? 0 : 250;

    ctx.clearRect(0, 0, w, h);

    // lines
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist > maxDist) continue;

        const alpha = (1 - dist / maxDist) * 0.5;
        const grad = ctx.createLinearGradient(
          nodes[i].x, nodes[i].y,
          nodes[j].x, nodes[j].y
        );
        grad.addColorStop(0, `rgba(0,65,130,${alpha})`);
        grad.addColorStop(1, `rgba(0,184,230,${alpha})`);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        ctx.moveTo(nodes[i].x, nodes[i].y);
        ctx.lineTo(nodes[j].x, nodes[j].y);
        ctx.stroke();
      }
    }

    // nodes with subtle glow
    if (!prefersReduced) {
      for (const n of nodes) {
        n.pulse += n.pulseSpeed;
        const glow = 0.5 + 0.5 * Math.sin(n.pulse);
        const r = n.r * (0.85 + 0.15 * glow);

        // glow halo
        ctx.shadowBlur = 10 * glow;
        ctx.shadowColor = `rgba(0,184,230,${0.3 * glow})`;
        ctx.fillStyle = `rgba(0,184,230,${0.4 + 0.4 * glow})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx.fill();

        // core
        ctx.shadowBlur = 0;
        ctx.fillStyle = `rgba(0,65,130,${0.6 + 0.3 * glow})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, r * 0.5, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // drift
    if (!prefersReduced) {
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
        n.x = Math.max(0, Math.min(w, n.x));
        n.y = Math.max(0, Math.min(h, n.y));
      }
    }

    raf = requestAnimationFrame(draw);
  }

  // ---- init ----
  window.addEventListener('resize', resize);
  resize();

  // fade out during scroll for performance, fade back in after idle
  let scrollTimer;
  const onScroll = () => {
    canvas.style.opacity = '0';
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => {
      canvas.style.opacity = prefersReduced ? '0' : '0.35';
    }, 300);
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  raf = requestAnimationFrame(draw);
})();
