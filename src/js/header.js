import { addClass, removeClass } from './helpers';

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
    addClass(headerRefs.header, 'sticky-header');
  } else {
    removeClass(headerRefs.header, 'sticky-header');
  }
});
