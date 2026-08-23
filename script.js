/* =========================================================
   NOVYA STORE
   Main JavaScript
========================================================= */


/* =========================================================
   ⭐ PRODUCT MANAGEMENT SECTION ⭐

   IMPORTANT:
   This is the main section you will edit in the future.

   To ADD a product:
   Add another product object inside PRODUCTS.

   To REMOVE a product:
   Delete its complete object.

   To CHANGE PRICE:
   Change the "price" value.

   To CHANGE STOCK:
   Change the "stock" value.

   To CHANGE CATEGORY:
   Change the "category" value.

   To CHANGE IMAGE:
   Change the "image" value.

========================================================= */

const PRODUCTS = [

    {
        id: "chopper",
        name: "Chopper",
        category: "Kitchen Appliances",
        price: 2499,
        stock: 20,
        image: "https://placehold.co/800x800/f1f5f9/111827?text=Chopper",
        description:
            "Convenient kitchen chopper for quick and easy food preparation."
    },


    {
        id: "beater",
        name: "Beater",
        category: "Kitchen Appliances",
        price: 1999,
        stock: 15,
        image: "https://placehold.co/800x800/f1f5f9/111827?text=Beater",
        description:
            "Useful electric beater for mixing and preparing everyday recipes."
    },


    {
        id: "induction-hot-plate",
        name: "Induction Hot Plate",
        category: "Kitchen Appliances",
        price: 3499,
        stock: 10,
        image: "https://placehold.co/800x800/f1f5f9/111827?text=Induction+Hot+Plate",
        description:
            "Compact induction hot plate suitable for everyday cooking."
    },


    {
        id: "cooking-spoons",
        name: "Cooking Spoons",
        category: "Kitchen Utensils",
        price: 899,
        stock: 25,
        image: "https://placehold.co/800x800/f1f5f9/111827?text=Cooking+Spoons",
        description:
            "Practical cooking spoon set for everyday kitchen use."
    },


    {
        id: "knife-sets",
        name: "Knife Sets",
        category: "Kitchen Utensils",
        price: 1799,
        stock: 15,
        image: "https://placehold.co/800x800/f1f5f9/111827?text=Knife+Sets",
        description:
            "Useful kitchen knife set for everyday cutting and preparation."
    },


    {
        id: "premium-storage-boxes",
        name: "Premium Quality Storage Boxes",
        category: "Kitchen Utensils",
        price: 1499,
        stock: 20,
        image: "https://placehold.co/800x800/f1f5f9/111827?text=Storage+Boxes",
        description:
            "Premium quality storage boxes for organized kitchen storage."
    },


    {
        id: "nebulizer",
        name: "Nebulizer",
        category: "Electronics Gadgets",
        price: 2999,
        stock: 10,
        image: "https://placehold.co/800x800/f1f5f9/111827?text=Nebulizer",
        description:
            "Compact nebulizer suitable for home use."
    },


    {
        id: "trimmer",
        name: "Trimmer",
        category: "Electronics Gadgets",
        price: 1799,
        stock: 20,
        image: "https://placehold.co/800x800/f1f5f9/111827?text=Trimmer",
        description:
            "Convenient rechargeable trimmer for everyday grooming."
    },


    {
        id: "hair-brush",
        name: "Hair Brush",
        category: "Electronics Gadgets",
        price: 2299,
        stock: 15,
        image: "https://placehold.co/800x800/f1f5f9/111827?text=Hair+Brush",
        description:
            "Easy-to-use hair brush for everyday styling."
    },


    {
        id: "bags",
        name: "Bags",
        category: "Bags & Luggage",
        price: 2499,
        stock: 20,
        image: "https://placehold.co/800x800/f1f5f9/111827?text=Bags",
        description:
            "Useful everyday bags suitable for shopping, travel and daily use."
    }

];


/* =========================================================
   EXISTING CATEGORIES
   DO NOT REMOVE THESE.
========================================================= */

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


/* =========================================================
   APPLICATION STATE
========================================================= */

let selectedCategory = "All Products";

let searchTerm = "";

let cart = JSON.parse(
    localStorage.getItem("novyaCart") || "[]"
);


