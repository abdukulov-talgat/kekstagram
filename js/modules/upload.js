import { showError } from './error.js';

const uploadInput = document.querySelector('#upload-file');
const overlay = document.querySelector('.img-upload__overlay');
const previewImg = document.querySelector('.img-upload__preview img');
const cancel = document.querySelector('#upload-cancel');

const ACCEPT_TYPES = [
  'jpg',
  'png',
  'jpeg',
];

uploadInput.addEventListener('change', () => {
  const file = uploadInput.files[0];
  if (ACCEPT_TYPES.some((type) => file.name.endsWith(type))) {
    previewImg.src = URL.createObjectURL(file);
    showPreview();
  } else {
    showError('Неверный формат файла.');
  }
});

cancel.addEventListener('click',closePreview);


function showPreview() {
  overlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  window.addEventListener('keydown', onWindowEscKeyDown);
}

function closePreview() {
  overlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  window.removeEventListener('keydown', onWindowEscKeyDown);
}

function onWindowEscKeyDown(evt) {
  if(evt.key === 'Escape') {
    evt.preventDefault();
    closePreview();
  }
}
