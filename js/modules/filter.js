const effectLevel = document.querySelector('.img-upload__effect-level');
const previewImg = document.querySelector('.img-upload__preview img');
const effectValue = document.querySelector('.img-upload__effect-level .effect-level__value');
const slider = document.querySelector('.img-upload__effect-level .effect-level__slider');
const effects = document.querySelector('.img-upload__effects');
let current = 'none';

noUiSlider.create(slider, {
  start: 1,
  range: {
    min: 0,
    max: 1,
  },
  step: 0.1,
  connect: 'lower',
  format: {
    to: (value) => value.toFixed(1),
    from: (value) => (+value).toFixed(1)
  }
});

slider.noUiSlider.on('update', function () {
  effectValue.setAttribute('value', this.get());
  if (current !== 'none') {
    previewImg.style.filter = `${current}(${this.get()})`;
  }

});

effects.addEventListener('change', (evt) => {
  switch (evt.target.value) {
    case 'none':
      previewImg.classList = '';
      previewImg.style.filter = '';
      current = 'none';
      hideSlider();
      break;

    case 'chrome':
      previewImg.classList = '';
      previewImg.classList.add('effects__preview--chrome');
      current = 'grayscale';
      slider.noUiSlider.updateOptions({
        start: 1,
        range: {
          min: 0,
          max: 1,
        },
        step: 0.1,
        format: {
          to: (value) => value.toFixed(1),
          from: (value) => (+value).toFixed(1)
        }
      }, true);
      showSlider();
      break;

    case 'sepia':
      previewImg.classList = '';
      previewImg.classList.add('effects__preview--sepia');
      current = 'sepia';
      slider.noUiSlider.updateOptions({
        start: 1,
        range: {
          min: 0,
          max: 1,
        },
        step: 0.1,
        format: {
          to: (value) => value.toFixed(1),
          from: (value) => (+value).toFixed(1)
        },
      }, true);
      showSlider();
      break;

    case 'marvin':
      previewImg.classList = '';
      previewImg.classList.add('effects__preview--marvin');
      current = 'invert';
      slider.noUiSlider.updateOptions({
        start: 100,
        range: {
          min: 0,
          max: 100,
        },
        step: 1,
        format: {
          to: (value) => `${value.toFixed(0)}%`,
          from: (value) => (+value).toFixed(0)
        },
      }, true);
      showSlider();
      break;

    case 'phobos':
      previewImg.classList = '';
      previewImg.classList.add('effects__preview--phobos');
      current = 'blur';
      slider.noUiSlider.updateOptions({
        start: 3,
        range: {
          min: 0,
          max: 3,
        },
        step: 0.1,
        format: {
          to: (value) => `${value.toFixed(1)}px`,
          from: (value) => (+value).toFixed(1)
        },
      }, true);
      showSlider();
      break;

    case 'heat':
      previewImg.classList = '';
      previewImg.classList.add('effects__preview--heat');
      current = 'brightness';
      slider.noUiSlider.updateOptions({
        start: 3,
        range: {
          min: 1,
          max: 3,
        },
        step: 0.1,
        format: {
          to: (value) => `${value.toFixed(1)}`,
          from: (value) => (+value).toFixed(1)
        },
      }, true);
      showSlider();
      showSlider();
      break;
  }
});

function hideSlider() {
  effectLevel.classList.add('hidden');
}

function showSlider() {
  effectLevel.classList.remove('hidden');
}
