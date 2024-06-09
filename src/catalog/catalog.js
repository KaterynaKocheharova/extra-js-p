import { getProducts } from '../api/products-api';

const productList = document.querySelector('.product-list');

// GET PRODUCTS

const products = getProducts();

console.log(productList);
// RENDER PRODUCTS

const productTemplate = ({ id, type, description, colors, gender, price }) => {
  return `<li id=${id} class="product-item">
        <img src="../img/e1084e21-c4e8-4303-a203-72f4838c4cfb.jpg">
        <h3>${type}</h3>
        <p>${description}</p>
        <p>${gender}</p>
        <p>${price}dollars</p>
        <a class="product-card-shopping-cart-link" href="cart.html"> <i class="fa-solid fa-bag-shopping"></i></a>
        <i class="fa-solid fa-heart"></i>
        </li>`;
};

const renderProducts = products => {
  const productListMarkup = products.map(productTemplate).join('');
  productList.insertAdjacentHTML('beforeend', productListMarkup);
};

renderProducts(products);
