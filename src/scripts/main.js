'use strict';

const block = document.querySelector('.block');
const title = document.createElement('h1');

function randomizer() {
  const possible = (
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789');

  return possible[Math.floor(Math.random() * possible.length)];
}

function createString(count) {
  let str = '';

  for (let i = 0; i < count; i++) {
    str += randomizer();
  }

  return str;
}

setInterval(() => {
  const str = createString(5);

  title.className = '';
  title.classList.add('defaulte');
  title.removeAttribute('hidden');

  if (str.includes(0)) {
    title.hidden = true;
  }

  if (str === str.split('').reverse().join('')) {
    title.className = '';
    title.classList.add('red');
  }

  if (!isNaN(str)) {
    title.className = '';
    title.classList.add('blue');
  }

  title.innerText = str;

  block.append(title);
}, 3000);
