// import refs from './refs';
import items from '../menu.json';
import postItemTemplates from '../templates.hbs';

const refs = {
  menu: document.querySelector('.js-menu'),
};

refs.menu.insertAdjacentHTML('beforeend', buildMenuFeed(items));

function buildMenuFeed(items) {
  const posts = items.map(item => postItemTemplates(item)).join('');
  return posts;
}
