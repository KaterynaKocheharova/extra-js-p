import { getProducts } from '../api/products-api';

// ===================================== CATALOG REFS
const productList = document.querySelector('.product-list');
const loadMoreBtn = document.querySelector('.load-more-btn');
const catalogLoader = document.querySelector('.catalog-loader');

// ====================================== VARIABLES
let currentPage = 1;
const per_page = 4;
let maxPageNum = 8;
// ===================================== LOADING PRODUCTS FUNCTIONS

const onCatalogLoad = async () => {
  catalogLoader.classList.add('visible');
  try {
    const products = await getProducts(per_page, currentPage);
    renderProducts(products);
    checkLoadMoreStat();
  } catch (error) {
    alert(error);
  } finally {
    catalogLoader.classList.remove('visible');
  }
};

onCatalogLoad();

const checkLoadMoreStat = () => {
  if (currentPage <= maxPageNum) {
    loadMoreBtn.classList.add('visible');
    console.log('still visible');
  } else {
    loadMoreBtn.classList.remove('visible');
    console.log('Більше немає продуктів');
    //make disabled
  }
};

const loadMore = async () => {
  catalogLoader.classList.add('visible');
  currentPage += 1;
  try {
    const products = await getProducts(per_page, currentPage);
    renderProducts(products);
    checkLoadMoreStat();
  } catch (error) {
    alert(error);
  } finally {
    catalogLoader.classList.remove('visible');
  }
};

loadMoreBtn.addEventListener('click', loadMore);

// RENDERRING FUNCTION - SEPARATE FILE

const productTemplate = ({ id, type, description, colors, gender, price }) => {
  return `<li id=${id} class="product-item">
        <img class="catalog-item-image" src="../img/e1084e21-c4e8-4303-a203-72f4838c4cfb.jpg">
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