/*
   Local stock tracking.

   IMPORTANT:
   This is browser-based stock tracking for the current
   static version.

   A real shared inventory for all customers will be added
   later using a database/backend.
*/

let stockOverrides = JSON.parse(
    localStorage.getItem("novyaStockOverrides") || "{}"
);


/* =========================================================
   DOM ELEMENTS
========================================================= */

const productsGrid =
    document.getElementById("productsGrid");

const emptyProducts =
    document.getElementById("emptyProducts");

const productResultCount =
    document.getElementById("productResultCount");

const productsTitle =
    document.getElementById("productsTitle");

const categoryButtons =
    document.getElementById("categoryButtons");

const searchInput =
    document.getElementById("searchInput");

const searchBtn =
    document.getElementById("searchBtn");

const cartButton =
    document.getElementById("cartButton");

const cartCount =
    document.getElementById("cartCount");

const cartDrawer =
    document.getElementById("cartDrawer");

const cartOverlay =
    document.getElementById("cartOverlay");

const cartClose =
    document.getElementById("cartClose");

const cartItems =
    document.getElementById("cartItems");

const cartSubtotal =
    document.getElementById("cartSubtotal");

const checkoutBtn =
    document.getElementById("checkoutBtn");

const checkoutSummary =
    document.getElementById("checkoutSummary");

const orderForm =
    document.getElementById("orderForm");

const orderMessage =
    document.getElementById("orderMessage");

const placeOrderBtn =
    document.getElementById("placeOrderBtn");

const shopNowBtn =
    document.getElementById("shopNowBtn");

const viewProductsBtn =
    document.getElementById("viewProductsBtn");

const mobileMenuBtn =
    document.getElementById("mobileMenuBtn");

const mainNav =
    document.getElementById("mainNav");

const currentYear =
    document.getElementById("currentYear");


/* =========================================================
   HELPER FUNCTIONS
========================================================= */

function formatPrice(price) {

    return Number(price).toLocaleString("en-PK");

}


function getProduct(productId) {

    return PRODUCTS.find(
        product => product.id === productId
    );

}


function getAvailableStock(product) {

    if (
        Object.prototype.hasOwnProperty.call(
            stockOverrides,
            product.id
        )
    ) {
        return Math.max(
            0,
            Number(stockOverrides[product.id])
        );
    }

    return Math.max(
        0,
        Number(product.stock)
    );

}


function saveCart() {

    localStorage.setItem(
        "novyaCart",
        JSON.stringify(cart)
    );

}


function saveStock() {

    localStorage.setItem(
        "novyaStockOverrides",
        JSON.stringify(stockOverrides)
    );

}


/* =========================================================
   CATEGORY DISPLAY
========================================================= */

function renderCategoryButtons() {

    categoryButtons.innerHTML = "";

    CATEGORIES.forEach(category => {

        const button =
            document.createElement("button");

        button.className =
            "category-button";

        if (category === selectedCategory) {
            button.classList.add("active");
        }

        button.textContent = category;

        button.addEventListener(
            "click",
            () => {

                selectedCategory = category;

                searchTerm = "";

                searchInput.value = "";

                renderCategoryButtons();

                renderProducts();

                document
                    .getElementById("products")
                    .scrollIntoView({
                        behavior: "smooth"
                    });

            }
        );

        categoryButtons.appendChild(button);

    });

}


/* =========================================================
   FILTER PRODUCTS
========================================================= */

function getFilteredProducts() {

    return PRODUCTS.filter(product => {

        const matchesCategory =
            selectedCategory === "All Products" ||
            product.category === selectedCategory;

        const searchText =
            searchTerm.toLowerCase().trim();

        const matchesSearch =
            !searchText ||
            product.name
                .toLowerCase()
                .includes(searchText) ||
            product.description
                .toLowerCase()
                .includes(searchText) ||
            product.category
                .toLowerCase()
                .includes(searchText);

        return (
            matchesCategory &&
            matchesSearch
        );

    });

}


/* =========================================================
   PRODUCT CARDS
========================================================= */

