/* =========================================================
   NOVYA STORE - PRODUCT MANAGEMENT
   Edit products only in this section for future updates.
========================================================= */
const PRODUCTS = [
   
 {id:'cooking-spoons',name:'Cooking Spoons',category:'Kitchen Utensils',price:899,stock:25,image:'https://placehold.co/800x800/f1f5f9/111827?text=Cooking+Spoons',description:'Practical cooking spoon set for everyday kitchen use.',features:['Useful multi-purpose set','Comfortable everyday use','Easy to clean','Durable material','Suitable for home kitchens']},
 {id:'knife-sets',name:'Knife Sets',category:'Kitchen Utensils',price:1799,stock:15,image:'https://placehold.co/800x800/f1f5f9/111827?text=Knife+Sets',description:'Useful kitchen knife set for everyday cutting and preparation.',features:['Multiple useful knife types','Comfortable handling','Everyday kitchen essential','Durable design','Convenient food preparation']},
 {id:'premium-storage-boxes',name:'Premium Quality Storage Boxes',category:'Kitchen Utensils',price:1499,stock:20,image:'https://placehold.co/800x800/f1f5f9/111827?text=Storage+Boxes',description:'Premium quality storage boxes for organized kitchen storage.',features:['Helps keep items organized','Premium quality material','Convenient storage solution','Easy to use','Suitable for everyday household needs']},
 {id:'nebulizer',name:'Nebulizer',category:'Electronics Gadgets',price:2999,stock:10,image:'https://placehold.co/800x800/f1f5f9/111827?text=Nebulizer',description:'Compact nebulizer suitable for convenient home use.',features:['Compact design','Simple operation','Convenient for home use','Portable and easy to store','Practical everyday device']},
 {id:'trimmer',name:'Trimmer',category:'Electronics Gadgets',price:1799,stock:20,image:'https://placehold.co/800x800/f1f5f9/111827?text=Trimmer',description:'Convenient rechargeable trimmer for everyday grooming.',features:['Convenient grooming tool','Easy to handle','Compact design','Suitable for everyday use','Practical and portable']},
 {id:'hair-brush',name:'Hair Brush',category:'Electronics Gadgets',price:2299,stock:15,image:'https://placehold.co/800x800/f1f5f9/111827?text=Hair+Brush',description:'Easy-to-use hair brush for everyday styling.',features:['Comfortable everyday use','Easy styling','Convenient design','Durable construction','Suitable for regular grooming']},
 {id:'novya-brown-handbag',name:'Premium Brown Handbag',category:'Bags & Luggage',price:1750,stock:0,image:'assets/novya-bag.jpg',description:'Stylish brown patterned handbag with elegant handles and a convenient shoulder strap.',features:['Elegant patterned design','Spacious everyday storage','Comfortable top handles','Adjustable shoulder strap','Suitable for daily use and outings']},
 {
  id:'travelling-bag-weekend-duffel-bag',
  name:'New design Travelling bag / weekend bag / duffel bag',
  category:'Bags & Luggage',
  price:796,
  stock:23,
  image:'assets/Travelling Bag Weekend Bag Duffel Bag.jpg',
  images:[
   'assets/Travelling Bag Weekend Bag Duffel Bag.jpg',
   'assets/travle bag.jpg'
  ],
  colors:['Black/Red','Brown/Red','Gray/Red'],
  description:'Foldable and washable storage bag for clothes, travel essentials, gym use and wardrobe organization. Large capacity design helps keep clothes and accessories organized while saving storage space.',
  features:[
   'Size: 16 inches length × 12 inches width × 12 inches height',
   'Foldable design - ideal storage solution for clothes and accessories',
   'Can fit up to 15 kg of clothes and accessories',
   'Durable and long-lasting material',
   'Saves space and maximizes storage space in small closets',
   'Great for keeping your wardrobe organized',
   'Suitable for clothes, toys and travel essentials',
   'Large storage space with easy access',
   'Washable and convenient for regular use',
   'Suitable for travelling, gym use and wardrobe organization'
  ]
 },
{
  id:'silver-crest-3l-stainless-steel-meat-vegetable-chopper-sc-1589',
  name:'Silver Crest 3L Stainless Steel Meat and Vegetable Chopper SC-1589',
  category:'Kitchen Appliances',
  price:3999,
  stock:51,
  image:'assets/chopper 1.jpg',
  images:[
    'assets/chopper 1.jpg',
    'assets/chpr 2.jpg',
    'assets/chpr 3.jpg',
    'assets/chpr 4.jpg',
    'assets/chpr 5.jpg'
  ],
  description:'Tired of slow, messy food prep? The Silver Crest 3L Stainless Steel Chopper SC-1589 is built to make chopping faster, safer, and more efficient. Whether you’re mincing meat, chopping vegetables, or preparing ingredients for daily cooking, this powerful chopper saves time while delivering consistent, professional results every time.',
  features:[
    'Large 3-liter stainless steel bowl for family-size preparation',
    'Powerful motor for quick chopping and mincing',
    'Ultra-sharp stainless steel blades for precise cuts',
    'Ideal for meat, vegetables, onions, herbs and fruits',
    'Durable, rust-resistant and hygienic construction',
    'One-touch operation for easy control',
    'Anti-slip base for stable and safe usage',
    'Easy to clean and maintain',
    'Compact design suitable for modern kitchens',
    'Brand: Silver Crest',
    'Model: SC-1589',
    'Product Type: Meat and Vegetable Chopper',
    'Bowl Capacity: 3 Liters',
    'Bowl Material: Stainless Steel',
    'Blade Material: Stainless Steel',
    'Motor Type: High-power electric motor',
    'Operation: One-touch button',
    'Suitable For: Meat, vegetables, herbs and fruits',
    'Safety Features: Anti-slip base and secure lid',
    'Cleaning: Easy disassembly and wash',
    'Use Case: Home and kitchen cooking',
    'Accessory: 1 × Silver Crest SC-102 Chopper Motor Unit',
    'Accessory: 1 × 3L Stainless Steel Bowl',
    'Accessory: 1 × Multi-layer Stainless Steel Blade Set',
    'Accessory: 1 × Lid with Safety Lock',
    'Accessory: User guide/manual',
    'Fast food preparation for busy kitchens',
    'Handles both soft and tough ingredients effortlessly',
    'Large 3L capacity ideal for families, meal prep and bulk cooking',
    'Durable stainless steel build for long-lasting performance'
  ]
},
{
  id:'electric-spice-coffee-grinder-raf-appliances',
  name:'Electric - Spice & Coffee Grinder',
  category:'Kitchen Appliances',
  price:2890,
  stock:38,
  image:'assets/grngr 1 main.jpg',
  images:[
    'assets/grngr 1 main.jpg',
    'assets/grndr 2.jpg',
    'assets/grndr 3.jpg',
    'assets/grndr 4.jpg'
  ],
  description:'30% OFF – Limited Time! Multifunction Electric Masala Grinder by RAF Appliances. Enjoy fresh masala every day and restaurant-style taste at home with this compact and powerful grinder.',
  features:[
    'Brand: RAF Appliances',
    'German imported quality',
    'Fresh masala for everyday cooking',
    'Ideal for preparing restaurant-style flavors at home',
    'Material: Stainless Steel + Heavy-Duty Glass',
    'Grinding Mechanism: Adjustable Ceramic/Steel Grinder',
    'Capacity: 500ML',
    'Compact design with anti-slip base',
    'Suitable for salt, pepper, dry spices and whole masala',
    'Origin: Germany Imported',
    'Cash on Delivery available',
    'Limited stock available'
  ]
}
];
// Product image/color settings are optional.
// To add multiple images, use images:[...]. If images is omitted, the existing image field is used.
// To add selectable colors, use colors:['Black','White','Blue']. Multiple colors require customer selection.
const CATEGORIES=['All Products','Kitchen Appliances','Kitchen Accessories','Kitchen Utensils','Home Appliances','Home Accessories','Home Decor','Electronics Gadgets','Mobile Accessories','Personal Care','Baby Accessories','Tools & Tool Kits','Men','Women','Bags & Luggage'];
const EMAILJS_CONFIG={PUBLIC_KEY:'lUS3en_oobE9akyfp',SERVICE_ID:'service_74rgsbc',TEMPLATE_ID:'template_uavapz8'};
const LAHORE_DELIVERY=190, OTHER_CITY_DELIVERY=225;
let cart=JSON.parse(localStorage.getItem('novyaCart')||'[]');
let stockOverrides=JSON.parse(localStorage.getItem('novyaStockOverrides')||'{}');
let pendingBuyNow=null;
const $=id=>document.getElementById(id);
const formatPrice=v=>Number(v||0).toLocaleString('en-PK');
const esc=v=>String(v).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#039;');
const getProduct=id=>PRODUCTS.find(p=>p.id===id);
const getStock=p=>Math.max(0,Number(Object.prototype.hasOwnProperty.call(stockOverrides,p.id)?stockOverrides[p.id]:p.stock));
const saveCart=()=>localStorage.setItem('novyaCart',JSON.stringify(cart));
const saveStock=()=>localStorage.setItem('novyaStockOverrides',JSON.stringify(stockOverrides));
const productUrl=p=>`product.html?id=${encodeURIComponent(p.id)}`;
function deliveryCharge(city){return String(city||'').trim().toLowerCase()==='lahore'?LAHORE_DELIVERY:OTHER_CITY_DELIVERY}
function cartSubtotal(){return cart.reduce((t,i)=>{const p=getProduct(i.productId);return t+(p?p.price*i.quantity:0)},0)}

