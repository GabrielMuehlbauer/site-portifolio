/*gaveta de navegação*/
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

/*Carrosel do My Projects*/
const track = document.querySelector('.carousel-track');
  const nextBtn = document.querySelector('.carousel-button.next');
  const prevBtn = document.querySelector('.carousel-button.prev');

  let index = 0;
  const totalItems = document.querySelectorAll('.carousel-item').length;

  function updateCarousel() {
    if (window.innerWidth >= 1023) return; 

    const item = document.querySelector('.carousel-item');
    const style = getComputedStyle(item);
    const gap = parseInt(style.marginRight) || 20; // Ou você define o valor usado no CSS
    const slideWidth = item.offsetWidth + gap;

    track.style.transform = `translateX(-${index * slideWidth}px)`;
  }

  nextBtn.addEventListener('click', () => {
    if (index < totalItems - 1) {
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

  // Atualiza se a janela mudar de tamanho
  window.addEventListener('resize', updateCarousel);