function renderProducts() {

    const products =
        getFilteredProducts();

    productsGrid.innerHTML = "";

    productsTitle.textContent =
        selectedCategory;

    productResultCount.textContent =
        `${products.length} ${
            products.length === 1
                ? "product"
                : "products"
        }`;

    if (products.length === 0) {

        emptyProducts.hidden = false;

        return;

    }

    emptyProducts.hidden = true;


    products.forEach(product => {

        const stock =
            getAvailableStock(product);

        const outOfStock =
            stock <= 0;

        const card =
            document.createElement("article");

        card.className =
            "product-card";


        card.innerHTML = `

            <div class="product-image-wrapper">

                <img
                    class="product-image"
                    src="${product.image}"
                    alt="${escapeHTML(product.name)}"
                    loading="lazy"
                    onerror="this.src='https://placehold.co/800x800/f1f5f9/111827?text=NOVYA+Store'"
                >

                ${
                    stock > 0
                    ? `<span class="stock-badge">
                            ${stock} available
                       </span>`
                    : `<span class="stock-badge out">
                            Out of Stock
                       </span>`
                }

            </div>


            <div class="product-content">

                <div class="product-category">
                    ${escapeHTML(product.category)}
                </div>

                <h3 class="product-name">
                    ${escapeHTML(product.name)}
                </h3>

                <p class="product-description">
                    ${escapeHTML(product.description)}
                </p>

                <div class="product-bottom">

                    <div class="product-price">
                        Rs. ${formatPrice(product.price)}
                    </div>

                    <button
                        class="add-to-cart-btn"
                        data-product-id="${product.id}"
                        ${outOfStock ? "disabled" : ""}
                    >
                        ${
                            outOfStock
                            ? "Out of Stock"
                            : "Add to Cart"
                        }
                    </button>

                </div>

            </div>

        `;


        const addButton =
            card.querySelector(
                ".add-to-cart-btn"
            );

        if (!outOfStock) {

            addButton.addEventListener(
                "click",
                () => {

                    addToCart(product.id);

                }
            );

        }


        productsGrid.appendChild(card);

    });

}


/* =========================================================
   SECURITY HELPER
========================================================= */

function escapeHTML(value) {

    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

}


/* =========================================================
   CART
========================================================= */

function addToCart(productId) {

    const product =
        getProduct(productId);

    if (!product) {
        return;
    }

    const availableStock =
        getAvailableStock(product);

    const existingItem =
        cart.find(
            item => item.productId === productId
        );


    const currentQuantity =
        existingItem
            ? existingItem.quantity
            : 0;


    if (
        currentQuantity >=
        availableStock
    ) {

        alert(
            `Only ${availableStock} units of ${product.name} are available.`
        );

        return;

    }


    if (existingItem) {

        existingItem.quantity += 1;

    } else {

        cart.push({
            productId: productId,
            quantity: 1
        });

    }


    saveCart();

    updateCartUI();

    openCart();

}


function increaseQuantity(productId) {

    const product =
        getProduct(productId);

    if (!product) {
        return;
    }

    const item =
        cart.find(
            item => item.productId === productId
        );

    if (!item) {
        return;
    }

    const availableStock =
        getAvailableStock(product);


    if (
        item.quantity >=
        availableStock
    ) {

        alert(
            `Only ${availableStock} units of ${product.name} are available.`
        );

        return;

    }


    item.quantity += 1;

    saveCart();

    updateCartUI();

}


function decreaseQuantity(productId) {

    const item =
        cart.find(
            item => item.productId === productId
        );

    if (!item) {
        return;
    }


    item.quantity -= 1;


    if (item.quantity <= 0) {

        cart =
            cart.filter(
                cartItem =>
                    cartItem.productId !== productId
            );

    }


    saveCart();

    updateCartUI();

}


function removeFromCart(productId) {

    cart =
        cart.filter(
            item =>
                item.productId !== productId
        );

    saveCart();

    updateCartUI();

}


/* =========================================================
   CART UI
========================================================= */

