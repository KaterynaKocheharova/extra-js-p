import { getProducts } from './api/products-api';

const productList = document.querySelector('.product-list');

// GET PRODUCTS

const products = getProducts();

console.log(productList);
// RENDER PRODUCTS

const productTemplate = ({ id, type, description, colors, gender }) => {
  return `<li id=${id} class="product-item">
        <a class="product-link">
        <h3>${type}</h3>
        <p>${description}</p>
        <p>${gender}</p>
        </a>
    </li>`;
};

const renderProducts = products => {
  const productListMarkup = products.map(productTemplate).join('');
  productList.insertAdjacentHTML('beforeend', productListMarkup);
};

renderProducts(products);
