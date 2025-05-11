'use strict';

const largeImg = document.querySelector('#largeImg');
const thumbs = document.querySelector('#thumbs');

thumbs.addEventListener('click', function (e) {
  e.preventDefault();

  const thumbnail = e.target.closest('a');

  if (!thumbnail) {
    return;
  }

  largeImg.src = thumbnail.href;
  largeImg.alt = thumbnail.title;
});
