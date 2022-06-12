function getRandomInt(min, max) {
  min = Math.abs(min);
  max = Math.abs(max);

  if (min > max) {
    const temp = max;
    max = min;
    min = temp;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function getRandomFloat(min, max, precision) {
  min = Math.abs(min);
  max = Math.abs(max);
  // precision = Math.abs(precision);

  if (min > max) {
    const temp = max;
    max = min;
    min = temp;
  }

  const num = Math.random() * (max - min) + min;

  return +num.toFixed(precision);
}

export { getRandomInt, getRandomFloat };
