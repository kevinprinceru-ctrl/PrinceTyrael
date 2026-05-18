/* ===== HELIX-PHARM — MAIN JS ===== */

// ── Cart state ──────────────────────────────
let cart = JSON.parse(localStorage.getItem('hp_cart') || '[]');

function saveCart() {
  localStorage.setItem('hp_cart', JSON.stringify(cart));
}

function cartTotal() {
  return cart.reduce((s, i) => s + i.price * i.qty, 0);
}

function updateCartCount() {
  const total = cart.reduce((s, i) => s + i.qty, 0);
  document.querySelectorAll('#cartCount').forEach(el => el.textContent = total);
}

function renderCart() {
  const body  = document.getElementById('cartBody');
  const total = document.getElementById('cartTotal');
  if (!body) return;

  if (!cart.length) {
    body.innerHTML = '<p class="cart-empty-msg">Your cart is empty.</p>';
    if (total) total.textContent = '$0.00';
    return;
  }

  body.innerHTML = cart.map(item => `
    <div class="cart-line">
      <div class="cart-line-img">🧪</div>
      <div class="cart-line-info">
        <strong>${item.name}</strong>
        <span>Qty: ${item.qty}</span>
      </div>
      <span class="cart-line-price">$${(item.price * item.qty).toFixed(2)}</span>
      <button class="cart-line-rm" data-name="${item.name}" aria-label="Remove">✕</button>
    </div>
  `).join('');

  if (total) total.textContent = '$' + cartTotal().toFixed(2);

  body.querySelectorAll('.cart-line-rm').forEach(btn => {
    btn.addEventListener('click', () => {
      cart = cart.filter(i => i.name !== btn.dataset.name);
      saveCart();
      updateCartCount();
      renderCart();
    });
  });
}

function addToCart(name, price) {
  const existing = cart.find(i => i.name === name);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ name, price: parseFloat(price), qty: 1 });
  }
  saveCart();
  updateCartCount();
  renderCart();
  showToast(`${name} added to cart`);
}

// ── Toast ────────────────────────────────────
function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 2500);
}

// ── Menu (slide-out) ─────────────────────────
function initMenu() {
  const btn     = document.getElementById('menuBtn');
  const overlay = document.getElementById('menuOverlay');
  const menu    = document.getElementById('slideMenu');
  const close   = document.getElementById('menuClose');
  if (!btn) return;

  function open()  { menu.classList.add('open'); overlay.classList.add('open'); }
  function close_() { menu.classList.remove('open'); overlay.classList.remove('open'); }

  btn.addEventListener('click', open);
  close?.addEventListener('click', close_);
  overlay.addEventListener('click', close_);
}

// ── Cart drawer ──────────────────────────────
function initCartDrawer() {
  const cartBtn     = document.getElementById('cartBtn');
  const cartDrawer  = document.getElementById('cartDrawer');
  const cartOverlay = document.getElementById('cartOverlay');
  const cartClose   = document.getElementById('cartClose');
  if (!cartBtn) return;

  function open()  { cartDrawer.classList.add('open'); cartOverlay.classList.add('open'); }
  function close_() { cartDrawer.classList.remove('open'); cartOverlay.classList.remove('open'); }

  cartBtn.addEventListener('click', open);
  cartClose?.addEventListener('click', close_);
  cartOverlay.addEventListener('click', close_);
}

// ── Add-to-cart buttons ──────────────────────
function initAddToCart() {
  document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', () => {
      addToCart(btn.dataset.name, btn.dataset.price);
      btn.textContent = 'Added ✓';
      btn.classList.add('in-cart');
      setTimeout(() => {
        btn.textContent = 'Add To Cart';
        btn.classList.remove('in-cart');
      }, 1800);
    });
  });
}

// ── Scroll-top button ────────────────────────
function initScrollTop() {
  const btn = document.getElementById('scrollTop');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 300);
  });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ── Contact form ─────────────────────────────
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const consent = form.querySelector('#consent');
    if (!consent?.checked) {
      showToast('Please accept the terms to continue.');
      return;
    }
    showToast('Message sent! We\'ll be in touch soon.');
    form.reset();
  });
}

// ── Boot ─────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
  renderCart();
  initMenu();
  initCartDrawer();
  initAddToCart();
  initScrollTop();
  initContactForm();
});
