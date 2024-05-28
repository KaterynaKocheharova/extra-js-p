import { addClass } from './helpers';

const headerRefs = {
  navLink: document.querySelector('.nav-link'),
};

headerRefs.navLink.addEventListener('click', () =>
  addClass(headerRefs.navLink, 'active')
);
