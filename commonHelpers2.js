import"./assets/styles-39cf5560.js";const n=[{id:1,type:"bag",colors:["black","brown","tan"],gender:"women",description:"A stylish leather bag for women.",price:120},{id:2,type:"wallet",colors:["brown","blue","red"],gender:"men",description:"A sleek leather wallet for men.",price:45},{id:3,type:"belt",colors:["black","brown","grey"],gender:"women",description:"A classic leather belt for women.",price:35},{id:4,type:"bag",colors:["red","green","blue"],gender:"men",description:"A versatile leather bag for men.",price:110},{id:5,type:"wallet",colors:["black","brown","grey"],gender:"women",description:"A practical leather wallet for women.",price:50},{id:6,type:"belt",colors:["black","brown","blue"],gender:"men",description:"A stylish leather belt for men.",price:40},{id:7,type:"bag",colors:["brown","tan","grey"],gender:"women",description:"A spacious leather bag for women.",price:130},{id:8,type:"wallet",colors:["black","blue","tan"],gender:"men",description:"A durable leather wallet for men.",price:48},{id:9,type:"belt",colors:["brown","black","red"],gender:"women",description:"A fashionable leather belt for women.",price:38},{id:10,type:"bag",colors:["blue","red","tan"],gender:"men",description:"A rugged leather bag for men.",price:115},{id:11,type:"wallet",colors:["brown","grey","red"],gender:"women",description:"A chic leather wallet for women.",price:55},{id:12,type:"belt",colors:["black","brown","green"],gender:"men",description:"A versatile leather belt for men.",price:42},{id:13,type:"bag",colors:["brown","black","blue"],gender:"women",description:"A stylish leather bag for women.",price:125},{id:14,type:"wallet",colors:["black","blue","green"],gender:"men",description:"A functional leather wallet for men.",price:46},{id:15,type:"belt",colors:["brown","tan","blue"],gender:"women",description:"A trendy leather belt for women.",price:37},{id:16,type:"bag",colors:["black","grey","green"],gender:"men",description:"A practical leather bag for men.",price:105},{id:17,type:"wallet",colors:["brown","blue","tan"],gender:"women",description:"A sleek leather wallet for women.",price:52},{id:18,type:"belt",colors:["black","brown","red"],gender:"men",description:"A durable leather belt for men.",price:39},{id:19,type:"bag",colors:["blue","tan","red"],gender:"women",description:"A stylish leather bag for women.",price:135},{id:20,type:"wallet",colors:["black","grey","green"],gender:"men",description:"A functional leather wallet for men.",price:49},{id:21,type:"belt",colors:["brown","black","blue"],gender:"women",description:"A versatile leather belt for women.",price:36},{id:22,type:"bag",colors:["black","brown","green"],gender:"men",description:"A durable leather bag for men.",price:108},{id:23,type:"wallet",colors:["brown","blue","tan"],gender:"women",description:"A sleek leather wallet for women.",price:51},{id:24,type:"belt",colors:["black","red","grey"],gender:"men",description:"A stylish leather belt for men.",price:40},{id:25,type:"bag",colors:["brown","blue","red"],gender:"women",description:"A trendy leather bag for women.",price:125},{id:26,type:"wallet",colors:["black","blue","green"],gender:"men",description:"A functional leather wallet for men.",price:48},{id:27,type:"belt",colors:["brown","black","tan"],gender:"women",description:"A versatile leather belt for women.",price:38},{id:28,type:"bag",colors:["black","brown","grey"],gender:"men",description:"A practical leather bag for men.",price:112},{id:29,type:"wallet",colors:["brown","blue","red"],gender:"women",description:"A chic leather wallet for women.",price:54},{id:30,type:"belt",colors:["black","tan","green"],gender:"men",description:"A stylish leather belt for men.",price:41}],c=()=>n,o=document.querySelector(".product-list"),i=c();console.log(o);const a=({id:e,type:r,description:t,colors:s,gender:p,price:l})=>`<li id=${e} class="product-item">
        <img class="catalog-item-image" src="../img/e1084e21-c4e8-4303-a203-72f4838c4cfb.jpg">
        <h3 class="catalog-item-title card-title">${r}</h3>
        <p class="catalog-item-text">${t}</p>
        <p  class="catalog-item-text catalog-item-price">${l} dollars</p>
        <div class="catalog-icon-container">
        <a class="product-card-shopping-cart-link" href="cart.html"> <i class="fa-solid fa-bag-shopping">
        </i></a>
        <a class="product-card-fav-link" href="cart.html"><i class="fa-solid fa-heart"></i> </a>
        </div>
        </li>`,d=e=>{const r=e.map(a).join("");o.insertAdjacentHTML("beforeend",r)};d(i);
//# sourceMappingURL=commonHelpers2.js.map
