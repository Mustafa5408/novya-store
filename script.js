/* =========================================================
   NOVYA STORE
   Main JavaScript
========================================================= */


/* =========================================================
   ⭐ PRODUCT MANAGEMENT SECTION ⭐

   THIS IS THE MAIN SECTION YOU WILL EDIT IN THE FUTURE.

   ADD PRODUCT:
   Add another product object inside PRODUCTS.

   REMOVE PRODUCT:
   Delete its complete object.

   CHANGE PRICE:
   Change the "price" value.

   CHANGE STOCK:
   Change the "stock" value.

   CHANGE CATEGORY:
   Change the "category" value.

   CHANGE IMAGE:
   Change the "image" value.

   CHANGE DESCRIPTION:
   Change the "description" value.

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
   EMAILJS CONFIGURATION
========================================================= */

const EMAILJS_CONFIG = {

    PUBLIC_KEY:
        "lUS3en_oobE9akyfp",

    SERVICE_ID:
        "service_74rgsbc",

    TEMPLATE_ID:
        "template_uavapz8"

};


/* =========================================================
   APPLICATION STATE
========================================================= */

let selectedCategory = "All Products";

let searchTerm = "";


/*
   Shopping cart is stored in browser localStorage
   so it remains available after page refresh.
*/

let cart = JSON.parse(
    localStorage.getItem("novyaCart") || "[]"
);


/*
   Stock overrides are currently stored locally
   in the customer's browser.

   IMPORTANT:
   A future database version will provide globally
   shared inventory for all customers.
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
   HTML ESCAPE
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
   CATEGORY BUTTONS
========================================================= */