function getProductImages(p){const imgs=Array.isArray(p.images)?p.images.filter(Boolean):[];return imgs.length?imgs:[p.image].filter(Boolean)}
function getProductColors(p){return Array.isArray(p.colors)?p.colors.filter(Boolean):[]}
function hasMultipleColors(p){return getProductColors(p).length>1}
function defaultColor(p){const colors=getProductColors(p);return colors.length===1?colors[0]:''}
function cartItemKey(i){return `${i.productId}::${i.color||''}`}
function findCartItem(productId,color=''){return cart.find(i=>i.productId===productId&&(i.color||'')===color)}
function productCardHTML(p){const stock=getStock(p),out=stock<1,images=getProductImages(p);return `<article class="product-card"><a class="product-image-wrapper" href="${productUrl(p)}"><img class="product-image" src="${esc(images[0])}" alt="${esc(p.name)}"><span class="stock-badge ${out?'out':''}">${out?'Out of Stock':stock+' available'}</span></a><div class="product-content"><div class="product-category">${esc(p.category)}</div><h3 class="product-name"><a href="${productUrl(p)}">${esc(p.name)}</a></h3><p class="product-description">${esc(p.description)}</p><div class="product-bottom"><div class="product-price">Rs. ${formatPrice(p.price)}</div><a class="view-product-link" href="${productUrl(p)}">View Product Details →</a><div class="product-actions"><button class="add-to-cart-btn" data-add="${p.id}" ${out?'disabled':''}>${out?'Out of Stock':'Add to Cart'}</button><button class="buy-now-btn" data-buy="${p.id}" ${out?'disabled':''}>Buy Now</button></div></div></div></article>`}
function bindProductButtons(root=document){root.querySelectorAll('[data-add]').forEach(b=>b.onclick=()=>addToCart(b.dataset.add));root.querySelectorAll('[data-buy]').forEach(b=>b.onclick=()=>openQuantityModal(b.dataset.buy));}
function renderFreshArrivals(){
 const grid=$('freshArrivalsGrid');
 if(!grid)return;
 const items=PRODUCTS.filter(p=>getStock(p)>0);
 grid.innerHTML=items.map(productCardHTML).join('');
 bindProductButtons(grid);
}

