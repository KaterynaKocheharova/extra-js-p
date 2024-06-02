import { addClass } from './helpers';

const headerRefs = {
  navLink: document.querySelector('.nav-link'),
  header: document.querySelector('.header'),
};

headerRefs.navLink.addEventListener('click', () =>
  addClass(headerRefs.navLink, 'active-link')
);

const headerOffset = headerRefs.header.offsetTop;

window.addEventListener('scroll', function () {
  if (window.pageYOffset > headerOffset) {
    headerRefs.header.classList.add('fixed-header');
  } else {
    headerRefs.header.classList.remove('fixed-header');
  }
});
