const smaller = document.querySelector('.scale__control--smaller');
const bigger = document.querySelector('.scale__control--bigger');
const inputScale = document.querySelector('.scale__control--value');
const preview = document.querySelector('.img-upload__preview');

const STEP = 25;
const MIN = 25;
const MAX = 100;

smaller.addEventListener('click', () => {
  let currentValue = parseInt(inputScale.value, 10);
  currentValue -= STEP;

  inputScale.value = `${Math.max(currentValue, MIN)}%`;
  changeScale();
});

bigger.addEventListener('click', () => {
  let currentValue = parseInt(inputScale.value, 10);
  currentValue += STEP;

  inputScale.value = `${Math.min(currentValue, MAX)}%`;
  changeScale();
});


function changeScale() {
  const currentValue = parseInt(inputScale.value, 10) / 100;
  preview.style.transform = `scale(${currentValue})`;
}

function resetScale() {
  changeScale();
}

export { resetScale };
