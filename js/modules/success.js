const template = document.querySelector('#success');

function showSuccess() {
  const frag = document.createDocumentFragment();
  frag.appendChild(template.content.querySelector('.success').cloneNode(true));

  frag.querySelector('.success').addEventListener('click', function (evt) {
    if (this === evt.target) {
      closeModal(evt);
    }
  });
  frag.querySelector('.success__button').addEventListener('click', closeModal);
  window.addEventListener('keydown', onWindowEscKeyDown);

  document.body.append(frag);
}

function closeModal() {
  document.querySelector('.success').remove();
  window.removeEventListener('keydown', onWindowEscKeyDown);
}

function onWindowEscKeyDown(evt) {
  if(evt.key === 'Escape') {
    evt.preventDefault();
    closeModal();
  }
}

export {showSuccess};
