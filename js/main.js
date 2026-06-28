/* ============================================================
   ABADI JAYA — main.js
   ============================================================ */

function waLink(msg) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}
function buildStars(rating) {
  let s = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating))     s += '<i class="fas fa-star"></i>';
    else if (i - 0.5 <= rating)      s += '<i class="fas fa-star-half-alt"></i>';
    else                             s += '<i class="far fa-star"></i>';
  }
  return s;
}

/* ===================== LOADER ===================== */
window.addEventListener('load', () => {
  setTimeout(() => document.getElementById('loader').classList.add('hidden'), 1700);
});

/* ===================== DARK MODE ===================== */
const html       = document.documentElement;
const darkToggle = document.getElementById('darkToggle');
const darkIcon   = document.getElementById('darkIcon');
let isDark = localStorage.getItem('theme') === 'dark';

function applyTheme() {
  html.setAttribute('data-theme', isDark ? 'dark' : 'light');
  darkIcon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
}
applyTheme();
darkToggle.addEventListener('click', () => {
  isDark = !isDark;
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  applyTheme();
});

/* ===================== NAVBAR ===================== */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

/* Ikon per menu — REVISI #3: nav mobile 2 kolom dengan ikon */
const NAV_ICONS = {
  '#beranda':    'fa-home',
  '#produk':     'fa-box-open',
  '#keunggulan': 'fa-medal',
  '#testimoni':  'fa-comments',
  '#tentang':    'fa-store',
  '#faq':        'fa-question-circle',
  '#kontak':     'fa-phone',
};

function renderNav() {
  const desktop = document.getElementById('navMenuDesktop');
  const mobile  = document.getElementById('navMobile');

  desktop.innerHTML = NAV_ITEMS
    .map(i => `<li><a href="${i.href}">${i.label}</a></li>`)
    .join('');

  /* Mobile: grid 2 kolom + tombol WA di bawah */
  const gridItems = NAV_ITEMS.map(i => {
    const icon = NAV_ICONS[i.href] || 'fa-circle';
    return `<a href="${i.href}"><i class="fas ${icon}"></i>${i.label}</a>`;
  }).join('');

  mobile.innerHTML = `
    <div class="nav-mobile-grid">${gridItems}</div>
    <div class="nav-mobile-wa">
      <a href="${waLink(WA_DEFAULT_MSG)}" target="_blank">
        <i class="fab fa-whatsapp"></i> Pesan Sekarang via WhatsApp
      </a>
    </div>`;
}
renderNav();

/* Update semua link WA */
document.querySelectorAll('[data-wa]').forEach(el => {
  el.href = waLink(el.dataset.wa || WA_DEFAULT_MSG);
});

/* ===================== HAMBURGER ===================== */
const hamburger = document.getElementById('hamburger');
const navMobile = document.getElementById('navMobile');
hamburger.addEventListener('click', () => navMobile.classList.toggle('open'));
navMobile.addEventListener('click', e => {
  if (e.target.closest('a')) navMobile.classList.remove('open');
});

/* ===================== BACK TO TOP ===================== */
const backTop = document.getElementById('backTop');
window.addEventListener('scroll', () => {
  backTop.classList.toggle('visible', window.scrollY > 500);
});
backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ===================== SMOOTH SCROLL ===================== */
document.addEventListener('click', e => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  const target = document.querySelector(a.getAttribute('href'));
  if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
});

/* ===================== AOS ===================== */
const observer = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add('visible'); observer.unobserve(en.target); }
  });
}, { threshold: 0.12 });

function observeAos() {
  document.querySelectorAll('.aos:not(.visible)').forEach(el => observer.observe(el));
}
observeAos();

