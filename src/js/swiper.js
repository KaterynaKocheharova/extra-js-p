import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

let featureSwiper;

function initializeSwiper() {
  if (window.innerWidth < 500) {
    if (!featureSwiper) {
      featureSwiper = new Swiper('.swiper.feature-swiper', {
        modules: [Navigation, Pagination],
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });
    }
  } else {
    if (featureSwiper) {
      featureSwiper.destroy(true, true);
      featureSwiper = undefined;
    }
  }
}

window.addEventListener('load', initializeSwiper);
window.addEventListener('resize', initializeSwiper);
