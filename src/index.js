import uniqueRandomArray from 'unique-random-array';
import firstNames from './firstnames';

const getRandomItem = uniqueRandomArray(firstNames);

module.exports = {
  all: all,
  random: random
};

function all() {
  return firstNames;
}

function random(number) {
  if (number === undefined) {
    return getRandomItem();

  } else {
    var randomItems = [];

    for (let i = 0; i < number; i++) {
      randomItems.push(getRandomItem());
    }

    return randomItems;
  }
}
