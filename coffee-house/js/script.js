const menu = document.querySelector('.menu');
const hamburger = document.querySelector('.hamburger');
const mainPage = document.querySelector('.root');
const headerBtns = document.querySelectorAll('.scroll');
const activeControl = document.querySelector('.active');

// Бургер меню
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger_active');
    menu.classList.toggle('menu_active');
    mainPage.classList.toggle('no-scroll');
});

// Добавление обработчика событий для каждой кнопки в headerBtns
headerBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger_active');
    menu.classList.toggle('menu_active');
    mainPage.classList.toggle('no-scroll');
  });
});

let offset = 0;
const sliderLine = document.querySelector('.slider-line');
const sliderButtonNext = document.querySelector('.slider__button_next');
const sliderButtonPrev = document.querySelector('.slider__button_prev');

function updateSlide(direction) {
    offset = (offset + 480 * direction + 960) % 960;
    sliderLine.style.left = -offset + 'px';
}

sliderButtonNext.addEventListener('click', () => updateSlide(1));
sliderButtonPrev.addEventListener('click', () => updateSlide(-1));

setInterval(() => updateSlide(1), 5000);