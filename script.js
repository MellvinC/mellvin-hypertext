/* 2. Toggle image visibility on button click */
document.addEventListener('DOMContentLoaded', () => {
  const btn   = document.getElementById('toggle-img');
  const img   = document.getElementById('travel-img');

  btn.addEventListener('click', () => {
    img.classList.toggle('show-image');
  });
});
