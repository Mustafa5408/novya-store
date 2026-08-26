/* =========================================================
   NOVYA STORE - UPDATED STYLES
========================================================= */

:root {
    --primary: #111827;
    --secondary: #f59e0b;
    --secondary-dark: #d97706;
    --background: #f8fafc;
    --white: #ffffff;
    --text: #111827;
    --muted: #64748b;
    --border: #e2e8f0;
    --success: #15803d;
    --danger: #dc2626;
    --radius: 16px;
    --shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
    --container: 1200px;
}

* { box-sizing: border-box; margin: 0; padding: 0; }

html { scroll-behavior: smooth; }

body {
    font-family: Inter, Arial, Helvetica, sans-serif;
    background: var(--background);
    color: var(--text);
    line-height: 1.6;
}

button, input, textarea { font: inherit; }
button { cursor: pointer; }
a { color: inherit; text-decoration: none; }

.top-bar {
    background: var(--primary);
    color: #fff;
    text-align: center;
    padding: 9px 15px;
    font-size: 13px;
    font-weight: 700;
}

.main-header {
    background: #fff;
    border-bottom: 1px solid var(--border);
    position: sticky;
    top: 0;
    z-index: 1000;
}

.header-container {
    max-width: var(--container);
    margin: auto;
    padding: 18px 20px;
    display: flex;
    align-items: center;
    gap: 25px;
}

.logo {
    font-size: 22px;
    font-weight: 900;
    letter-spacing: -1px;
    white-space: nowrap;
}

.logo span:first-child,
.logo span:last-child { color: var(--secondary); }

.logo span:last-child { font-size: 14px; }

.search-area {
    flex: 1;
    display: flex;
    max-width: 600px;
    margin: auto;
}

.search-area input {
    width: 100%;
    border: 1px solid var(--border);
    border-right: 0;
    border-radius: 10px 0 0 10px;
    padding: 12px 15px;
    outline: none;
}

.search-area input:focus { border-color: var(--secondary); }

.search-area button {
    border: 0;
    background: var(--secondary);
    color: var(--primary);
    padding: 0 20px;
    border-radius: 0 10px 10px 0;
    font-weight: 800;
}

.cart-button {
    border: 0;
    background: var(--primary);
    color: #fff;
    padding: 11px 17px;
    border-radius: 10px;
    font-weight: 700;
    white-space: nowrap;
}

.cart-button span {
    background: var(--secondary);
    color: var(--primary);
    border-radius: 50%;
    min-width: 22px;
    height: 22px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin-left: 5px;
    font-size: 12px;
}

.mobile-menu-btn {
    display: none;
    border: 0;
    background: transparent;
    font-size: 25px;
}

.main-nav {
    background: #fff;
    border-bottom: 1px solid var(--border);
}

.nav-container {
    max-width: var(--container);
    margin: auto;
    padding: 0 20px;
    display: flex;
    align-items: center;
    gap: 22px;
    overflow-x: auto;
}

.nav-container a {
    padding: 14px 0;
    font-size: 14px;
    color: var(--muted);
    white-space: nowrap;
    border-bottom: 2px solid transparent;
}

.nav-container a:hover {
    color: var(--primary);
    border-color: var(--secondary);
}

/* Hero */
.hero { padding: 70px 20px; }

.hero-container {
    max-width: var(--container);
    margin: auto;
    display: grid;
    grid-template-columns: 1.5fr .8fr;
    gap: 40px;
    align-items: center;
}

.eyebrow {
    color: var(--secondary-dark);
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 2px;
    margin-bottom: 8px;
}

.hero h1 {
    font-size: clamp(42px, 6vw, 70px);
    line-height: 1.05;
    letter-spacing: -3px;
    margin-bottom: 20px;
}

.hero h1 span { display: block; color: var(--secondary-dark); }

.hero-description {
    max-width: 650px;
    color: var(--muted);
    font-size: 18px;
    margin-bottom: 30px;
}

.hero-buttons { display: flex; gap: 12px; flex-wrap: wrap; }

.primary-btn, .secondary-btn {
    display: inline-block;
    border: 0;
    padding: 13px 22px;
    border-radius: 10px;
    font-weight: 800;
}

