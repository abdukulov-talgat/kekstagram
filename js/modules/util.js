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

// source: https://javascript.info/task/shuffle
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

    // swap elements array[i] and array[j]
    // we use "destructuring assignment" syntax to achieve that
    // you'll find more details about that syntax in later chapters
    // same can be written as:
    // let t = array[i]; array[i] = array[j]; array[j] = t
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export { getRandomInt, getRandomFloat, shuffle };
