/* =========================================================
   NOVYA STORE - UPDATED JAVASCRIPT
   Product management, category pages, cart, Buy Now,
   inventory, checkout and EmailJS order email.
========================================================= */

/* =========================================================
   ⭐ PRODUCT MANAGEMENT SECTION ⭐

   Future product changes are made HERE.

   Add product = add another object.
   Remove product = delete its object.
   Change price = edit price.
   Change stock = edit stock.
   Change category = edit category.
   Change image = edit image.
   Change description = edit description.
========================================================= */

const PRODUCTS = [
    {
        id: "chopper",
        name: "Chopper",
        category: "Kitchen Appliances",
        price: 2499,
        stock: 20,
        image: "https://placehold.co/800x800/f1f5f9/111827?text=Chopper",
        description: "Convenient kitchen chopper for quick and easy food preparation."
    },
    {
        id: "beater",
        name: "Beater",
        category: "Kitchen Appliances",
        price: 1999,
        stock: 15,
        image: "https://placehold.co/800x800/f1f5f9/111827?text=Beater",
        description: "Useful electric beater for mixing and preparing everyday recipes."
    },
    {
        id: "induction-hot-plate",
        name: "Induction Hot Plate",
        category: "Kitchen Appliances",
        price: 3499,
        stock: 10,
        image: "https://placehold.co/800x800/f1f5f9/111827?text=Induction+Hot+Plate",
        description: "Compact induction hot plate suitable for everyday cooking."
    },
    {
        id: "cooking-spoons",
        name: "Cooking Spoons",
        category: "Kitchen Utensils",
        price: 899,
        stock: 25,
        image: "https://placehold.co/800x800/f1f5f9/111827?text=Cooking+Spoons",
        description: "Practical cooking spoon set for everyday kitchen use."
    },
    {
        id: "knife-sets",
        name: "Knife Sets",
        category: "Kitchen Utensils",
        price: 1799,
        stock: 15,
        image: "https://placehold.co/800x800/f1f5f9/111827?text=Knife+Sets",
        description: "Useful kitchen knife set for everyday cutting and preparation."
    },
    {
        id: "premium-storage-boxes",
        name: "Premium Quality Storage Boxes",
        category: "Kitchen Utensils",
        price: 1499,
        stock: 20,
        image: "https://placehold.co/800x800/f1f5f9/111827?text=Storage+Boxes",
        description: "Premium quality storage boxes for organized kitchen storage."
    },
    {
        id: "nebulizer",
        name: "Nebulizer",
        category: "Electronics Gadgets",
        price: 2999,
        stock: 10,
        image: "https://placehold.co/800x800/f1f5f9/111827?text=Nebulizer",
        description: "Compact nebulizer suitable for home use."
    },
    {
        id: "trimmer",
        name: "Trimmer",
        category: "Electronics Gadgets",
        price: 1799,
        stock: 20,
        image: "https://placehold.co/800x800/f1f5f9/111827?text=Trimmer",
        description: "Convenient rechargeable trimmer for everyday grooming."
    },
    {
        id: "hair-brush",
        name: "Hair Brush",
        category: "Electronics Gadgets",
        price: 2299,
        stock: 15,
        image: "https://placehold.co/800x800/f1f5f9/111827?text=Hair+Brush",
        description: "Easy-to-use hair brush for everyday styling."
    },
    {
        id: "bags",
        name: "Bags",
        category: "Bags & Luggage",
        price: 2499,
        stock: 20,
        image: "https://placehold.co/800x800/f1f5f9/111827?text=Bags",
        description: "Useful everyday bags suitable for shopping, travel and daily use."
    }
];

const CATEGORIES = [
    "All Products",
    "Kitchen Appliances",
    "Kitchen Accessories",
    "Kitchen Utensils",
    "Home Appliances",
    "Home Accessories",
    "Home Decor",
    "Electronics Gadgets",
    "Mobile Accessories",
    "Personal Care",
    "Baby Accessories",
    "Tools & Tool Kits",
    "Men",
    "Women",
    "Bags & Luggage"
];

/* Existing working EmailJS configuration */
const EMAILJS_CONFIG = {
    PUBLIC_KEY: "lUS3en_oobE9akyfp",
    SERVICE_ID: "service_74rgsbc",
    TEMPLATE_ID: "template_uavapz8"
};