function renderProducts(){const grid=$('productsGrid');if(!grid)return;const category=new URLSearchParams(location.search).get('category')||'All Products';const search=($('searchInput')?.value||new URLSearchParams(location.search).get('search')||'').trim().toLowerCase();let items=PRODUCTS.filter(p=>(category==='All Products'||p.category.toLowerCase()===category.toLowerCase())&&(!search||`${p.name} ${p.category} ${p.description}`.toLowerCase().includes(search)));if(!document.body.classList.contains('category-page'))items=items.slice(0,8);grid.innerHTML=items.map(productCardHTML).join('');$('emptyProducts')&&( $('emptyProducts').hidden=items.length>0);if($('productResultCount'))$('productResultCount').textContent=`${items.length} ${items.length===1?'product':'products'}`;if($('categoryPageTitle'))$('categoryPageTitle').textContent=category;if($('productsTitle'))$('productsTitle').textContent=category==='All Products'?'Products':category;bindProductButtons(grid)}

function ensureColorModal(){let modal=$('colorSelectionModal');if(modal)return modal;modal=document.createElement('div');modal.id='colorSelectionModal';modal.className='quantity-modal';modal.innerHTML='<div class="modal-card color-modal-card"><button class="modal-x" id="colorModalCancel">×</button><h3 id="colorModalTitle">Select Color</h3><p id="colorModalText">Please select a color.</p><div id="colorModalOptions" class="color-options"></div><button class="primary-btn modal-confirm" id="colorModalConfirm">Continue</button></div>';document.body.appendChild(modal);$('colorModalCancel').onclick=closeColorModal;$('colorModalConfirm').onclick=confirmColorModal;return modal}
let pendingColorAction=null;
function openColorSelection(p,action){const colors=getProductColors(p);if(colors.length<2)return action(defaultColor(p));pendingColorAction={p,action};ensureColorModal();$('colorModalTitle').textContent=`Select Color – ${p.name}`;$('colorModalText').textContent='Please select a color before continuing.';$('colorModalOptions').innerHTML=colors.map((c,i)=>`<label class="color-option"><input type="radio" name="novyaColor" value="${esc(c)}" ${i===0?'':' '}> <span>${esc(c)}</span></label>`).join('');$('colorSelectionModal').classList.add('show')}
function closeColorModal(){if($('colorSelectionModal'))$('colorSelectionModal').classList.remove('show');pendingColorAction=null}
function confirmColorModal(){if(!pendingColorAction)return;const selected=document.querySelector('input[name="novyaColor"]:checked')?.value||'';if(!selected)return alert('Please select a color to continue.');const action=pendingColorAction.action;closeColorModal();action(selected)}
function addToCart(id,qty=1,open=true,color=''){const p=getProduct(id);if(!p)return;const stock=getStock(p);if(stock<1)return alert(`${p.name} is out of stock.`);const proceed=selectedColor=>{const chosenColor=selectedColor||defaultColor(p),existing=findCartItem(id,chosenColor),current=existing?existing.quantity:0;if(current+qty>stock)return alert(`Only ${stock} unit(s) of ${p.name} are available.`);if(existing)existing.quantity+=qty;else cart.push({productId:id,quantity:qty,...(chosenColor?{color:chosenColor}:{})});saveCart();updateCartUI();if(open)openCart()};if(hasMultipleColors(p)&&!color){return openColorSelection(p,selected=>proceed(selected))}proceed(color)}
function renderQuantityModalColor(p){let wrap=$('quantityModalColorWrap');if(!wrap){wrap=document.createElement('div');wrap.id='quantityModalColorWrap';wrap.className='modal-color-wrap';const anchor=$('quantityModalStock');anchor.parentNode.insertBefore(wrap,anchor.nextSibling)}const colors=getProductColors(p);if(colors.length>1){wrap.innerHTML=`<label for="quantityModalColor">Color *</label><select id="quantityModalColor" required><option value="">Select a color</option>${colors.map(c=>`<option value="${esc(c)}">${esc(c)}</option>`).join('')}</select>`;wrap.hidden=false}else if(colors.length===1){wrap.innerHTML=`<div class="single-color-note">Color: <strong>${esc(colors[0])}</strong></div>`;wrap.hidden=false}else{wrap.innerHTML='';wrap.hidden=true}}
function openQuantityModal(id){const p=getProduct(id);if(!p||getStock(p)<1)return;pendingBuyNow={id,quantity:1};if($('quantityModalGuarantee'))$('quantityModalGuarantee').textContent='MONEY BACK GUARANTEE WITH 7 DAYS EXCHANGE POLICY';$('quantityModalTitle').textContent=p.name;$('quantityModalStock').textContent=`Available stock: ${getStock(p)}`;$('quantityModalValue').textContent='1';renderQuantityModalColor(p);$('quantityModal').classList.add('show')}
function changeModalQuantity(delta){if(!pendingBuyNow)return;const stock=getStock(getProduct(pendingBuyNow.id));pendingBuyNow.quantity=Math.max(1,Math.min(stock,pendingBuyNow.quantity+delta));$('quantityModalValue').textContent=pendingBuyNow.quantity}
function closeQuantityModal(){$('quantityModal')?.classList.remove('show');pendingBuyNow=null}
function confirmBuyNow(){if(!pendingBuyNow)return;const {id,quantity}=pendingBuyNow,p=getProduct(id),color=$('quantityModalColor')?.value||defaultColor(p);if(hasMultipleColors(p)&&!color)return alert('Please select a color before continuing.');cart=[{productId:id,quantity,...(color?{color}:{})}];saveCart();closeQuantityModal();updateCartUI();location.href='index.html#checkout'}

