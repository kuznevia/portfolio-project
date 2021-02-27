function generate() {
  const passwordLength = readInt();
  let password = '';
  let letter;
  const possible = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-=#!%$*';
  const copy = document.querySelector('#copy');

  for (let i = 0; i < passwordLength; i++) {
    letter = possible.charAt(Math.floor(Math.random() * possible.length));
    password += letter;
  }
  write(password);
  copy.classList.remove('hidden');
}

function write(text) {
  document.getElementById('length').value = text;
}

function show(text) {
  document.getElementById('password').innerHTML = text;
}

function readInt() {
  const number = document.getElementById('length').value;
  return parseInt(number);
}

function copy() {
  const copyText = document.getElementById('length');
  copyText.select();
  document.execCommand('copy');
  show(`Скопирован пароль: ${copyText.value}`);
}

function reset() {
  document.getElementById('password').innerHTML = '';
  document.getElementById('length').value = '';
  const copy = document.querySelector('#copy');
  copy.classList.add('hidden');
}
