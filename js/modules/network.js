import { showError } from './error.js';
import { showSuccess } from './success.js';
import { closePreview, enableSubmit, resetForm } from './form-edit.js';
const ACTION_URL = 'https://25.javascript.pages.academy/kekstagram';


function sendData(body) {
  fetch(ACTION_URL, {
    method: 'POST',
    body
  })
    .then((response) => {
      if (response.ok) {
        resetForm();
        showSuccess();

      } else {
        throw new Error(`${response.status}:\t${response.statusText}`);
      }
    })
    .catch(() => {
      showError('Не удалось отправить.');
    })
    .finally(() => {
      closePreview();
      enableSubmit();
    });


}

function getData(cb) {
  fetch(`${ACTION_URL}/data`)
    .then((response) => {
      if(response.ok) {
        return response.json();
      }
      throw new Error('Не удалось загрузить фото.');
    })
    .then(cb)
    .catch(() => showError('Не удалось загрузить фото.'));
}


export { sendData, getData };
