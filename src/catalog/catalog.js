import { getProducts } from '../api/products-api';

const productList = document.querySelector('.product-list');

// GET PRODUCTS

const products = getProducts();

console.log(productList);
// RENDER PRODUCTS

const productTemplate = ({ id, type, description, colors, gender, price }) => {
  return `<li id=${id} class="product-item">
        <img src="../img/e1084e21-c4e8-4303-a203-72f4838c4cfb.jpg">
        <h3 class="catalog-item-title card-title">${type}</h3>
        <p class="catalog-item-text">${description}</p>
        <p  class="catalog-item-text catalog-item-price">${price} dollars</p>
        <div class="catalog-icon-container">
        <a class="product-card-shopping-cart-link" href="cart.html"> <i class="fa-solid fa-bag-shopping">
        </i></a>
        <a class="product-card-fav-link" href="cart.html"><i class="fa-solid fa-heart"></i> </a>
        </div>
        </li>`;
};

const renderProducts = products => {
  const productListMarkup = products.map(productTemplate).join('');
  productList.insertAdjacentHTML('beforeend', productListMarkup);
};

renderProducts(products);