function updateCartUI() {

    let totalQuantity = 0;

    let subtotal = 0;


    cartItems.innerHTML = "";


    if (cart.length === 0) {

        cartItems.innerHTML = `
            <div class="cart-empty">
                <div style="font-size:40px;">
                    🛒
                </div>

                <p>
                    Your cart is empty.
                </p>
            </div>
        `;

    }


    cart.forEach(item => {

        const product =
            getProduct(item.productId);

        if (!product) {
            return;
        }


        const availableStock =
            getAvailableStock(product);


        /*
           If stock changed and the cart quantity
           is now too high, automatically reduce it.
        */

        if (
            item.quantity >
            availableStock
        ) {

            item.quantity =
                availableStock;

        }


        if (item.quantity <= 0) {
            return;
        }


        totalQuantity +=
            item.quantity;


        subtotal +=
            product.price *
            item.quantity;


        const cartItem =
            document.createElement("div");

        cartItem.className =
            "cart-item";


        cartItem.innerHTML = `

            <img
                class="cart-item-image"
                src="${product.image}"
                alt="${escapeHTML(product.name)}"
                onerror="this.src='https://placehold.co/200x200/f1f5f9/111827?text=NOVYA'"
            >


            <div>

                <div class="cart-item-name">
                    ${escapeHTML(product.name)}
                </div>

                <div class="cart-item-price">
                    Rs. ${formatPrice(product.price)}
                </div>


                <div class="quantity-controls">

                    <button
                        data-action="decrease"
                        data-id="${product.id}"
                    >
                        −
                    </button>

                    <span>
                        ${item.quantity}
                    </span>

                    <button
                        data-action="increase"
                        data-id="${product.id}"
                    >
                        +
                    </button>

                </div>


                <button
                    class="remove-cart-item"
                    data-action="remove"
                    data-id="${product.id}"
                >
                    Remove
                </button>

            </div>


            <div class="cart-item-total">
                Rs.
                ${formatPrice(
                    product.price *
                    item.quantity
                )}
            </div>

        `;


        cartItems.appendChild(cartItem);

    });


    saveCart();


    cartCount.textContent =
        totalQuantity;


    cartSubtotal.textContent =
        formatPrice(subtotal);


    updateCheckoutSummary();

}


/* =========================================================
   CART BUTTON EVENTS
========================================================= */

cartItems.addEventListener(
    "click",
    event => {

        const button =
            event.target.closest("button");

        if (!button) {
            return;
        }


        const productId =
            button.dataset.id;

        const action =
            button.dataset.action;


        if (action === "increase") {

            increaseQuantity(productId);

        }

        else if (action === "decrease") {

            decreaseQuantity(productId);

        }

        else if (action === "remove") {

            removeFromCart(productId);

        }

    }
);


/* =========================================================
   CART OPEN / CLOSE
========================================================= */

function openCart() {

    cartDrawer.classList.add("open");

    cartOverlay.classList.add("open");

    document.body.style.overflow =
        "hidden";

}


function closeCart() {

    cartDrawer.classList.remove("open");

    cartOverlay.classList.remove("open");

    document.body.style.overflow =
        "";

}


cartButton.addEventListener(
    "click",
    openCart
);

cartClose.addEventListener(
    "click",
    closeCart
);

cartOverlay.addEventListener(
    "click",
    closeCart
);


/* =========================================================
   CHECKOUT SUMMARY
========================================================= */

function updateCheckoutSummary() {

    if (cart.length === 0) {

        checkoutSummary.innerHTML =
            "Your cart is empty.";

        return;

    }


    let subtotal = 0;


    const html =
        cart.map(item => {

            const product =
                getProduct(item.productId);

            if (!product) {
                return "";
            }


            const total =
                product.price *
                item.quantity;


            subtotal += total;


            return `
                <div class="summary-item">

                    <span>
                        ${escapeHTML(product.name)}
                        × ${item.quantity}
                    </span>

                    <strong>
                        Rs. ${formatPrice(total)}
                    </strong>

                </div>
            `;

        }).join("");


    checkoutSummary.innerHTML = `

        ${html}

        <div
            class="summary-item"
            style="margin-top:8px;"
        >

            <strong>
                Total
            </strong>

            <strong>
                Rs. ${formatPrice(subtotal)}
            </strong>

        </div>

    `;

}


/* =========================================================
   SEARCH
========================================================= */

function performSearch() {

    searchTerm =
        searchInput.value.trim();

    selectedCategory =
        "All Products";

    renderCategoryButtons();

    renderProducts();

    document
        .getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });

}


searchBtn.addEventListener(
    "click",
    performSearch
);


searchInput.addEventListener(
    "keydown",
    event => {

        if (event.key === "Enter") {

            performSearch();

        }

    }
);