/* ===================== COUNTER ===================== */
function animateCounter(el, target, duration = 1800, isDecimal = false) {
  let current = 0;
  const step  = target / (duration / 16);
  const timer = setInterval(() => {
    current += step;
    if (current >= target) { current = target; clearInterval(timer); }
    el.textContent = isDecimal
      ? current.toFixed(1)
      : Math.floor(current).toLocaleString('id-ID');
  }, 16);
}
const statsObs = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting) {
      animateCounter(document.getElementById('statPelanggan'), STATS.pelanggan);
      animateCounter(document.getElementById('statProduk'),    STATS.produk);
      animateCounter(document.getElementById('statTahun'),     STATS.tahun);
      animateCounter(document.getElementById('statRating'),    STATS.rating, 1800, true);
      statsObs.disconnect();
    }
  });
}, { threshold: 0.3 });
statsObs.observe(document.querySelector('.stats'));

/* ===================== PRODUK ===================== */
function renderProducts(filter = 'semua') {
  const grid = document.getElementById('productsGrid');
  const list = filter === 'semua' ? PRODUCTS : PRODUCTS.filter(p => p.category === filter);
  grid.innerHTML = list.map(p => {
    const msg     = `Halo saya ingin memesan ${p.name} ${p.weight} - ABADI JAYA`;
    const badge   = p.badge ? `<div class="product-badge-${p.badgeType}">${p.badge}</div>` : '';
    const imgHtml = p.img
      ? `<img src="${p.img}" alt="${p.name} ${p.weight}">`
      : `<i class="fas fa-box-open"></i>`;
    return `
      <div class="product-card aos">
        <div class="product-img">${imgHtml}${badge}</div>
        <div class="product-body">
          <div class="product-tag">${p.category === 'pedas' ? 'Varian Pedas' : 'Varian Original'}</div>
          <div class="product-name">${p.name}</div>
          <div class="product-weight"><i class="fas fa-weight-hanging" style="margin-right:4px;color:var(--gray-400)"></i>${p.weight}</div>
          <div class="product-desc">${p.desc}</div>
          <div class="product-stars">${buildStars(p.rating)} <span>(${p.reviews} ulasan)</span></div>
          <div class="product-footer">
            <div class="product-price">${p.price}</div>
            <a href="${waLink(msg)}" target="_blank" class="btn-order-wa">
              <i class="fab fa-whatsapp"></i> Pesan
            </a>
          </div>
        </div>
      </div>`;
  }).join('');
  observeAos();
}
renderProducts();

window.filterProduct = function(cat, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderProducts(cat);
};

/* ===================== TESTIMONI ===================== */
function renderTestimonials() {
  document.getElementById('testiGrid').innerHTML = TESTIMONIALS.map((t, i) => {
    const avatarHtml = t.avatar
      ? `<img src="${t.avatar}" alt="${t.name}" style="width:46px;height:46px;border-radius:50%;object-fit:cover;">`
      : `<div class="testi-avatar">${t.name.charAt(0)}</div>`;
    const delay = i > 0 ? ` aos-delay-${Math.min(i, 5)}` : '';
    return `
      <div class="testi-card aos${delay}">
        <div class="testi-stars">${'<i class="fas fa-star"></i>'.repeat(t.stars)}</div>
        <p class="testi-text">"${t.text}"</p>
        <div class="testi-author">
          ${avatarHtml}
          <div>
            <div class="testi-name">${t.name}</div>
            <div class="testi-city"><i class="fas fa-map-marker-alt"></i> ${t.city}</div>
          </div>
        </div>
      </div>`;
  }).join('');
  observeAos();
}
renderTestimonials();

/* ===================== FAQ ===================== */
function renderFaq() {
  document.getElementById('faqList').innerHTML = FAQS.map((f, i) => `
    <div class="faq-item" id="faq-${i}">
      <button class="faq-q" onclick="toggleFaq(${i})">
        <span>${f.q}</span>
        <i class="fas fa-chevron-down faq-arrow"></i>
      </button>
      <div class="faq-a">
        <div class="faq-a-inner">${f.a}</div>
      </div>
    </div>`).join('');
}
renderFaq();

window.toggleFaq = function(idx) {
  const item   = document.getElementById(`faq-${idx}`);
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
};