function updateCartUI(){const items=$('cartItems');let qty=0,subtotal=0;if(items){items.innerHTML='';cart=cart.filter(i=>{const p=getProduct(i.productId);if(!p)return false;i.quantity=Math.min(i.quantity,getStock(p));return i.quantity>0});cart.forEach((i,index)=>{const p=getProduct(i.productId),colors=getProductColors(p);qty+=i.quantity;subtotal+=p.price*i.quantity;const colorHtml=colors.length>1?`<label class="cart-color-label">Color<select class="cart-color-select" data-color-index="${index}"><option value="">Select color</option>${colors.map(c=>`<option value="${esc(c)}" ${i.color===c?'selected':''}>${esc(c)}</option>`).join('')}</select></label>`:colors.length===1?`<div class="cart-item-color">Color: ${esc(colors[0])}</div>`:'';items.insertAdjacentHTML('beforeend',`<div class="cart-item"><img class="cart-item-image" src="${esc(getProductImages(p)[0])}" alt=""><div><div class="cart-item-name">${esc(p.name)}</div><div class="cart-item-price">Rs. ${formatPrice(p.price)}</div>${colorHtml}<div class="quantity-controls"><button data-cart="minus" data-index="${index}">−</button><span>${i.quantity}</span><button data-cart="plus" data-index="${index}">+</button></div><button class="remove-cart-item" data-cart="remove" data-index="${index}">Remove</button></div><div class="cart-item-total">Rs. ${formatPrice(p.price*i.quantity)}</div></div>`)});if(!cart.length)items.innerHTML='<div class="cart-empty">🛒<p>Your cart is empty.</p></div>';items.querySelectorAll('[data-cart]').forEach(b=>b.onclick=()=>cartAction(b.dataset.cart,Number(b.dataset.index)));items.querySelectorAll('[data-color-index]').forEach(sel=>sel.onchange=()=>{const i=Number(sel.dataset.colorIndex);if(!cart[i])return;cart[i].color=sel.value||undefined;if(!cart[i].color)delete cart[i].color;saveCart();updateCheckoutSummary()})}if($('cartCount'))$('cartCount').textContent=qty;if($('cartSubtotal'))$('cartSubtotal').textContent=formatPrice(subtotal);saveCart();updateCheckoutSummary()}
function cartAction(action,index){const item=cart[index],p=item&&getProduct(item.productId);if(!item||!p)return;if(action==='plus'){if(item.quantity>=getStock(p))return alert(`Only ${getStock(p)} available.`);item.quantity++}if(action==='minus')item.quantity--;if(action==='remove'||item.quantity<=0)cart.splice(index,1);saveCart();updateCartUI()}
function openCart(){$('cartDrawer')?.classList.add('open');$('cartOverlay')?.classList.add('open');document.body.style.overflow='hidden'}
function closeCart(){$('cartDrawer')?.classList.remove('open');$('cartOverlay')?.classList.remove('open');document.body.style.overflow=''}