/* =========================================================
   CHECKOUT
========================================================= */

checkoutBtn.addEventListener(
    "click",
    () => {

        closeCart();

        document
            .getElementById("checkout")
            .scrollIntoView({
                behavior: "smooth"
            });

    }
);


/* =========================================================
   EMAILJS CONFIGURATION
========================================================= */

/*
   IMPORTANT:

   We will fill these values during the EmailJS setup.

   DO NOT enter your Gmail password here.

   You will get these values from EmailJS:

   1. PUBLIC_KEY
   2. SERVICE_ID
   3. TEMPLATE_ID
*/

const EMAILJS_CONFIG = {

    PUBLIC_KEY:
        "YOUR_EMAILJS_PUBLIC_KEY",

    SERVICE_ID:
        "YOUR_EMAILJS_SERVICE_ID",

    TEMPLATE_ID:
        "YOUR_EMAILJS_TEMPLATE_ID"

};


/* =========================================================
   EMAILJS INITIALIZATION
========================================================= */

function initializeEmailJS() {

    if (
        !window.emailjs ||
        EMAILJS_CONFIG.PUBLIC_KEY ===
            "YOUR_EMAILJS_PUBLIC_KEY"
    ) {

        console.log(
            "EmailJS is not configured yet."
        );

        return;

    }


    emailjs.init({
        publicKey:
            EMAILJS_CONFIG.PUBLIC_KEY
    });

}


initializeEmailJS();


/* =========================================================
   ORDER VALIDATION
========================================================= */

function validateCartStock() {

    for (const item of cart) {

        const product =
            getProduct(item.productId);

        if (!product) {
            continue;
        }


        const availableStock =
            getAvailableStock(product);


        if (
            item.quantity >
            availableStock
        ) {

            return {
                valid: false,

                message:
                    `${product.name} has only ${availableStock} unit(s) available.`
            };

        }

    }


    return {
        valid: true,
        message: ""
    };

}


/* =========================================================
   GENERATE ORDER NUMBER
========================================================= */

function generateOrderNumber() {

    const random =
        Math.floor(
            100000 +
            Math.random() * 900000
        );

    return `NOVYA-${random}`;

}


/* =========================================================
   BUILD ORDER DETAILS
========================================================= */

function buildOrderDetails() {

    let total = 0;


    const productLines =
        cart.map(item => {

            const product =
                getProduct(item.productId);

            if (!product) {
                return "";
            }


            const lineTotal =
                product.price *
                item.quantity;


            total += lineTotal;


            return (
                `${product.name} | ` +
                `Qty: ${item.quantity} | ` +
                `Rs. ${formatPrice(lineTotal)}`
            );

        });


    return {
        productLines:
            productLines.join("\n"),

        total:
            total
    };

}


/* =========================================================
   REDUCE LOCAL STOCK
========================================================= */

function reduceLocalStock() {

    cart.forEach(item => {

        const product =
            getProduct(item.productId);

        if (!product) {
            return;
        }


        const currentStock =
            getAvailableStock(product);


        stockOverrides[product.id] =
            Math.max(
                0,
                currentStock -
                item.quantity
            );

    });


    saveStock();

}


/* =========================================================
   PLACE ORDER
========================================================= */