let cart = JSON.parse(localStorage.getItem("novyaCart") || "[]");
let stockOverrides = JSON.parse(localStorage.getItem("novyaStockOverrides") || "{}");

const isCategoryPage = document.body.classList.contains("category-page");

const productsGrid = document.getElementById("productsGrid");
const emptyProducts = document.getElementById("emptyProducts");
const productResultCount = document.getElementById("productResultCount");
const productsTitle = document.getElementById("productsTitle");
const categoryPageTitle = document.getElementById("categoryPageTitle");
const categoryPageDescription = document.getElementById("categoryPageDescription");

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const cartButton = document.getElementById("cartButton");
const cartCount = document.getElementById("cartCount");
const cartDrawer = document.getElementById("cartDrawer");
const cartOverlay = document.getElementById("cartOverlay");
const cartClose = document.getElementById("cartClose");
const cartItems = document.getElementById("cartItems");
const cartSubtotal = document.getElementById("cartSubtotal");
const checkoutBtn = document.getElementById("checkoutBtn");
const checkoutSummary = document.getElementById("checkoutSummary");
const orderForm = document.getElementById("orderForm");
const orderMessage = document.getElementById("orderMessage");
const placeOrderBtn = document.getElementById("placeOrderBtn");
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const currentYear = document.getElementById("currentYear");

function formatPrice(price) {
    return Number(price).toLocaleString("en-PK");
}

function escapeHTML(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function getProduct(productId) {
    return PRODUCTS.find(product => product.id === productId);
}

function getAvailableStock(product) {
    if (Object.prototype.hasOwnProperty.call(stockOverrides, product.id)) {
        return Math.max(0, Number(stockOverrides[product.id]));
    }
    return Math.max(0, Number(product.stock));
}

function saveCart() {
    localStorage.setItem("novyaCart", JSON.stringify(cart));
}

function saveStock() {
    localStorage.setItem("novyaStockOverrides", JSON.stringify(stockOverrides));
}

function getRequestedCategory() {
    const params = new URLSearchParams(window.location.search);
    const requested = params.get("category");
    if (!requested || requested === "all") return "All Products";
    return CATEGORIES.includes(requested) ? requested : "All Products";
}

function getCategoryProducts(category) {
    if (category === "All Products") return PRODUCTS;
    return PRODUCTS.filter(product => product.category === category);
}

function getSearchResults(products, term) {
    const search = String(term || "").trim().toLowerCase();
    if (!search) return products;

    return products.filter(product =>
        product.name.toLowerCase().includes(search) ||
        product.category.toLowerCase().includes(search) ||
        product.description.toLowerCase().includes(search)
    );
}

/* =========================================================
   PRODUCT CARD
========================================================= */

function productCardHTML(product) {
    const stock = getAvailableStock(product);
    const outOfStock = stock <= 0;

    return `
        <article class="product-card">
            <div class="product-image-wrapper">
                <img
                    class="product-image"
                    src="${escapeHTML(product.image)}"
                    alt="${escapeHTML(product.name)}"
                    loading="lazy"
                    onerror="this.src='https://placehold.co/800x800/f1f5f9/111827?text=NOVYA+Store'"
                >
                ${
                    outOfStock
                        ? `<span class="stock-badge out">Out of Stock</span>`
                        : `<span class="stock-badge">${stock} available</span>`
                }
            </div>

            <div class="product-content">
                <div class="product-category">${escapeHTML(product.category)}</div>
                <h3 class="product-name">${escapeHTML(product.name)}</h3>
                <p class="product-description">${escapeHTML(product.description)}</p>

                <div class="product-bottom">
                    <div class="product-price">Rs. ${formatPrice(product.price)}</div>

                    <div class="product-actions">
                        <button
                            class="add-to-cart-btn"
                            data-product-id="${escapeHTML(product.id)}"
                            ${outOfStock ? "disabled" : ""}
                        >
                            ${outOfStock ? "Out of Stock" : "Add to Cart"}
                        </button>

                        <button
                            class="buy-now-btn"
                            data-buy-now-id="${escapeHTML(product.id)}"
                            ${outOfStock ? "disabled" : ""}
                        >
                            ${outOfStock ? "Out of Stock" : "Buy Now"}
                        </button>
                    </div>
                </div>
            </div>
        </article>
    `;
}

/* =========================================================
   RENDER PRODUCTS
========================================================= */

function renderProducts() {
    if (!productsGrid) return;

    let category = isCategoryPage ? getRequestedCategory() : "All Products";
    let products = getCategoryProducts(category);

    if (isCategoryPage) {
        const search = searchInput ? searchInput.value.trim() : "";
        products = getSearchResults(products, search);

        if (categoryPageTitle) categoryPageTitle.textContent = category;
        if (categoryPageDescription) {
            categoryPageDescription.textContent =
                category === "All Products"
                    ? "Browse all currently available NOVYA Store products."
                    : `Browse products available in ${category}.`;
        }
    } else {
        /* Home page shows a small featured collection, not another category list. */
        products = getSearchResults(PRODUCTS, searchInput ? searchInput.value : "").slice(0, 8);
    }

    productsGrid.innerHTML = products.map(productCardHTML).join("");

    if (productResultCount) {
        productResultCount.textContent =
            `${products.length} ${products.length === 1 ? "product" : "products"}`;
    }

    if (emptyProducts) emptyProducts.hidden = products.length !== 0;

    productsGrid.querySelectorAll(".add-to-cart-btn").forEach(button => {
        button.addEventListener("click", () => addToCart(button.dataset.productId));
    });

    productsGrid.querySelectorAll(".buy-now-btn").forEach(button => {
        button.addEventListener("click", () => buyNow(button.dataset.buyNowId));
    });
}

/* =========================================================
   CART
========================================================= */

function addToCart(productId) {
    const product = getProduct(productId);
    if (!product) return;

    const stock = getAvailableStock(product);
    const existing = cart.find(item => item.productId === productId);
    const current = existing ? existing.quantity : 0;

    if (current >= stock) {
        alert(`Only ${stock} unit(s) of ${product.name} are available.`);
        return;
    }

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ productId, quantity: 1 });
    }

    saveCart();
    updateCartUI();
    openCart();
}

