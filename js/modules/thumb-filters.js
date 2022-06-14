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

form.addEventListener('click', function (evt)
{
  onFormClickDebounced.bind(this, evt)();
});


function onFormClick(evt) {
  Array.from(this.children).forEach((item) => item.classList.remove('img-filters__button--active'));
  evt.target.classList.add('img-filters__button--active');

  renderThumbs(FILTERS[evt.target.id]);
}

//source: https://learn.javascript.ru/call-apply-decorators
function debounce(cb, delay) {
  let isCooldown = false;

  return function (evt) {
    if (isCooldown) {
      return;
    }

    cb.bind(this, evt)();

    isCooldown = true;
    setTimeout(() => {
      isCooldown = false;
    },
    delay);
  };
}
