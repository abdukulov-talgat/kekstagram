import { getData } from './network.js';

renderThumbs();

const container = document.querySelector('.pictures');

const imgFilters = document.querySelector('.img-filters');
function renderThumbs(filter = (arr) => arr) {
  getData((thumbs) => {

    thumbs = filter(thumbs);
    clearContainer();
    thumbs.forEach((item) => renderThumb(item));

    imgFilters.classList.remove('img-filters--inactive');
  });
}

function renderThumb(item) {
  const tString = `
  <a href="${item.url}" class="picture" data-id="${item.id}">
    <img class="picture__img" src="${item.url}" width="182" height="182" alt="Случайная фотография">
    <p class="picture__info">
      <span class="picture__comments">${item.comments.length}</span>
      <span class="picture__likes">${item.likes}</span>
    </p>
  </a>`;
  container.insertAdjacentHTML('beforeend', tString);
}

function clearContainer() {
  while (container.lastElementChild.classList.contains('picture')) {
    container.lastElementChild.remove();
  }
}

export { renderThumbs};


