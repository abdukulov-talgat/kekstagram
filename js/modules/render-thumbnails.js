import { getData } from './network.js';

const container = document.querySelector('.pictures');

function renderThumbnails(predicate = () => true) {
  getData((thumbs) => {
    thumbs = thumbs.filter(predicate);
    clearContainer();
    thumbs.forEach((item) => renderThumb(item));
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


export { renderThumbnails };


