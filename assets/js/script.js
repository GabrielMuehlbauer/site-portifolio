/*gaveta de navegação*/
const menuButton = document.getElementById('menu-button');
const drawer = document.getElementById('drawer');
const overlay = document.getElementById('overlay');
const closeDrawerButton = document.querySelector('#close-drawer');

function openDrawer() {
  drawer.classList.add('open');
  overlay.classList.add('show');
}

function closeDrawer() {
  drawer.classList.remove('open');
  overlay.classList.remove('show');
}

menuButton.addEventListener('click', openDrawer);

overlay.addEventListener('click', closeDrawer);

closeDrawerButton.addEventListener('click', closeDrawer);

// Seleciona todos os links dentro da gaveta
const drawerLinks = document.querySelectorAll('#drawer a');

// Adiciona um evento de clique a cada link
drawerLinks.forEach(link => {
  link.addEventListener('click', closeDrawer);
});

/*Carrosel do My Projects*/
const track = document.querySelector('.carousel-track');
const nextBtn = document.querySelector('.carousel-button.next');
const prevBtn = document.querySelector('.carousel-button.prev');
const items = document.querySelectorAll('.carousel-item');

let index = 0;

function updateCarousel() {
  const item = items[0];
  const slideWidth = item.getBoundingClientRect().width + 20;
  track.style.transform = `translateX(-${index * slideWidth}px)`;
}

nextBtn.addEventListener('click', () => {
  index = (index + 1) % items.length;
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  index = (index - 1 + items.length) % items.length;
  updateCarousel();
});

window.addEventListener('resize', updateCarousel);
updateCarousel();

