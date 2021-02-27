const answer = parseInt(Math.random() * 100);
let tryCount = 0;
const maxTryCount = 7;

function readInt() {
  const number = document.getElementById('userAnswer').value;
  return parseInt(number);
}

function write(text) {
  document.getElementById('info').innerHTML = text;
}

function hide(id) {
  document.getElementById(id).style.display = 'none';
}

function guess() {
  tryCount++;

  var userAnswer = readInt(userAnswer);
  if (userAnswer == answer) {
    write('<b>Правильно! Вы выиграли!</b>');
    hide('button');
    hide('userAnswer');
  } else if (tryCount >= maxTryCount) {
    write(`Вы проиграли<br> Правильный ответ: ${answer}`);
    hide('button');
    hide('userAnswer');
  } else if (userAnswer > answer) {
    write(`Вы ввели слишком большое число.<br> Попробуйте еще раз.<br> У вас осталось ${maxTryCount - tryCount} попыток`);
  } else if (userAnswer < answer) {
    write(`Вы ввели слишком маленькое число.<br> Попробуйте еще раз.<br> У вас осталось ${maxTryCount - tryCount} попыток`);
  }
}
