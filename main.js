const a = document.querySelector('.a');
const b = document.querySelector('.b');

const button_a = document.querySelector('.button-a');
const button_b = document.querySelector('.button-b');

button_a.addEventListener('click', () => {
  console.log('button a clicked');

  a.classList.add('front');
  a.classList.remove('back');

  b.classList.add('back');
  b.classList.remove('front');
});

button_b.addEventListener('click', () => {
  console.log('button B clicked');

  a.classList.add('back');
  a.classList.remove('front');

  b.classList.add('front');
  b.classList.remove('back');
});