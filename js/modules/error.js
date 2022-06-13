const template = document.querySelector('#error');


function showError(title) {
  const frag = document.createDocumentFragment();
  frag.appendChild(template.content.querySelector('.error').cloneNode(true));
  frag.querySelector('.error__title').textContent = title;

  frag.querySelector('.error').addEventListener('click', function (evt) {
    if (this === evt.target) {
      closeModal(evt);
    }
  });
  frag.querySelector('.error__button').addEventListener('click', closeModal);
  window.addEventListener('keydown', onWindowEscKeyDown);

  document.body.append(frag);
}

function closeModal() {
  document.querySelector('.error').remove();
  window.removeEventListener('keydown', onWindowEscKeyDown);
}

function onWindowEscKeyDown(evt) {
  if(evt.key === 'Escape') {
    evt.preventDefault();
    closeModal();
  }
}


export { showError };
