/* NOVYA product catalog. Add/edit products in this array. */
const products=[
{id:1,name:"Digital Air Fryer 6L",price:8490,category:"Kitchen Appliances",desc:"Modern everyday air fryer for convenient cooking.",image:"https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=700&q=80"},
{id:2,name:"Electric Kitchen Chopper",price:3990,category:"Kitchen Appliances",desc:"Compact helper for quick chopping and preparation.",image:"https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=700&q=80"},
{id:3,name:"Stainless Steel Utensil Set",price:2490,category:"Kitchen Utensils",desc:"Useful kitchen tools for everyday cooking.",image:"https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=700&q=80"},
{id:4,name:"Silicone Kitchen Organizer",price:1290,category:"Kitchen Accessories",desc:"Keep drawers and counters neat and organized.",image:"https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=700&q=80"},
{id:5,name:"Rechargeable Table Lamp",price:2290,category:"Home Appliances",desc:"Portable lighting for desk, bedside or study.",image:"https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=700&q=80"},
{id:6,name:"Decorative Table Vase",price:1790,category:"Home Decor",desc:"A simple decorative accent for modern interiors.",image:"https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=700&q=80"},
{id:7,name:"LED Smart Desk Light",price:2990,category:"Electronics Gadgets",desc:"Modern desk lighting for work and study.",image:"https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=700&q=80"},
{id:8,name:"Fast Charging Cable",price:790,category:"Mobile Accessories",desc:"Everyday charging and data cable.",image:"https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=700&q=80"},
{id:9,name:"Personal Grooming Kit",price:3490,category:"Personal Care Products",desc:"Useful grooming accessories in a compact kit.",image:"https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&w=700&q=80"},
{id:10,name:"Baby Care Organizer",price:1990,category:"Baby Accessories",desc:"Handy organizer for everyday baby essentials.",image:"https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=700&q=80"},
{id:11,name:"Multi-Purpose Tool Kit",price:4490,category:"Tools & Tool Kits",desc:"Practical set for common household jobs.",image:"https://images.unsplash.com/photo-1581147036324-c17ac41a5b54?auto=format&fit=crop&w=700&q=80"},
{id:12,name:"Men's Casual Shirt",price:2290,category:"Men",desc:"Comfortable everyday casual wear.",image:"https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=80"},
{id:13,name:"Women's Casual Outfit",price:3290,category:"Women",desc:"Versatile everyday fashion with a clean look.",image:"https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=700&q=80"},
{id:14,name:"Travel Backpack",price:2990,category:"Bags & Luggage",desc:"Practical backpack for daily use and travel.",image:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=80"}
];

const icons={"Kitchen Appliances":"🍳","Kitchen Accessories":"🥣","Kitchen Utensils":"🍴","Home Appliances":"🏠","Home Accessories":"🧺","Home Decor":"🪴","Electronics Gadgets":"🔌","Mobile Accessories":"📱","Personal Care Products":"🧴","Baby Accessories":"🍼","Tools & Tool Kits":"🛠️","Men":"👔","Women":"👗","Bags & Luggage":"🧳"};
let activeCategory="All Products",searchTerm="";
let cart=JSON.parse(localStorage.getItem("novyaCart")||"[]");

const $=id=>document.getElementById(id);
const money=n=>"Rs. "+Number(n).toLocaleString("en-PK");
const categories=()=>[...new Set(products.map(p=>p.category))];
function save(){localStorage.setItem("novyaCart",JSON.stringify(cart))}
function itemsCount(){return cart.reduce((s,i)=>s+i.qty,0)}
function cartSum(){return cart.reduce((s,i)=>s+i.price*i.qty,0)}

function renderCategories(){
 $("categoryGrid").innerHTML=categories().map(c=>`<button class="category-card" data-cat="${c}"><div class="category-icon">${icons[c]||"🛍️"}</div><strong>${c}</strong></button>`).join("");
 document.querySelectorAll("[data-cat]").forEach(b=>b.onclick=()=>setCategory(b.dataset.cat));
}
function renderFilters(){
 const list=["All Products",...categories()];
 $("filterRow").innerHTML=list.map(c=>`<button class="filter ${c===activeCategory?"active":""}" data-filter="${c}">${c}</button>`).join("");
 document.querySelectorAll("[data-filter]").forEach(b=>b.onclick=()=>setCategory(b.dataset.filter));
}
function visible(){
 let list=products.filter(p=>(activeCategory==="All Products"||p.category===activeCategory)&&(!searchTerm||`${p.name} ${p.category} ${p.desc}`.toLowerCase().includes(searchTerm)));
 const s=$("sortSelect").value;
 if(s==="low")list.sort((a,b)=>a.price-b.price);
 if(s==="high")list.sort((a,b)=>b.price-a.price);
 if(s==="name")list.sort((a,b)=>a.name.localeCompare(b.name));
 return list;
}
function renderProducts(){
 const list=visible();
 $("productsTitle").textContent=activeCategory;
 $("productGrid").innerHTML=list.map(p=>`<article class="product-card"><div class="product-image"><img src="${p.image}" alt="${p.name}" loading="lazy"></div><div class="product-body"><div class="product-category">${p.category}</div><h3 class="product-name">${p.name}</h3><p class="product-desc">${p.desc}</p><div class="price">${money(p.price)}</div><div class="product-actions"><button class="small-btn add" data-add="${p.id}">Add to Cart</button><button class="small-btn buy" data-buy="${p.id}">Buy Now</button></div></div></article>`).join("");
 $("emptyState").hidden=list.length>0;
 document.querySelectorAll("[data-add]").forEach(b=>b.onclick=()=>add(Number(b.dataset.add),false));
 document.querySelectorAll("[data-buy]").forEach(b=>b.onclick=()=>add(Number(b.dataset.buy),true));
}
function add(id,buy){
 const p=products.find(x=>x.id===id),old=cart.find(x=>x.id===id);
 old?old.qty++:cart.push({id:p.id,name:p.name,price:p.price,qty:1});
 save();renderCart();
 if(buy){$("checkout").scrollIntoView({behavior:"smooth"})}else{openCart()}
}
function change(id,d){
 const i=cart.find(x=>x.id===id);if(!i)return;
 i.qty+=d;if(i.qty<=0)cart=cart.filter(x=>x.id!==id);
 save();renderCart();
}
function removeItem(id){cart=cart.filter(x=>x.id!==id);save();renderCart()}
function renderCart(){
 $("cartCount").textContent=itemsCount();
 $("cartTotal").textContent=money(cartSum());
 if(!cart.length){$("cartItems").innerHTML='<div class="empty-state">Your cart is empty.<br>Add products to continue.</div>';$("checkoutSummary").textContent="Your cart is empty.";return}
 $("cartItems").innerHTML=cart.map(i=>`<div class="cart-row"><div><strong>${i.name}</strong><div>${money(i.price)} each</div><div class="qty"><button data-minus="${i.id}">−</button><span>${i.qty}</span><button data-plus="${i.id}">+</button></div></div><div><strong>${money(i.price*i.qty)}</strong><br><button class="remove" data-remove="${i.id}">Remove</button></div></div>`).join("");
 $("checkoutSummary").textContent=cart.map(i=>`${i.name} × ${i.qty} — ${money(i.price*i.qty)}`).join("\n")+`\n\nTotal: ${money(cartSum())}`;
 document.querySelectorAll("[data-minus]").forEach(b=>b.onclick=()=>change(Number(b.dataset.minus),-1));
 document.querySelectorAll("[data-plus]").forEach(b=>b.onclick=()=>change(Number(b.dataset.plus),1));
 document.querySelectorAll("[data-remove]").forEach(b=>b.onclick=()=>removeItem(Number(b.dataset.remove)));
}
function openCart(){$("cartDrawer").classList.add("open");$("drawerOverlay").classList.add("open")}
function closeCart(){$("cartDrawer").classList.remove("open");$("drawerOverlay").classList.remove("open")}
function setCategory(c){activeCategory=c;searchTerm="";$("searchInput").value="";renderFilters();renderProducts();$("products").scrollIntoView({behavior:"smooth"});$("mainNav").classList.remove("mobile-open")}

$("cartButton").onclick=openCart;$("closeCart").onclick=closeCart;$("drawerOverlay").onclick=closeCart;
$("checkoutBtn").onclick=()=>{closeCart();$("checkout").scrollIntoView({behavior:"smooth"})};
$("sortSelect").onchange=renderProducts;
$("dealBtn").onclick=()=>setCategory("All Products");
$("menuBtn").onclick=()=>$("mainNav").classList.toggle("mobile-open");
$("searchForm").onsubmit=e=>{e.preventDefault();searchTerm=$("searchInput").value.trim().toLowerCase();activeCategory="All Products";renderFilters();renderProducts();$("products").scrollIntoView({behavior:"smooth"})};
document.querySelectorAll("[data-category]").forEach(a=>a.onclick=e=>{e.preventDefault();setCategory(a.dataset.category)});

/* Order submission will be connected to EmailJS in the next setup step. */
$("orderForm").onsubmit=e=>{
 e.preventDefault();
 const status=$("formStatus");
 if(!cart.length){status.textContent="Please add a product to your cart first.";status.style.color="#dc2626";return}
 status.textContent="Order form is ready. We will connect EmailJS before publishing.";status.style.color="#b45309";
};

$("year").textContent=new Date().getFullYear();
renderCategories();renderFilters();renderProducts();renderCart();
