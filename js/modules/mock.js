import { getRandomInt } from './util.js';

const NAMES = [
  'Кекс',
  'Валера',
  'Вася Пупкин',
  'Саша Гудко',
  'Николай Шабалин',
  'Неопознанный енот',
  'Утка'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

function getData(count = 25) {
  const arr = [];

  for (let i = 0; i < count; i++) {
    arr[i] = {
      id: i + 1,
      url: `photos/${i + 1}.jpg`,
      description: `Описание ${i + 1}`,
      likes: getRandomInt(15, 200),
      comments: getComments(getRandomInt(1, 5))
    };
  }
  return arr;
}

function getComments(count) {
  const arr = [];
  const commentsOffset = getRandomInt(0, 1000);

  for (let i = 0; i < count; i++) {
    arr[i] = {
      id: i + commentsOffset,
      avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
      message: MESSAGES[getRandomInt(0, MESSAGES.length - 1)],
      name: NAMES[getRandomInt(0, NAMES.length - 1)],
    };
  }

  return arr;
}

function getRandomName() {
  return NAMES[getRandomInt(0, NAMES.length - 1)];
}

export { getData, getRandomName };
