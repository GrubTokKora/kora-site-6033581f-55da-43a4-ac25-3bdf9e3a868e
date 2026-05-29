/* Bheema's website — vanilla interactions + data rendering */
(function () {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  const BRAND_PATHS = {
    instagram: "M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4577-.72 2.1228-1.3881.6651-.668 1.0742-1.3378 1.3793-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.4232-.1651 1.0576-.3614 2.227-.4171 1.2655-.06 1.6447-.0723 4.848-.0794 3.2033-.007 3.5835.0053 4.8495.0606 1.169.0509 1.8053.2444 2.2284.408.5606.216.96.4757 1.3816.895.4217.4194.6816.8176.9005 1.3787.1655.4219.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.0608 4.848-.051 1.17-.2456 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4226.1646-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0148a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0148",
    facebook: "M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z",
    youtube: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  };
  const brandSvg = (n) => {
    const rule = n === "youtube" ? ' fill-rule="evenodd"' : "";
    return `<svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" class="text-saffron shrink-0"><path${rule} d="${BRAND_PATHS[n]}"></path></svg>`;
  };
  const dot = (veg) => `<span class="dot ${veg ? 'veg' : 'nonveg'}"></span>`;
  const heatHTML = (n) => n ? `<span class="heat">${'●'.repeat(n)}${'○'.repeat(3 - n)}</span>` : '';

  /* ---- section heads ---- */
  $$('[data-head]').forEach(el => {
    el.innerHTML = `
      <div class="font-sans font-semibold text-[12px] tracking-[0.22em] uppercase text-saffron-deep">${el.dataset.eyebrow}</div>
      <h2 class="font-display text-ink text-4xl md:text-5xl mt-3 leading-tight">${el.dataset.title}</h2>
      <div class="flex justify-center mt-4"><img src="https://quseprdus1.blob.core.windows.net/kora-business-images/user-media/6033581f-55da-43a4-ac25-3bdf9e3a868e/de8c94d8-887e-4625-825f-ec262dbc28df/1780063756_rj7ess.png" alt="" class="w-52"></div>`;
  });

  /* ---- favorites ---- */
  $('#favorites').innerHTML = window.FAVORITES.map(it => `
    <article class="bg-surface border border-line rounded-brand overflow-hidden shadow-soft hover:shadow-lift transition-shadow">
      <div class="relative zoom">
        <img src="${it.img}" alt="${it.n}" class="w-full h-[220px] object-cover block">
        ${it.badge ? `<span class="absolute top-3 left-3 bg-saffron text-[#2A1B07] text-[11.5px] font-semibold px-2.5 py-1 rounded-full">${it.badge}</span>` : ''}
      </div>
      <div class="px-5 pt-4 pb-5">
        <div class="flex items-center gap-2 mb-1.5">${dot(it.veg)}${heatHTML(it.heat)}</div>
        <h3 class="font-serif font-semibold text-[23px] text-ink">${it.n}</h3>
        <p class="font-sans text-[14.5px] text-ink-3 leading-snug mt-2 mb-3.5">${it.d}</p>
        <div class="flex items-center justify-between">
          <span class="font-sans font-semibold text-lg text-garnet">$${it.p}</span>
          <span class="font-sans text-[13.5px] font-semibold text-saffron-deep flex items-center gap-1 cursor-pointer">Add to order <i data-lucide="chevron-right" class="w-[15px] h-[15px]"></i></span>
        </div>
      </div>
    </article>`).join('');

  /* ---- menu ---- */
  const cats = window.MENU.map(m => m.cat);
  let activeCat = cats[0], vegOnly = false;
  const tabsEl = $('#tabs'), listEl = $('#menulist');

  const tabLabel = (c) => c.replace(' / ', ' · ');
  function renderTabs() {
    tabsEl.innerHTML = cats.map(c => {
      const on = c === activeCat;
      return `<button data-cat="${c}" class="font-sans text-xs sm:text-sm font-semibold px-3 sm:px-4 py-2 sm:py-2.5 rounded-full transition-colors border whitespace-nowrap shrink-0 ${on ? 'bg-garnet text-parchment border-garnet' : 'bg-transparent text-ink-2 border-line-strong hover:border-garnet'}">${tabLabel(c)}</button>`;
    }).join('');
  }
  function renderList() {
    const group = window.MENU.find(m => m.cat === activeCat);
    const items = group.items.filter(it => !vegOnly || it.veg);
    if (!items.length) {
      listEl.innerHTML = `<p class="text-center text-ink-3 py-6">No vegetarian items in this section.</p>`;
      return;
    }
    listEl.innerHTML = items.map((it, i) => `
      <div class="py-5 ${i < items.length - 1 ? 'border-b border-line' : ''}">
        <div class="flex items-baseline gap-3">
          <span class="relative top-0.5">${dot(it.veg)}</span>
          <span class="font-serif font-semibold text-[22px] text-ink">${it.n}</span>
          ${it.heat ? `<span class="relative -top-px">${heatHTML(it.heat)}</span>` : ''}
          ${it.star ? `<i data-lucide="star" class="w-3.5 h-3.5 text-saffron relative top-0.5"></i>` : ''}
          <span class="leader"></span>
          <span class="font-sans font-semibold text-[17px] text-garnet tabular-nums shrink-0">$${it.p}</span>
        </div>
        ${it.d ? `<p class="font-sans text-sm text-ink-3 mt-1.5 ml-[26px] leading-snug max-w-[640px]">${it.d}</p>` : ''}
      </div>`).join('');
    lucide.createIcons();
  }
  renderTabs(); renderList();
  tabsEl.addEventListener('click', e => {
    const b = e.target.closest('[data-cat]'); if (!b) return;
    activeCat = b.dataset.cat; renderTabs(); renderList();
  });
  const vt = $('#vegtoggle');
  vt.addEventListener('click', () => {
    vegOnly = !vegOnly;
    vt.setAttribute('aria-pressed', String(vegOnly));
    vt.querySelector('.track').style.background = vegOnly ? 'var(--veg)' : 'var(--line-strong)';
    vt.querySelector('.knob').style.left = vegOnly ? '16px' : '2px';
    vt.style.color = vegOnly ? 'var(--veg)' : 'var(--ink-3)';
    renderList();
  });

  /* ---- visit / contact / hours ---- */
  const S = window.SITE;
  const row = (icon, label) => `
    <div class="flex items-center gap-3.5 py-2.5">
      <span class="w-[38px] h-[38px] rounded-md bg-saffron/10 flex items-center justify-center shrink-0"><i data-lucide="${icon}" class="w-[18px] h-[18px] text-saffron-bright"></i></span>
      <span class="font-sans text-[15.5px] text-parchment/90">${label}</span>
    </div>`;
  $('#contact').innerHTML = row('map-pin', S.address) + row('phone', S.phone) + row('wine', 'Full bar · Banquet hall for events &amp; catering');
  $('#hours').innerHTML = S.hours.map(h => `
    <div class="flex justify-between gap-4 py-2.5 border-b border-parchment/10 last:border-0">
      <span class="font-sans text-[14.5px] font-semibold text-parchment">${h.d}</span>
      <span class="font-sans text-[13.5px] text-parchment/65 tabular-nums">${h.t}</span>
    </div>`).join('');

  /* ---- footer ---- */
  $('#footvisit').innerHTML = `<div>${S.address}</div><div>${S.phone}</div><div>${S.hoursShort}</div>`;
  $('#socials').innerHTML = S.socials.map(s => `
    <a href="${s.href}" target="_blank" rel="noopener" class="flex items-center gap-2.5 py-1 group">
      ${brandSvg(s.icon)}<span class="font-sans text-[14.5px] text-parchment/75 group-hover:text-parchment transition-colors">${s.name}</span>
    </a>`).join('');

  /* ---- nav links + mobile ---- */
  const links = [['Menu', '#menu'], ['Our Story', '#story'], ['Visit', '#visit'], ['Catering', '#visit']];
  $('#navlinks').innerHTML = links.map(([t, h]) =>
    `<a href="${h}" class="font-sans text-[15px] font-semibold text-ink-2 hover:text-garnet transition-colors whitespace-nowrap">${t}</a>`).join('');
  const mm = $('#mobilemenu');
  mm.innerHTML = links.map(([t, h]) =>
    `<a href="${h}" class="block py-2.5 font-sans font-semibold text-ink-2">${t}</a>`).join('') +
    `<a href="tel:${S.phoneTel}" class="mt-2 block text-center w-full bg-garnet text-parchment font-semibold py-3 rounded-md">Order Online</a>`;
  $('#hamburger').addEventListener('click', () => {
    const hidden = mm.classList.contains('hidden');
    mm.classList.toggle('hidden', !hidden); mm.classList.toggle('flex', hidden);
  });
  mm.addEventListener('click', e => { if (e.target.closest('a')) { mm.classList.add('hidden'); mm.classList.remove('flex'); } });

  /* ---- nav shadow on scroll ---- */
  const nav = $('#nav');
  const onScroll = () => nav.classList.toggle('shadow-soft', window.scrollY > 40);
  window.addEventListener('scroll', onScroll); onScroll();

  /* ---- scroll reveal (progressive enhancement — never hides content permanently) ---- */
  function revealAll() { $$('.reveal').forEach(el => el.classList.add('in')); }
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { threshold: 0.12 });
    $$('.reveal').forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) el.classList.add('in'); // already in view
      else io.observe(el);
    });
    // safety net: if the observer never fires (some embed/iframe contexts), show everything
    setTimeout(revealAll, 700);
  } else {
    revealAll();
  }

  /* ---- icons ---- */
  lucide.createIcons();
})();
