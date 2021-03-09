const reset = () => {
  document.getElementById('password').innerHTML = '';
  document.getElementById('length').value = '';
  const copy = document.querySelector('#copy');
  copy.classList.add('hidden');
};