.primary-btn { background: var(--primary); color: #fff; }
.secondary-btn { background: #fff; color: var(--primary); border: 1px solid var(--border); }

.hero-card {
    background: var(--primary);
    color: #fff;
    border-radius: 25px;
    padding: 45px;
    min-height: 320px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: var(--shadow);
}

.hero-card p { color: var(--secondary); font-size: 12px; font-weight: 800; letter-spacing: 2px; }
.hero-card h2 { font-size: 42px; line-height: 1.05; margin: 15px 0; }
.hero-card span { color: #cbd5e1; }

/* Features */
.features {
    max-width: var(--container);
    margin: auto;
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;
}

.feature {
    background: #fff;
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 20px;
    display: flex;
    gap: 12px;
    align-items: flex-start;
}

.feature-icon { font-size: 24px; }
.feature strong { display: block; font-size: 14px; }
.feature p { color: var(--muted); font-size: 12px; margin-top: 3px; }

/* Products */
.products-section {
    max-width: var(--container);
    margin: auto;
    padding: 70px 20px 50px;
}

.products-heading {
    display: flex;
    justify-content: space-between;
    align-items: end;
    gap: 20px;
    margin-bottom: 30px;
}

.section-heading h2 {
    font-size: 36px;
    line-height: 1.1;
    letter-spacing: -1px;
}

.view-all-link {
    color: var(--secondary-dark);
    font-weight: 800;
}

.product-result-count {
    color: var(--muted);
    font-size: 14px;
}

.products-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
}

.product-card {
    background: #fff;
    border: 1px solid var(--border);
    border-radius: var(--radius);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    box-shadow: 0 5px 18px rgba(15, 23, 42, .04);
}

.product-image-wrapper {
    position: relative;
    background: #f1f5f9;
    aspect-ratio: 1 / 1;
    overflow: hidden;
}

.product-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform .25s ease;
}

.product-card:hover .product-image { transform: scale(1.03); }

.stock-badge {
    position: absolute;
    top: 12px;
    left: 12px;
    background: var(--secondary);
    color: var(--primary);
    border-radius: 999px;
    padding: 5px 9px;
    font-size: 11px;
    font-weight: 800;
}

.stock-badge.out {
    background: #fee2e2;
    color: var(--danger);
}

.product-content {
    padding: 18px;
    display: flex;
    flex-direction: column;
    flex: 1;
}

.product-category {
    color: var(--secondary-dark);
    text-transform: uppercase;
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 1px;
    margin-bottom: 5px;
}

.product-name { font-size: 18px; line-height: 1.25; margin-bottom: 8px; }

.product-description {
    color: var(--muted);
    font-size: 13px;
    margin-bottom: 15px;
    min-height: 42px;
}

.product-bottom { margin-top: auto; }

.product-price {
    font-size: 21px;
    font-weight: 900;
    margin-bottom: 10px;
}

.product-actions {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
}

.add-to-cart-btn,
.buy-now-btn {
    width: 100%;
    border: 0;
    padding: 11px 8px;
    border-radius: 9px;
    font-weight: 800;
}

.add-to-cart-btn { background: var(--primary); color: #fff; }
.buy-now-btn { background: var(--secondary); color: var(--primary); }

.add-to-cart-btn:hover { background: #1f2937; }
.buy-now-btn:hover { background: var(--secondary-dark); color: #fff; }

.add-to-cart-btn:disabled,
.buy-now-btn:disabled {
    background: #cbd5e1;
    color: #64748b;
    cursor: not-allowed;
}

.empty-products {
    background: #fff;
    border: 1px dashed var(--border);
    border-radius: var(--radius);
    padding: 70px 20px;
    text-align: center;
}

.empty-icon { font-size: 45px; margin-bottom: 10px; }
.empty-products h3 { font-size: 22px; margin-bottom: 5px; }
.empty-products p { color: var(--muted); margin-bottom: 20px; }
.inline-btn { margin-top: 5px; }

/* Category page */
.category-hero {
    background: linear-gradient(135deg, #111827, #1f2937);
    color: #fff;
    padding: 70px 20px;
}

.category-hero-container {
    max-width: var(--container);
    margin: auto;
}

.category-hero .eyebrow { color: var(--secondary); }
.category-hero h1 { font-size: clamp(38px, 5vw, 60px); line-height: 1.05; margin-bottom: 15px; }
.category-hero p:not(.eyebrow) { color: #cbd5e1; max-width: 650px; margin-bottom: 25px; }
.category-products-section { padding-top: 60px; }

/* Checkout */
.checkout-section {
    padding: 90px 20px;
    background: #eef2f7;
    margin-top: 30px;
}

.checkout-container {
    max-width: var(--container);
    margin: auto;
    display: grid;
    grid-template-columns: .8fr 1.2fr;
    gap: 50px;
}

.checkout-info h2 { font-size: 42px; line-height: 1.1; margin-bottom: 12px; }
.checkout-info > p { color: var(--muted); margin-bottom: 25px; }

.checkout-summary {
    background: #fff;
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 20px;
    font-size: 14px;
}

.summary-item {
    display: flex;
    justify-content: space-between;
    gap: 15px;
    padding: 8px 0;
    border-bottom: 1px solid var(--border);
}

.summary-item:last-child { border-bottom: 0; }

.order-form {
    background: #fff;
    padding: 30px;
    border-radius: var(--radius);
    box-shadow: var(--shadow);
}

.form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
}

.form-group { margin-bottom: 18px; }
.form-group label { display: block; font-weight: 700; font-size: 13px; margin-bottom: 7px; }

.form-group input,
.form-group textarea {
    width: 100%;
    border: 1px solid var(--border);
    border-radius: 9px;
    padding: 12px;
    outline: none;
    resize: vertical;
}

.form-group input:focus,
.form-group textarea:focus { border-color: var(--secondary); }

.payment-note {
    background: #fffbeb;
    border: 1px solid #fde68a;
    color: #92400e;
    padding: 12px;
    border-radius: 9px;
    margin-bottom: 15px;
    font-size: 13px;
}

.place-order-btn,
.checkout-btn {
    display: block;
    width: 100%;
    border: 0;
    background: var(--primary);
    color: #fff;
    padding: 13px;
    border-radius: 9px;
    font-weight: 800;
    text-align: center;
}

.order-message { min-height: 22px; margin-bottom: 10px; font-weight: 700; }
.order-message.success { color: var(--success); }
.order-message.error { color: var(--danger); }

/* Cart */
.cart-overlay {
    position: fixed;
    inset: 0;
    background: rgba(15, 23, 42, .45);
    z-index: 1998;
    opacity: 0;
    visibility: hidden;
    transition: .2s;
}

.cart-overlay.open { opacity: 1; visibility: visible; }

.cart-drawer {
    position: fixed;
    top: 0;
    right: 0;
    width: min(460px, 100%);
    height: 100vh;
    background: #fff;
    z-index: 1999;
    transform: translateX(100%);
    transition: .25s ease;
    display: flex;
    flex-direction: column;
    box-shadow: -10px 0 30px rgba(0,0,0,.12);
}

.cart-drawer.open { transform: translateX(0); }

.cart-header {
    padding: 22px;
    border-bottom: 1px solid var(--border);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.cart-header h2 { line-height: 1.1; }

.cart-close {
    border: 0;
    background: transparent;
    font-size: 32px;
    line-height: 1;
}

.cart-items {
    flex: 1;
    overflow-y: auto;
    padding: 18px;
}

.cart-item {
    display: grid;
    grid-template-columns: 70px 1fr auto;
    gap: 12px;
    padding: 12px 0;
    border-bottom: 1px solid var(--border);
}

.cart-item-image {
    width: 70px;
    height: 70px;
    object-fit: cover;
    border-radius: 10px;
    background: #f1f5f9;
}

.cart-item-name { font-weight: 800; }
.cart-item-price { color: var(--muted); font-size: 13px; }

.quantity-controls {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 8px;
}

.quantity-controls button {
    width: 28px;
    height: 28px;
    border: 1px solid var(--border);
    background: #fff;
    border-radius: 6px;
}

.quantity-controls span {
    min-width: 25px;
    text-align: center;
    font-size: 13px;
    font-weight: 700;
}

.remove-cart-item {
    border: 0;
    background: transparent;
    color: var(--danger);
    font-size: 12px;
    margin-top: 6px;
}

.cart-item-total { font-weight: 800; font-size: 13px; white-space: nowrap; }

.cart-empty { text-align: center; color: var(--muted); padding: 60px 15px; }

.cart-footer {
    border-top: 1px solid var(--border);
    padding: 20px;
}

.cart-total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
}

.cart-total strong { font-size: 20px; }

/* Footer */
footer {
    background: var(--primary);
    color: #fff;
    padding: 60px 20px 20px;
}

.footer-container {
    max-width: var(--container);
    margin: auto;
    display: grid;
    grid-template-columns: 1.5fr 1fr 1fr 1.3fr;
    gap: 40px;
}

.footer-brand p {
    color: #94a3b8;
    font-size: 14px;
    margin-top: 12px;
    max-width: 350px;
}

.footer-column h3 { font-size: 15px; margin-bottom: 15px; }
.footer-column a,
.footer-column p {
    display: block;
    color: #94a3b8;
    font-size: 13px;
    margin-bottom: 9px;
}

.footer-column a:hover { color: #fff; }

.footer-bottom {
    max-width: var(--container);
    margin: 40px auto 0;
    padding-top: 20px;
    border-top: 1px solid rgba(255,255,255,.1);
    color: #94a3b8;
    text-align: center;
    font-size: 12px;
}

/* Responsive */
@media (max-width: 1000px) {
    .products-grid { grid-template-columns: repeat(3, 1fr); }
    .features { grid-template-columns: repeat(2, 1fr); }
    .footer-container { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 760px) {
    .header-container { flex-wrap: wrap; gap: 12px; }
    .mobile-menu-btn { display: block; }
    .search-area { order: 3; flex-basis: 100%; max-width: none; }
    .main-nav { overflow: hidden; }
    .nav-container { gap: 16px; }
    .hero-container,
    .checkout-container { grid-template-columns: 1fr; }
    .hero { padding: 50px 20px; }
    .hero-card { min-height: 250px; }
    .products-grid { grid-template-columns: repeat(2, 1fr); }
    .form-row { grid-template-columns: 1fr; gap: 0; }
    .products-heading { align-items: flex-start; }
}

@media (max-width: 520px) {
    .features,
    .products-grid,
    .footer-container { grid-template-columns: 1fr; }
    .hero h1 { font-size: 44px; letter-spacing: -2px; }
    .hero-card { padding: 30px; }
    .section-heading h2 { font-size: 30px; }
    .product-actions { grid-template-columns: 1fr; }
    .order-form { padding: 20px; }
    .footer-container { gap: 25px; }
}
