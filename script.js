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

// Seleciona todos os links dentro da gaveta
const drawerLinks = document.querySelectorAll('#drawer a');

// Adiciona um evento de clique a cada link
drawerLinks.forEach(link => {
  link.addEventListener('click', () => {
    drawer.classList.remove('open');
    overlay.classList.remove('show');
  });
});