function renderCategoryButtons() {

    if (!categoryButtons) {
        return;
    }

    categoryButtons.innerHTML = "";


    CATEGORIES.forEach(category => {

        const button =
            document.createElement("button");

        button.className =
            "category-button";


        if (category === selectedCategory) {

            button.classList.add("active");

        }


        button.textContent =
            category;


        button.addEventListener(
            "click",
            () => {

                selectedCategory =
                    category;

                searchTerm = "";

                if (searchInput) {
                    searchInput.value = "";
                }

                renderCategoryButtons();

                renderProducts();

                const productsSection =
                    document.getElementById("products");

                if (productsSection) {

                    productsSection.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }
        );


        categoryButtons.appendChild(
            button
        );

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
   RENDER PRODUCTS
========================================================= */

function renderProducts() {

    if (!productsGrid) {
        return;
    }


    const products =
        getFilteredProducts();


    productsGrid.innerHTML = "";


    if (productsTitle) {

        productsTitle.textContent =
            selectedCategory;

    }


    if (productResultCount) {

        productResultCount.textContent =
            `${products.length} ${
                products.length === 1
                    ? "product"
                    : "products"
            }`;

    }


    if (products.length === 0) {

        if (emptyProducts) {
            emptyProducts.hidden = false;
        }

        return;

    }


    if (emptyProducts) {
        emptyProducts.hidden = true;
    }


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
                    src="${escapeHTML(product.image)}"
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
                        data-product-id="${escapeHTML(product.id)}"
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


        if (!outOfStock && addButton) {

            addButton.addEventListener(
                "click",
                () => {

                    addToCart(
                        product.id
                    );

                }
            );

        }


        productsGrid.appendChild(
            card
        );

    });

}


/* =========================================================
   ADD TO CART
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
            item =>
                item.productId === productId
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
            `Only ${availableStock} unit(s) of ${product.name} are available.`
        );

        return;

    }


    if (existingItem) {

        existingItem.quantity += 1;

    } else {

        cart.push({

            productId:
                productId,

            quantity:
                1

        });

    }


    saveCart();

    updateCartUI();

    openCart();

}


/* =========================================================
   INCREASE CART QUANTITY
========================================================= */

function increaseQuantity(productId) {

    const product =
        getProduct(productId);


    if (!product) {
        return;
    }


    const item =
        cart.find(
            cartItem =>
                cartItem.productId === productId
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
            `Only ${availableStock} unit(s) of ${product.name} are available.`
        );

        return;

    }


    item.quantity += 1;


    saveCart();

    updateCartUI();

}


/* =========================================================
   DECREASE CART QUANTITY
========================================================= */

function decreaseQuantity(productId) {

    const item =
        cart.find(
            cartItem =>
                cartItem.productId === productId
        );


    if (!item) {
        return;
    }


    item.quantity -= 1;


    if (item.quantity <= 0) {

        cart =
            cart.filter(
                cartItem =>
                    cartItem.productId !==
                    productId
            );

    }


    saveCart();

    updateCartUI();

}


/* =========================================================
   REMOVE CART ITEM
========================================================= */

function removeFromCart(productId) {

    cart =
        cart.filter(
            item =>
                item.productId !==
                productId
        );


    saveCart();

    updateCartUI();

}


/* =========================================================
   CART UI
========================================================= */

function updateCartUI() {

    if (!cartItems) {
        return;
    }


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


    const validCart = [];


    cart.forEach(item => {

        const product =
            getProduct(item.productId);


        if (!product) {
            return;
        }


        const availableStock =
            getAvailableStock(product);


        /*
           Automatically correct the cart if
           stock has become lower than cart quantity.
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


        validCart.push(item);


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
                src="${escapeHTML(product.image)}"
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
                        data-id="${escapeHTML(product.id)}"
                    >
                        −
                    </button>


                    <span>
                        ${item.quantity}
                    </span>


                    <button
                        data-action="increase"
                        data-id="${escapeHTML(product.id)}"
                    >
                        +
                    </button>

                </div>


                <button
                    class="remove-cart-item"
                    data-action="remove"
                    data-id="${escapeHTML(product.id)}"
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


        cartItems.appendChild(
            cartItem
        );

    });


    cart =
        validCart;


    saveCart();


    if (cartCount) {

        cartCount.textContent =
            totalQuantity;

    }


    if (cartSubtotal) {

        cartSubtotal.textContent =
            formatPrice(subtotal);

    }


    updateCheckoutSummary();

}


/* =========================================================
   CART ITEM BUTTONS
========================================================= */

if (cartItems) {

    cartItems.addEventListener(
        "click",
        event => {

            const button =
                event.target.closest(
                    "button"
                );


            if (!button) {
                return;
            }


            const productId =
                button.dataset.id;


            const action =
                button.dataset.action;


            if (
                action ===
                "increase"
            ) {

                increaseQuantity(
                    productId
                );

            }

            else if (
                action ===
                "decrease"
            ) {

                decreaseQuantity(
                    productId
                );

            }

            else if (
                action ===
                "remove"
            ) {

                removeFromCart(
                    productId
                );

            }

        }
    );

}


/* =========================================================
   OPEN CART
========================================================= */

function openCart() {

    if (cartDrawer) {

        cartDrawer.classList.add(
            "open"
        );

    }


    if (cartOverlay) {

        cartOverlay.classList.add(
            "open"
        );

    }


    document.body.style.overflow =
        "hidden";

}


/* =========================================================
   CLOSE CART
========================================================= */

function closeCart() {

    if (cartDrawer) {

        cartDrawer.classList.remove(
            "open"
        );

    }


    if (cartOverlay) {

        cartOverlay.classList.remove(
            "open"
        );

    }


    document.body.style.overflow =
        "";

}


/* =========================================================
   CART BUTTON EVENTS
========================================================= */

if (cartButton) {

    cartButton.addEventListener(
        "click",
        openCart
    );

}


if (cartClose) {

    cartClose.addEventListener(
        "click",
        closeCart
    );

}


if (cartOverlay) {

    cartOverlay.addEventListener(
        "click",
        closeCart
    );

}


/* =========================================================
   CHECKOUT SUMMARY
========================================================= */

function updateCheckoutSummary() {

    if (!checkoutSummary) {
        return;
    }


    if (cart.length === 0) {

        checkoutSummary.innerHTML =
            "Your cart is empty.";

        return;

    }


    let subtotal = 0;


    const html =
        cart.map(item => {

            const product =
                getProduct(
                    item.productId
                );


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

    if (!searchInput) {
        return;
    }


    searchTerm =
        searchInput.value.trim();


    selectedCategory =
        "All Products";


    renderCategoryButtons();

    renderProducts();


    const productsSection =
        document.getElementById(
            "products"
        );


    if (productsSection) {

        productsSection.scrollIntoView({
            behavior: "smooth"
        });

    }

}


if (searchBtn) {

    searchBtn.addEventListener(
        "click",
        performSearch
    );

}


if (searchInput) {

    searchInput.addEventListener(
        "keydown",
        event => {

            if (
                event.key ===
                "Enter"
            ) {

                performSearch();

            }

        }
    );

}


/* =========================================================
   CHECKOUT BUTTON
========================================================= */

if (checkoutBtn) {

    checkoutBtn.addEventListener(
        "click",
        () => {

            closeCart();


            const checkoutSection =
                document.getElementById(
                    "checkout"
                );


            if (checkoutSection) {

                checkoutSection.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }
    );

}


/* =========================================================
   EMAILJS INITIALIZATION
========================================================= */

function initializeEmailJS() {

    if (
        typeof emailjs ===
        "undefined"
    ) {

        console.error(
            "EmailJS SDK was not loaded."
        );

        return false;

    }


    try {

        emailjs.init({

            publicKey:
                EMAILJS_CONFIG.PUBLIC_KEY

        });


        console.log(
            "EmailJS initialized successfully."
        );


        return true;

    }

    catch (error) {

        console.error(
            "EmailJS initialization failed:",
            error
        );


        return false;

    }

}


const emailJSInitialized =
    initializeEmailJS();


/* =========================================================
   VALIDATE STOCK BEFORE ORDER
========================================================= */

function validateCartStock() {

    for (
        const item of cart
    ) {

        const product =
            getProduct(
                item.productId
            );


        if (!product) {
            continue;
        }


        const availableStock =
            getAvailableStock(
                product
            );


        if (
            item.quantity >
            availableStock
        ) {

            return {

                valid:
                    false,

                message:
                    `${product.name} has only ${availableStock} unit(s) available.`

            };

        }

    }


    return {

        valid:
            true,

        message:
            ""

    };

}


/* =========================================================
   GENERATE ORDER NUMBER
========================================================= */

function generateOrderNumber() {

    const random =
        Math.floor(
            100000 +
            Math.random() *
            900000
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
                getProduct(
                    item.productId
                );


            if (!product) {
                return "";
            }


            const lineTotal =
                product.price *
                item.quantity;


            total +=
                lineTotal;


            return (
                `${product.name} | ` +
                `Qty: ${item.quantity} | ` +
                `Rs. ${formatPrice(
                    lineTotal
                )}`
            );

        });


    return {

        productLines:
            productLines.join(
                "\n"
            ),

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
            getProduct(
                item.productId
            );


        if (!product) {
            return;
        }


        const currentStock =
            getAvailableStock(
                product
            );


        stockOverrides[
            product.id
        ] =
            Math.max(
                0,
                currentStock -
                item.quantity
            );

    });


    saveStock();

}


/* =========================================================
   ORDER MESSAGE
========================================================= */

function showOrderMessage(
    message,
    type
) {

    if (!orderMessage) {
        return;
    }


    orderMessage.textContent =
        message;


    orderMessage.className =
        `order-message ${type}`;

}


/* =========================================================
   PLACE ORDER
========================================================= */

if (orderForm) {

    orderForm.addEventListener(
        "submit",
        async event => {

            event.preventDefault();


            showOrderMessage(
                "",
                ""
            );


            /*
               Make sure the customer has products
               in the cart.
            */

            if (
                cart.length === 0
            ) {

                showOrderMessage(
                    "Please add at least one product to your cart.",
                    "error"
                );

                return;

            }


            /*
               Verify stock again immediately
               before sending the order.
            */

            const stockCheck =
                validateCartStock();


            if (
                !stockCheck.valid
            ) {

                showOrderMessage(
                    stockCheck.message,
                    "error"
                );


                updateCartUI();


                return;

            }


            /*
               Verify EmailJS is available.
            */

            if (
                !emailJSInitialized
            ) {

                showOrderMessage(
                    "Email service is not available. Please refresh the page and try again.",
                    "error"
                );

                return;

            }


            const formData =
                new FormData(
                    orderForm
                );


            const customerName =
                String(
                    formData.get(
                        "customerName"
                    ) || ""
                ).trim();


            const customerPhone =
                String(
                    formData.get(
                        "customerPhone"
                    ) || ""
                ).trim();


            const customerEmail =
                String(
                    formData.get(
                        "customerEmail"
                    ) || ""
                ).trim();


            const customerCity =
                String(
                    formData.get(
                        "customerCity"
                    ) || ""
                ).trim();


            const customerAddress =
                String(
                    formData.get(
                        "customerAddress"
                    ) || ""
                ).trim();


            const orderNotes =
                String(
                    formData.get(
                        "orderNotes"
                    ) || ""
                ).trim();


            /*
               Generate order number.
            */

            const orderNumber =
                generateOrderNumber();


            /*
               Generate order details.
            */

            const orderDetails =
                buildOrderDetails();


            /*
               Disable button while sending.
            */

            if (placeOrderBtn) {

                placeOrderBtn.disabled =
                    true;

                placeOrderBtn.textContent =
                    "Sending Order...";

            }


            try {

                /*
                   These variable names MUST match
                   the variables in your EmailJS template.
                */

                const templateParams = {

                    order_number:
                        orderNumber,

                    order_date:
                        new Date()
                            .toLocaleString(
                                "en-PK"
                            ),

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
                        )}`

                };


                console.log(
                    "Sending NOVYA order:",
                    templateParams
                );


                /*
                   SEND ORDER TO EMAILJS
                */

                const response =
                    await emailjs.send(

                        EMAILJS_CONFIG.SERVICE_ID,

                        EMAILJS_CONFIG.TEMPLATE_ID,

                        templateParams

                    );


                console.log(
                    "EmailJS response:",
                    response
                );


                /*
                   Email successfully accepted.
                   Now reduce local stock.
                */

                reduceLocalStock();


                /*
                   Empty cart.
                */

                cart = [];


                saveCart();


                updateCartUI();


                renderProducts();


                /*
                   Clear checkout form.
                */

                orderForm.reset();


                /*
                   Show success message.
                */

                showOrderMessage(

                    `Order ${orderNumber} has been submitted successfully. Thank you for shopping with NOVYA Store!`,

                    "success"

                );


            }

            catch (error) {

                console.error(
                    "NOVYA EmailJS Order Error:",
                    error
                );


                showOrderMessage(

                    "We could not submit your order right now. Please check your internet connection and try again.",

                    "error"

                );

            }


            finally {

                if (placeOrderBtn) {

                    placeOrderBtn.disabled =
                        false;

                    placeOrderBtn.textContent =
                        "Place Order";

                }

            }

        }
    );

}


/* =========================================================
   HERO BUTTONS
========================================================= */

if (shopNowBtn) {

    shopNowBtn.addEventListener(
        "click",
        () => {

            const productsSection =
                document.getElementById(
                    "products"
                );


            if (productsSection) {

                productsSection.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }
    );

}


if (viewProductsBtn) {

    viewProductsBtn.addEventListener(
        "click",
        () => {

            const productsSection =
                document.getElementById(
                    "products"
                );


            if (productsSection) {

                productsSection.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }
    );

}


/* =========================================================
   MOBILE MENU
========================================================= */

if (mobileMenuBtn) {

    mobileMenuBtn.addEventListener(
        "click",
        () => {

            if (mainNav) {

                mainNav.classList.toggle(
                    "mobile-open"
                );

            }

        }
    );

}


/* =========================================================
   NAVIGATION CATEGORY LINKS
========================================================= */

document
    .querySelectorAll(
        ".nav-container a"
    )
    .forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const category =
                    link.dataset.category;


                if (
                    category ===
                    "all"
                ) {

                    selectedCategory =
                        "All Products";

                }

                else if (
                    category
                ) {

                    selectedCategory =
                        category;

                }


                searchTerm = "";


                if (searchInput) {

                    searchInput.value =
                        "";

                }


                renderCategoryButtons();

                renderProducts();


                if (
                    link.getAttribute(
                        "href"
                    ) ===
                    "#products"
                ) {

                    event.preventDefault();


                    const productsSection =
                        document.getElementById(
                            "products"
                        );


                    if (productsSection) {

                        productsSection.scrollIntoView({
                            behavior: "smooth"
                        });

                    }

                }


                if (mainNav) {

                    mainNav.classList.remove(
                        "mobile-open"
                    );

                }

            }
        );

    });


/* =========================================================
   LOGO
========================================================= */

const logoLink =
    document.getElementById(
        "logoLink"
    );


if (logoLink) {

    logoLink.addEventListener(
        "click",
        event => {

            event.preventDefault();


            selectedCategory =
                "All Products";


            searchTerm = "";


            if (searchInput) {

                searchInput.value =
                    "";

            }


            renderCategoryButtons();

            renderProducts();


            window.scrollTo({

                top:
                    0,

                behavior:
                    "smooth"

            });

        }
    );

}


/* =========================================================
   INITIALIZE STORE
========================================================= */

function initializeStore() {

    if (currentYear) {

        currentYear.textContent =
            new Date().getFullYear();

    }


    renderCategoryButtons();

    renderProducts();

    updateCartUI();

}


initializeStore();