function buyNow(productId) {
    const product = getProduct(productId);
    if (!product) return;

    if (getAvailableStock(product) <= 0) {
        alert(`${product.name} is currently out of stock.`);
        return;
    }

    cart = [{ productId, quantity: 1 }];
    saveCart();

    /*
       Buy Now takes the customer directly to checkout.
       The order is still sent through the existing EmailJS setup.
    */
    window.location.href = "index.html#checkout";
}

function increaseQuantity(productId) {
    const product = getProduct(productId);
    const item = cart.find(entry => entry.productId === productId);

    if (!product || !item) return;

    const stock = getAvailableStock(product);

    if (item.quantity >= stock) {
        alert(`Only ${stock} unit(s) of ${product.name} are available.`);
        return;
    }

    item.quantity += 1;
    saveCart();
    updateCartUI();
}

function decreaseQuantity(productId) {
    const item = cart.find(entry => entry.productId === productId);
    if (!item) return;

    item.quantity -= 1;

    if (item.quantity <= 0) {
        cart = cart.filter(entry => entry.productId !== productId);
    }

    saveCart();
    updateCartUI();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.productId !== productId);
    saveCart();
    updateCartUI();
}

function updateCartUI() {
    if (!cartItems) return;

    let quantityTotal = 0;
    let subtotal = 0;

    cartItems.innerHTML = "";

    const validCart = [];

    cart.forEach(item => {
        const product = getProduct(item.productId);
        if (!product) return;

        const stock = getAvailableStock(product);

        if (item.quantity > stock) item.quantity = stock;
        if (item.quantity <= 0) return;

        validCart.push(item);
        quantityTotal += item.quantity;
        subtotal += product.price * item.quantity;

        const element = document.createElement("div");
        element.className = "cart-item";

        element.innerHTML = `
            <img
                class="cart-item-image"
                src="${escapeHTML(product.image)}"
                alt="${escapeHTML(product.name)}"
                onerror="this.src='https://placehold.co/200x200/f1f5f9/111827?text=NOVYA'"
            >

            <div>
                <div class="cart-item-name">${escapeHTML(product.name)}</div>
                <div class="cart-item-price">Rs. ${formatPrice(product.price)}</div>

                <div class="quantity-controls">
                    <button data-action="decrease" data-id="${escapeHTML(product.id)}">−</button>
                    <span>${item.quantity}</span>
                    <button data-action="increase" data-id="${escapeHTML(product.id)}">+</button>
                </div>

                <button class="remove-cart-item" data-action="remove" data-id="${escapeHTML(product.id)}">
                    Remove
                </button>
            </div>

            <div class="cart-item-total">
                Rs. ${formatPrice(product.price * item.quantity)}
            </div>
        `;

        cartItems.appendChild(element);
    });

    cart = validCart;
    saveCart();

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="cart-empty">
                <div style="font-size:40px;">🛒</div>
                <p>Your cart is empty.</p>
            </div>
        `;
    }

    if (cartCount) cartCount.textContent = quantityTotal;
    if (cartSubtotal) cartSubtotal.textContent = formatPrice(subtotal);

    updateCheckoutSummary();
}

if (cartItems) {
    cartItems.addEventListener("click", event => {
        const button = event.target.closest("button");
        if (!button) return;

        const id = button.dataset.id;
        const action = button.dataset.action;

        if (action === "increase") increaseQuantity(id);
        if (action === "decrease") decreaseQuantity(id);
        if (action === "remove") removeFromCart(id);
    });
}

/* =========================================================
   CART DRAWER
========================================================= */

function openCart() {
    if (cartDrawer) cartDrawer.classList.add("open");
    if (cartOverlay) cartOverlay.classList.add("open");
    document.body.style.overflow = "hidden";
}

function closeCart() {
    if (cartDrawer) cartDrawer.classList.remove("open");
    if (cartOverlay) cartOverlay.classList.remove("open");
    document.body.style.overflow = "";
}

if (cartButton) cartButton.addEventListener("click", openCart);
if (cartClose) cartClose.addEventListener("click", closeCart);
if (cartOverlay) cartOverlay.addEventListener("click", closeCart);

if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
        closeCart();
    });
}

/* =========================================================
   CHECKOUT SUMMARY
========================================================= */

function updateCheckoutSummary() {
    if (!checkoutSummary) return;

    if (cart.length === 0) {
        checkoutSummary.textContent = "Your cart is empty.";
        return;
    }

    let subtotal = 0;

    const rows = cart.map(item => {
        const product = getProduct(item.productId);
        if (!product) return "";

        const total = product.price * item.quantity;
        subtotal += total;

        return `
            <div class="summary-item">
                <span>${escapeHTML(product.name)} × ${item.quantity}</span>
                <strong>Rs. ${formatPrice(total)}</strong>
            </div>
        `;
    }).join("");

    checkoutSummary.innerHTML = `
        ${rows}
        <div class="summary-item" style="margin-top:8px;">
            <strong>Total</strong>
            <strong>Rs. ${formatPrice(subtotal)}</strong>
        </div>
    `;
}

/* =========================================================
   SEARCH
========================================================= */

function performSearch() {
    if (!searchInput) return;

    const term = searchInput.value.trim();

    if (isCategoryPage) {
        renderProducts();
        return;
    }

    if (!term) {
        renderProducts();
        return;
    }

    window.location.href =
        `category.html?category=All%20Products&search=${encodeURIComponent(term)}`;
}

if (searchBtn) searchBtn.addEventListener("click", performSearch);

if (searchInput) {
    searchInput.addEventListener("keydown", event => {
        if (event.key === "Enter") performSearch();
    });
}

/* Apply search query on category page */
if (isCategoryPage && searchInput) {
    const params = new URLSearchParams(window.location.search);
    const search = params.get("search") || "";
    searchInput.value = search;
}

/* =========================================================
   EMAILJS
========================================================= */

let emailJSInitialized = false;

function initializeEmailJS() {
    if (typeof emailjs === "undefined") {
        console.error("EmailJS SDK was not loaded.");
        return;
    }

    try {
        emailjs.init({
            publicKey: EMAILJS_CONFIG.PUBLIC_KEY
        });

        emailJSInitialized = true;
        console.log("EmailJS initialized successfully.");
    } catch (error) {
        console.error("EmailJS initialization failed:", error);
    }
}

initializeEmailJS();

function validateCartStock() {
    for (const item of cart) {
        const product = getProduct(item.productId);
        if (!product) continue;

        const stock = getAvailableStock(product);

        if (item.quantity > stock) {
            return {
                valid: false,
                message: `${product.name} has only ${stock} unit(s) available.`
            };
        }
    }

    return { valid: true, message: "" };
}

function generateOrderNumber() {
    return `NOVYA-${Math.floor(100000 + Math.random() * 900000)}`;
}

function buildOrderDetails() {
    let total = 0;

    const lines = cart.map(item => {
        const product = getProduct(item.productId);
        if (!product) return "";

        const lineTotal = product.price * item.quantity;
        total += lineTotal;

        return `${product.name} | Qty: ${item.quantity} | Rs. ${formatPrice(lineTotal)}`;
    });

    return {
        productLines: lines.join("\n"),
        total
    };
}

function reduceLocalStock() {
    cart.forEach(item => {
        const product = getProduct(item.productId);
        if (!product) return;

        const current = getAvailableStock(product);

        stockOverrides[product.id] = Math.max(
            0,
            current - item.quantity
        );
    });

    saveStock();
}

function showOrderMessage(message, type) {
    if (!orderMessage) return;

    orderMessage.textContent = message;
    orderMessage.className = `order-message ${type || ""}`;
}

if (orderForm) {
    orderForm.addEventListener("submit", async event => {
        event.preventDefault();

        if (cart.length === 0) {
            showOrderMessage("Please add at least one product to your cart.", "error");
            return;
        }

        const stockCheck = validateCartStock();

        if (!stockCheck.valid) {
            showOrderMessage(stockCheck.message, "error");
            updateCartUI();
            return;
        }

        if (!emailJSInitialized) {
            showOrderMessage(
                "Email service is not available. Please refresh the page and try again.",
                "error"
            );
            return;
        }

        const formData = new FormData(orderForm);

        const customerName = String(formData.get("customerName") || "").trim();
        const customerPhone = String(formData.get("customerPhone") || "").trim();
        const customerEmail = String(formData.get("customerEmail") || "").trim();
        const customerCity = String(formData.get("customerCity") || "").trim();
        const customerAddress = String(formData.get("customerAddress") || "").trim();
        const orderNotes = String(formData.get("orderNotes") || "").trim();

        const orderNumber = generateOrderNumber();
        const orderDetails = buildOrderDetails();

        if (placeOrderBtn) {
            placeOrderBtn.disabled = true;
            placeOrderBtn.textContent = "Sending Order...";
        }

        try {
            const templateParams = {
                order_number: orderNumber,
                order_date: new Date().toLocaleString("en-PK"),
                customer_name: customerName,
                customer_phone: customerPhone,
                customer_email: customerEmail || "Not provided",
                customer_city: customerCity,
                customer_address: customerAddress,
                order_notes: orderNotes || "None",
                order_items: orderDetails.productLines,
                order_total: `Rs. ${formatPrice(orderDetails.total)}`
            };

            await emailjs.send(
                EMAILJS_CONFIG.SERVICE_ID,
                EMAILJS_CONFIG.TEMPLATE_ID,
                templateParams
            );

            reduceLocalStock();

            cart = [];
            saveCart();
            updateCartUI();
            renderProducts();
            orderForm.reset();

            showOrderMessage(
                `Order ${orderNumber} has been submitted successfully. Thank you for shopping with NOVYA Store!`,
                "success"
            );
        } catch (error) {
            console.error("NOVYA EmailJS Order Error:", error);

            showOrderMessage(
                "We could not submit your order right now. Please check your internet connection and try again.",
                "error"
            );
        } finally {
            if (placeOrderBtn) {
                placeOrderBtn.disabled = false;
                placeOrderBtn.textContent = "Place Order";
            }
        }
    });
}

/* =========================================================
   MOBILE MENU
========================================================= */

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", () => {
        const nav = document.getElementById("mainNav");
        if (nav) nav.classList.toggle("mobile-open");
    });
}

/* =========================================================
   INITIALIZATION
========================================================= */

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

renderProducts();
updateCartUI();

/*
   If the customer follows a Buy Now link from a category page,
   the home page opens at the checkout section.
*/
if (window.location.hash === "#checkout" && orderForm) {
    setTimeout(() => {
        document.getElementById("checkout")?.scrollIntoView({
            behavior: "smooth"
        });
    }, 150);
}