orderForm.addEventListener(
    "submit",
    async event => {

        event.preventDefault();


        orderMessage.className =
            "order-message";

        orderMessage.textContent =
            "";


        if (cart.length === 0) {

            showOrderMessage(
                "Please add at least one product to your cart.",
                "error"
            );

            return;

        }


        const stockCheck =
            validateCartStock();


        if (!stockCheck.valid) {

            showOrderMessage(
                stockCheck.message,
                "error"
            );

            updateCartUI();

            return;

        }


        const formData =
            new FormData(orderForm);


        const customerName =
            formData.get("customerName").trim();

        const customerPhone =
            formData.get("customerPhone").trim();

        const customerEmail =
            formData.get("customerEmail").trim();

        const customerCity =
            formData.get("customerCity").trim();

        const customerAddress =
            formData.get("customerAddress").trim();

        const orderNotes =
            formData.get("orderNotes").trim();


        const orderNumber =
            generateOrderNumber();


        const orderDetails =
            buildOrderDetails();


        /*
           =================================================
           EMAILJS NOT CONFIGURED YET
           =================================================

           Until you enter your EmailJS credentials,
           the order will NOT be sent by email.

           After Step 6, these values will work.
        */


        const emailJSReady =
            window.emailjs &&
            EMAILJS_CONFIG.PUBLIC_KEY !==
                "YOUR_EMAILJS_PUBLIC_KEY" &&
            EMAILJS_CONFIG.SERVICE_ID !==
                "YOUR_EMAILJS_SERVICE_ID" &&
            EMAILJS_CONFIG.TEMPLATE_ID !==
                "YOUR_EMAILJS_TEMPLATE_ID";


        if (!emailJSReady) {

            showOrderMessage(
                "EmailJS is not configured yet. Complete the EmailJS setup before accepting real customer orders.",
                "error"
            );

            return;

        }


        placeOrderBtn.disabled =
            true;

        placeOrderBtn.textContent =
            "Sending Order...";


        try {

            const templateParams = {

                order_number:
                    orderNumber,

                customer_name:
                    customerName,

                customer_phone:
                    customerPhone,

                customer_email:
                    customerEmail ||
                    "Not provided",

                customer_city:
                    customerCity,

                customer_address:
                    customerAddress,

                order_notes:
                    orderNotes ||
                    "None",

                order_items:
                    orderDetails.productLines,

                order_total:
                    `Rs. ${formatPrice(
                        orderDetails.total
                    )}`,

                order_date:
                    new Date().toLocaleString(
                        "en-PK"
                    )

            };


            await emailjs.send(

                EMAILJS_CONFIG.SERVICE_ID,

                EMAILJS_CONFIG.TEMPLATE_ID,

                templateParams

            );


            /*
               Only reduce the local stock AFTER
               EmailJS successfully accepts the order.
            */

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


        }

        catch (error) {

            console.error(
                "EmailJS order error:",
                error
            );


            showOrderMessage(
                "We could not submit your order right now. Please try again.",
                "error"
            );

        }


        finally {

            placeOrderBtn.disabled =
                false;

            placeOrderBtn.textContent =
                "Place Order";

        }

    }
);


/* =========================================================
   ORDER MESSAGE
========================================================= */

function showOrderMessage(
    message,
    type
) {

    orderMessage.textContent =
        message;

    orderMessage.className =
        `order-message ${type}`;

}


/* =========================================================
   HERO BUTTONS
========================================================= */

shopNowBtn.addEventListener(
    "click",
    () => {

        document
            .getElementById("products")
            .scrollIntoView({
                behavior: "smooth"
            });

    }
);


viewProductsBtn.addEventListener(
    "click",
    () => {

        document
            .getElementById("products")
            .scrollIntoView({
                behavior: "smooth"
            });

    }
);


/* =========================================================
   MOBILE MENU
========================================================= */

mobileMenuBtn.addEventListener(
    "click",
    () => {

        mainNav.classList.toggle(
            "mobile-open"
        );

    }
);


document
    .querySelectorAll(".nav-container a")
    .forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const category =
                    link.dataset.category;


                if (category === "all") {

                    selectedCategory =
                        "All Products";

                }

                else if (category) {

                    selectedCategory =
                        category;

                }


                searchTerm = "";

                searchInput.value = "";


                renderCategoryButtons();

                renderProducts();


                if (
                    link.getAttribute("href") ===
                    "#products"
                ) {

                    event.preventDefault();

                    document
                        .getElementById("products")
                        .scrollIntoView({
                            behavior: "smooth"
                        });

                }


                mainNav.classList.remove(
                    "mobile-open"
                );

            }
        );

    });


/* =========================================================
   LOGO
========================================================= */

document
    .getElementById("logoLink")
    .addEventListener(
        "click",
        event => {

            event.preventDefault();

            selectedCategory =
                "All Products";

            searchTerm = "";

            searchInput.value = "";

            renderCategoryButtons();

            renderProducts();

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );


/* =========================================================
   INITIALIZE WEBSITE
========================================================= */

function initializeStore() {

    currentYear.textContent =
        new Date().getFullYear();

    renderCategoryButtons();

    renderProducts();

    updateCartUI();

}


initializeStore();
