import { validateUploadForm, validateUploadFile } from './form-validate.js';
import { sendData } from './network.js';
import { showError } from './error.js';

const form = document.querySelector('.img-upload__form');

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  if(!validateUploadForm()){
    return;
  }

  const body = new FormData(evt.target);
  sendData(body);
});


// UploadFile
const uploadInput = document.querySelector('#upload-file');
const overlay = document.querySelector('.img-upload__overlay');
const previewImg = document.querySelector('.img-upload__preview img');
const cancel = document.querySelector('#upload-cancel');

uploadInput.addEventListener('change', () => {
  if(validateUploadFile()){
    const file = uploadInput.files[0];
    previewImg.src = URL.createObjectURL(file);
    showPreview();
  }else {
    showError('Неверный формат файла.');
    clearUploadFile();
  }
});
cancel.addEventListener('click',closePreview);

function showPreview() {
  overlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  window.addEventListener('keydown', onWindowEscKeyDown);
}

function closePreview() {
  clearUploadFile();
  overlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  window.removeEventListener('keydown', onWindowEscKeyDown);
}

function clearUploadFile() {
  uploadInput.value = '';
}

function onWindowEscKeyDown(evt) {
  if(evt.key === 'Escape') {
    evt.preventDefault();
    closePreview();
  }
}
