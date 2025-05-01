const menuButton = document.getElementById('menu-button');
const drawer = document.getElementById('drawer');
const overlay = document.getElementById('overlay');

menuButton.addEventListener('click', () => {
  drawer.classList.add('open');
  overlay.classList.add('show');
});

overlay.addEventListener('click', () => {
  drawer.classList.remove('open');
  overlay.classList.remove('show');
});
