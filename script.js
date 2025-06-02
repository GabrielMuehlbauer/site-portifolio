/*gaveta de navegação*/
const menuButton = document.getElementById('menu-button');
const drawer = document.getElementById('drawer');
const overlay = document.getElementById('overlay');
const closeDrawerButton = document.querySelector('#close-drawer');

menuButton.addEventListener('click', () => {
  drawer.classList.add('open');
  overlay.classList.add('show');
});

overlay.addEventListener('click', () => {
  drawer.classList.remove('open');
  overlay.classList.remove('show');
});

closeDrawerButton.addEventListener('click', () => {
  const drawer = document.querySelector('#drawer');
  drawer.classList.remove('open');
  const overlay = document.querySelector('#overlay');
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
  if (index < items.length - 1) {
    index++;
    updateCarousel();
  }
});

prevBtn.addEventListener('click', () => {
  if (index > 0) {
    index--;
    updateCarousel();
  }
});

window.addEventListener('resize', updateCarousel);
updateCarousel();

