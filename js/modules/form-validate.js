const form = document.querySelector('.img-upload__form');

const pristine = new Pristine(form, {
  // class of the parent element where the error/success class is added
  classTo: 'text__inner',
  errorClass: 'text__inner--error',
  successClass: 'text__inner--success',
  // class of the parent element where error text element is appended
  errorTextParent: 'text__inner',
  // type of element to create for the error text
  errorTextTag: 'div',
  // class of the error text element
  errorTextClass: 'text__help'
}, false);

function validateUploadForm() {
  return pristine.validate();
}


// Dont close modal when inputs in focus
const textContainer = document.querySelector('.img-upload__text');
textContainer.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.cancelBubble = true;
  }
});


// HashTag field validation
const inputHashtag = document.querySelector('.text__hashtags');
const re = new RegExp('^#[a-zа-я0-9ё]+$', 'i');

pristine.addValidator(inputHashtag, () => {
  inputHashtag.value = inputHashtag.value.trim();
  const tags = inputHashtag.value.split(' ');

  for (let i = 0; i < tags.length; i++) {
    if (!tags[i]) {
      continue;
    }
    if (!re.test(tags[i])) {
      return false;
    }
  }
  return true;

}, 'Хэштег должен начинаться с символа # и может содержать только буквы и цифры');

pristine.addValidator(inputHashtag, () => {
  inputHashtag.value = inputHashtag.value.trim();
  const tags = inputHashtag.value.split(' ');
  if (tags.some((t) => t.length > 20)) {
    return false;
  }
  return true;
}, 'максимальная длина одного хэш-тега 20 символов, включая решётку');

pristine.addValidator(inputHashtag, () => {
  inputHashtag.value = inputHashtag.value.trim();
  const tags = inputHashtag.value.split(' ');
  const set = new Set();

  for (let i = 0; i < tags.length; i++) {
    if (set.has(tags[i])) {
      return false;
    }
    set.add(tags[i]);
  }

  return true;

}, 'один и тот же хэш-тег не может быть использован дважды');


pristine.addValidator(inputHashtag, () => {
  inputHashtag.value = inputHashtag.value.trim();
  const tags = inputHashtag.value.split(' ');
  return tags.length <= 5;
}, 'нельзя указать больше пяти хэш-тегов');


// Comments Validation
const inputComment = document.querySelector('.text__description');
const MAX_LENGTH = 140;

pristine.addValidator(
  inputComment,
  () => inputComment.value.length <= MAX_LENGTH,
  `длина комментария не может составлять больше ${MAX_LENGTH} символов`
);


//file upload Validation
const ACCEPT_TYPES = [
  'jpg',
  'png',
  'jpeg',
];
const uploadInput = document.querySelector('#upload-file');

function validateUploadFile() {
  const file = uploadInput.files[0];
  return ACCEPT_TYPES.some((type)=> file.name.endsWith(type));
}

export {validateUploadForm, validateUploadFile};