function updateCheckoutSummary(){const box=$('checkoutSummary');if(!box)return;if(!cart.length){box.textContent='Your cart is empty.';return}const subtotal=cartSubtotal(),city=$('customerCity')?.value||'',delivery=deliveryCharge(city),total=subtotal+delivery;box.innerHTML=cart.map(i=>{const p=getProduct(i.productId);return `<div class="summary-item"><span>${esc(p.name)}${i.color?` <small>(${esc(i.color)})</small>`:''} × ${i.quantity}</span><strong>Rs. ${formatPrice(p.price*i.quantity)}</strong></div>`}).join('')+`<div class="summary-item total-line"><span>Product Subtotal</span><strong>Rs. ${formatPrice(subtotal)}</strong></div><div class="summary-item"><span>Delivery Charges <small>(${city&&city.trim().toLowerCase()==='lahore'?'Lahore':'Other Cities'})</small></span><strong>Rs. ${formatPrice(delivery)}</strong></div><div class="summary-item grand-total"><strong>Final Total</strong><strong>Rs. ${formatPrice(total)}</strong></div>`}

function renderProductPage(){const container=$('productPage');if(!container)return;const p=getProduct(new URLSearchParams(location.search).get('id'));if(!p){container.innerHTML='<div class="not-found"><h1>Product not found</h1><a class="primary-btn" href="index.html">Back to Home</a></div>';return}const stock=getStock(p),out=stock<1,images=getProductImages(p),colors=getProductColors(p);document.title=`${p.name} | NOVYA Store`;const colorControl=colors.length>1?`<div class="detail-color-field"><label for="detailColor">Color <span>*</span></label><select id="detailColor"><option value="">Select a color</option>${colors.map(c=>`<option value="${esc(c)}">${esc(c)}</option>`).join('')}</select><small>Please select a color before adding to cart or buying.</small></div>`:colors.length===1?`<div class="detail-color-single">Color: <strong>${esc(colors[0])}</strong></div>`:'';container.innerHTML=`<section class="product-detail"><div class="product-detail-media"><div class="product-gallery-main"><button class="gallery-arrow gallery-prev" id="galleryPrev" aria-label="Previous image">‹</button><img id="galleryMainImage" src="${esc(images[0])}" alt="${esc(p.name)}"><button class="gallery-arrow gallery-next" id="galleryNext" aria-label="Next image">›</button></div><div class="product-gallery-thumbs" id="galleryThumbs">${images.map((img,i)=>`<button class="gallery-thumb ${i===0?'active':''}" data-gallery-index="${i}"><img src="${esc(img)}" alt="${esc(p.name)} image ${i+1}"></button>`).join('')}</div></div><div class="product-detail-info"><div class="product-category">${esc(p.category)}</div><h1>${esc(p.name)}</h1><div class="detail-rating">★★★★★ <span>4.5 out of 5 stars</span></div><p class="detail-description">${esc(p.description)}</p><div class="detail-price">Rs. ${formatPrice(p.price)}</div><div class="detail-stock ${out?'out':''}">${out?'Out of Stock':stock+' available in stock'}</div>${colorControl}<div class="quantity-picker"><span>Quantity</span><div><button id="detailMinus">−</button><strong id="detailQty">1</strong><button id="detailPlus">+</button></div></div><div class="detail-actions"><button id="detailAdd" class="add-to-cart-btn" ${out?'disabled':''}>Add to Cart</button><button id="detailBuy" class="buy-now-btn" ${out?'disabled':''}>Buy Now</button></div><div class="trust-grid"><div>💬<strong>24/7 Customer Support</strong><span>We're here to help</span></div><div>🛡️<strong>Money-Back Guarantee</strong><span>Shop with confidence</span></div><div>🚚<strong>Fast Delivery</strong><span>3–5 Days</span></div></div></div></section><section class="detail-section"><h2>Key Features</h2><ul class="key-features">${p.features.map(f=>`<li>${esc(f)}</li>`).join('')}</ul></section><section class="detail-section review-section"><h2>Customer Reviews</h2><div class="review-summary"><div class="big-rating">4.5 <span>★★★★★</span><small>out of 5 stars</small></div><div><strong>Be the first to write a review</strong><button id="writeReviewBtn" class="secondary-btn review-btn">Write a Review</button></div></div><form id="reviewForm" class="review-form" hidden><input id="reviewName" placeholder="Your name" required><select id="reviewRating"><option value="5">★★★★★ - 5 Stars</option><option value="4">★★★★☆ - 4 Stars</option><option value="3">★★★☆☆ - 3 Stars</option><option value="2">★★☆☆☆ - 2 Stars</option><option value="1">★☆☆☆☆ - 1 Star</option></select><input id="reviewTitle" placeholder="Review title" required><textarea id="reviewComment" placeholder="Write your review" required></textarea><button class="primary-btn" type="submit">Submit Review</button></form><div id="reviewsList"></div></section><section class="detail-section"><h2>You May Also Like</h2><div class="products-grid recommendation-grid" id="recommendations"></div></section>`;let galleryIndex=0;const showGalleryImage=index=>{galleryIndex=(index+images.length)%images.length;$('galleryMainImage').src=images[galleryIndex];document.querySelectorAll('[data-gallery-index]').forEach(btn=>btn.classList.toggle('active',Number(btn.dataset.galleryIndex)===galleryIndex))};$('galleryPrev').onclick=()=>showGalleryImage(galleryIndex-1);$('galleryNext').onclick=()=>showGalleryImage(galleryIndex+1);document.querySelectorAll('[data-gallery-index]').forEach(btn=>btn.onclick=()=>showGalleryImage(Number(btn.dataset.galleryIndex)));if(images.length<2){$('galleryPrev').hidden=true;$('galleryNext').hidden=true;$('galleryThumbs').hidden=true}let q=1;const setQ=()=>$('detailQty').textContent=q;$('detailMinus').onclick=()=>{q=Math.max(1,q-1);setQ()};$('detailPlus').onclick=()=>{q=Math.min(stock,q+1);setQ()};const selectedDetailColor=()=>colors.length>1?($('detailColor')?.value||''):defaultColor(p);$('detailAdd').onclick=()=>{const color=selectedDetailColor();if(hasMultipleColors(p)&&!color){alert('Please select a color before adding this product to the cart.');$('detailColor')?.focus();return}addToCart(p.id,q,true,color)};$('detailBuy').onclick=()=>{const color=selectedDetailColor();if(hasMultipleColors(p)&&!color){alert('Please select a color before buying this product.');$('detailColor')?.focus();return}cart=[{productId:p.id,quantity:q,...(color?{color}:{})}];saveCart();location.href='index.html#checkout'};$('writeReviewBtn').onclick=()=>$('reviewForm').hidden=!$('reviewForm').hidden;$('reviewForm').onsubmit=e=>{e.preventDefault();const reviews=JSON.parse(localStorage.getItem('novyaReviews')||'{}');reviews[p.id]=reviews[p.id]||[];reviews[p.id].push({name:$('reviewName').value.trim(),rating:$('reviewRating').value,title:$('reviewTitle').value.trim(),comment:$('reviewComment').value.trim()});localStorage.setItem('novyaReviews',JSON.stringify(reviews));e.target.reset();e.target.hidden=true;renderReviews(p.id)};renderReviews(p.id);const related=[...PRODUCTS.filter(x=>x.id!==p.id&&x.category===p.category),...PRODUCTS.filter(x=>x.id!==p.id&&x.category!==p.category)].slice(0,4);$('recommendations').innerHTML=related.map(productCardHTML).join('');bindProductButtons($('recommendations'))}

