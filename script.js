/* 1. Unmute ambience on first user interaction */
document.addEventListener('click', () => {
  const audio = document.getElementById('bg-audio');
  if (audio) audio.muted = false;
}, { once: true });

/* 2. Toggle image visibility on button click */
document.addEventListener('DOMContentLoaded', () => {
  const btn   = document.getElementById('toggle-img');
  const img   = document.getElementById('travel-img');

  btn.addEventListener('click', () => {
    img.classList.toggle('show-image');
  });
});
