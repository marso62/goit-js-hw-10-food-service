'use strict';

const body = document.querySelector('body');
const input = document.querySelector('input.js-switch-input');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

// ++++++++++++1 вариант

if (localStorage.getItem('theme')) {
  //ключ может быть любым названием
  const theme = localStorage.getItem('theme');
  body.classList.add(theme);
  if (theme === Theme.DARK) {
    input.checked = true;
  }
}

input.addEventListener('change', bodyColor);

function bodyColor() {
  if (input.checked) {
    body.classList.remove(Theme.LIGHT);
    body.classList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    body.classList.remove(Theme.DARK);
    body.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

// ++++++++++++++2 вариант

// input.onclick = function() {
//   body.classList.toggle(Theme.LIGHT);
//   body.classList.toggle(Theme.DARK);
// };