function renderReviews(id){const list=$('reviewsList');if(!list)return;const reviews=(JSON.parse(localStorage.getItem('novyaReviews')||'{}'))[id]||[];list.innerHTML=reviews.map(r=>`<article class="review-card"><div>${'★'.repeat(Number(r.rating))}${'☆'.repeat(5-Number(r.rating))}</div><strong>${esc(r.title)}</strong><p>${esc(r.comment)}</p><small>— ${esc(r.name)}</small></article>`).join('')}

function initEmail(){if(typeof emailjs!=='undefined')emailjs.init({publicKey:EMAILJS_CONFIG.PUBLIC_KEY})}
function reduceStock(){cart.forEach(i=>{const p=getProduct(i.productId);stockOverrides[p.id]=Math.max(0,getStock(p)-i.quantity)});saveStock()}
function orderDetails(city){const subtotal=cartSubtotal(),delivery=deliveryCharge(city);return{lines:cart.map(i=>{const p=getProduct(i.productId);return `${p.name}${i.color?` | Color: ${i.color}`:''} | Qty: ${i.quantity} | Rs. ${formatPrice(p.price*i.quantity)}`}).join('\n'),subtotal,delivery,total:subtotal+delivery}}
function setupOrderForm(){const form=$('orderForm');if(!form)return;form.onsubmit=async e=>{e.preventDefault();if(!cart.length)return showOrderMessage('Please add at least one product to your cart.','error');for(const i of cart){const p=getProduct(i.productId);if(!p)continue;if(i.quantity>getStock(p))return showOrderMessage(`${p.name} does not have enough stock.`,'error');if(hasMultipleColors(p)&&!i.color)return showOrderMessage(`Please select a color for ${p.name} in your cart before placing the order.`,'error')}const data=new FormData(form),city=String(data.get('customerCity')||'').trim(),details=orderDetails(city),btn=$('placeOrderBtn');btn.disabled=true;btn.textContent='Sending Order...';try{await emailjs.send(EMAILJS_CONFIG.SERVICE_ID,EMAILJS_CONFIG.TEMPLATE_ID,{order_number:`NOVYA-${Math.floor(100000+Math.random()*900000)}`,order_date:new Date().toLocaleString('en-PK'),customer_name:data.get('customerName'),customer_phone:data.get('customerPhone'),customer_email:data.get('customerEmail')||'Not provided',customer_city:city,customer_address:data.get('customerAddress'),order_notes:data.get('orderNotes')||'None',order_items:details.lines,order_subtotal:`Rs. ${formatPrice(details.subtotal)}`,delivery_charges:`Rs. ${formatPrice(details.delivery)}`,order_total:`Rs. ${formatPrice(details.total)}`});reduceStock();cart=[];saveCart();form.reset();updateCartUI();renderProducts();showOrderMessage('Your order has been submitted successfully. Thank you for shopping with NOVYA Store!','success')}catch(err){console.error(err);showOrderMessage('We could not submit your order. Please try again.','error')}finally{btn.disabled=false;btn.textContent='Place Order'}}}
function showOrderMessage(msg,type){const box=$('orderMessage');if(box){box.textContent=msg;box.className=`order-message ${type}`}}
function setupWhatsApp(){
 if(document.getElementById('novyaWhatsAppWidget'))return;
 const wrap=document.createElement('div');
 wrap.id='novyaWhatsAppWidget';
 wrap.innerHTML=`<button class="whatsapp-float" id="whatsappFloat" aria-label="Live Chat on WhatsApp">💬<span>WhatsApp</span></button><div class="whatsapp-modal" id="whatsappModal" hidden><div class="whatsapp-card"><button class="whatsapp-close" id="whatsappClose" aria-label="Close">×</button><div class="whatsapp-icon">☘</div><h3>Chat with NOVYA Store</h3><p>Choose how you would like to continue with WhatsApp.</p><a class="whatsapp-option" href="https://web.whatsapp.com/send?phone=923164697881" target="_blank" rel="noopener">Continue to WhatsApp Web</a><a class="whatsapp-option" href="whatsapp://send?phone=923164697881" rel="noopener">Open App</a></div></div>`;
 document.body.appendChild(wrap);
 const modal=$('whatsappModal');
 $('whatsappFloat').onclick=()=>{modal.hidden=false;document.body.classList.add('whatsapp-open')};
 $('whatsappClose').onclick=()=>{modal.hidden=true;document.body.classList.remove('whatsapp-open')};
 modal.onclick=e=>{if(e.target===modal){modal.hidden=true;document.body.classList.remove('whatsapp-open')}};
}

