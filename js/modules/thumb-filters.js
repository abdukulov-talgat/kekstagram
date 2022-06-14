import { renderThumbs } from './render-thumbnails.js';
import { shuffle } from './util.js';

const DELAY = 500;
const RANDOM_COUNT = 10;
const FILTERS = {
  'filter-default': (arr) => arr,
  'filter-random': (arr) => shuffle(arr).slice(0, RANDOM_COUNT),
  'filter-discussed': (arr) => arr.sort((a, b) => b.comments.length - a.comments.length),
};
const form = document.querySelector('.img-filters__form');

// let timer;
// form.addEventListener('click', (evt) => {
//   clearTimeout(timer);
//   timer = setTimeout(onFormClick, DELAY, evt);
// });

const onFormClickDebounced = debounce(onFormClick, DELAY);

form.addEventListener('click', (evt) => {
  onFormClickDebounced(evt);
});


function onFormClick(evt) {
  renderThumbs(FILTERS[evt.target.id]);
}

//source: https://learn.javascript.ru/call-apply-decorators
function debounce(cb, delay) {
  let isCooldown = false;

  return function (evt) {
    if (isCooldown) {
      return;
    }

    cb(evt);

    isCooldown = true;
    setTimeout(() => {
      isCooldown = false;
    },
    delay);
  };
}
