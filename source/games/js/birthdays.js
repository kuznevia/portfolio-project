import write from './functions/write.js';

const random = (max) => Math.floor(Math.random() * Math.floor(max));

export default () => {
  const listOneArray = document.getElementById('length').value.split(',');
  const listTwoArray = document.getElementById('length').value.split(',');
  const copy = document.querySelector('#copy');

  const result = [];

  while (listOneArray.length > 0) {
    const randomNumberOne = random(listOneArray.length);
    let randomNumberTwo = 0;

    do {
      randomNumberTwo = random(listTwoArray.length);
    } while (listOneArray.length > 1
      && listOneArray[randomNumberOne] === listTwoArray[randomNumberTwo]);

    const pair = [listOneArray[randomNumberOne], listTwoArray[randomNumberTwo]];
    result.push(pair);
    listOneArray.splice(randomNumberOne, 1);
    listTwoArray.splice(randomNumberTwo, 1);
  }

  write(result);
  copy.classList.remove('hidden');
};
