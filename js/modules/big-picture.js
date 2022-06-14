import { getData } from './network.js';
import { getRandomInt } from './util.js';
import { getRandomName } from './mock.js';
const bigPic = document.querySelector('.big-picture');
const thumbs = document.querySelector('.pictures');
let selected = null;

thumbs.addEventListener('click', (evt) => {
  const link = evt.path.find((el) => {
    if (el.classList && el.classList.contains('picture')) {
      return true;
    }
    return false;
  });
  if (!link) {
    return;
  }
  evt.preventDefault();
  getData((arr) => {
    const pic = arr.find((item) => item.id === +link.dataset.id);
    if (pic) {
      selected = pic;
      showBigPic();
    }
  });
});

const COMMENTS_PER_LOAD = 5;
const btnLoadMore = document.querySelector('.social__comments-loader');
const comments = document.querySelector('.social__comments');
const commentsCount = bigPic.querySelector('.social__comment-count');
const cancel = bigPic.querySelector('.big-picture__cancel');

cancel.addEventListener('click', () => {
  closeBigPic();
});

btnLoadMore.addEventListener('click', () => {
  loadComments();
});

function loadComments() {
  let count = (comments.children.length + COMMENTS_PER_LOAD);

  count = Math.min(count, selected.comments.length);
  for (let i = comments.children.length; i < count; i++) {
    const tString = `
    <li class="social__comment">
      <img class="social__picture" src="${selected.comments[i].avatar}" alt="${selected.comments[i].name}" width="35" height="35">
      <p class="social__text">${selected.comments[i].message}</p>
    </li>`;
    comments.insertAdjacentHTML('beforeend', tString);
  }
  commentsCount.innerHTML = `${comments.children.length} из <span class="comments-count">${selected.comments.length}</span> комментариев`;

  (comments.children.length === selected.comments.length ? hideLoadMoreBtn : showLoadMoreBtn)();
}

function showLoadMoreBtn() {
  btnLoadMore.classList.remove('hidden');
}

function hideLoadMoreBtn() {
  btnLoadMore.classList.add('hidden');
}

function showBigPic() {
  renderBigPic();
  document.body.classList.add('modal-open');
  bigPic.classList.remove('hidden');
  window.addEventListener('keydown', onWindowEscKeyDown);
}

function closeBigPic() {
  document.body.classList.remove('modal-open');
  bigPic.classList.add('hidden');
  window.removeEventListener('keydown', onWindowEscKeyDown);
}

function renderBigPic() {
  comments.innerHTML = '';
  const name = getRandomName();
  const avatar = `img/avatar-${getRandomInt(1, 6)}.svg`;

  bigPic.querySelector('.big-picture__img img').src = selected.url;
  bigPic.querySelector('.social__header .social__picture').src = avatar;
  bigPic.querySelector('.social__header .social__picture').alt = name;
  bigPic.querySelector('.social__footer .social__picture').src = avatar;
  bigPic.querySelector('.social__footer .social__picture').alt = name;
  bigPic.querySelector('.social__caption').textContent = selected.description;
  bigPic.querySelector('.likes-count').textContent = selected.likes;
  loadComments();
}

function onWindowEscKeyDown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeBigPic();
  }
}