function setupCommon(){initEmail();setupWhatsApp();$('currentYear')&&($('currentYear').textContent=new Date().getFullYear());$('cartButton')?.addEventListener('click',openCart);$('cartClose')?.addEventListener('click',closeCart);$('cartOverlay')?.addEventListener('click',closeCart);$('quantityModalMinus')?.addEventListener('click',()=>changeModalQuantity(-1));$('quantityModalPlus')?.addEventListener('click',()=>changeModalQuantity(1));$('quantityModalCancel')?.addEventListener('click',closeQuantityModal);$('quantityModalConfirm')?.addEventListener('click',confirmBuyNow);$('mobileMenuBtn')?.addEventListener('click',()=>$('mainNav')?.classList.toggle('mobile-open'));$('customerCity')?.addEventListener('input',updateCheckoutSummary);$('searchBtn')?.addEventListener('click',()=>{const q=$('searchInput').value.trim();if(document.body.classList.contains('category-page'))renderProducts();else location.href=`category.html?category=All%20Products&search=${encodeURIComponent(q)}`});$('searchInput')?.addEventListener('keydown',e=>{if(e.key==='Enter')$('searchBtn').click()});if(document.body.classList.contains('category-page')){$('searchInput')&&($('searchInput').value=new URLSearchParams(location.search).get('search')||'');renderProducts()}else if(!document.body.classList.contains('product-page')){renderProducts();renderFreshArrivals();}renderProductPage();updateCartUI();setupOrderForm();if(location.hash==='#checkout')setTimeout(()=>$('checkout')?.scrollIntoView({behavior:'smooth'}),100)}
document.addEventListener('DOMContentLoaded',setupCommon);
