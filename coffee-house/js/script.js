const menu = document.querySelector('.menu');
const hamburger = document.querySelector('.hamburger');
const mainPage = document.querySelector('.root');
const headerBtns = document.querySelectorAll('.scroll');
const activeControl = document.querySelectorAll('.point');
const moveControls = document.querySelectorAll('.point-full');
const sliderLine = document.querySelector('.slider-line');
const sliderButtonNext = document.querySelector('.slider__button_next');
const sliderButtonPrev = document.querySelector('.slider__button_prev');

// Burger menu
hamburger.addEventListener('click', toggleMenu);

// Event listener for each button in headerBtns
headerBtns.forEach(btn => btn.addEventListener('click', toggleMenu));

// Initial state for active elements
let counter = 0;
activeControl[counter].classList.add('active');

sliderButtonNext.addEventListener('click', () => updateSlide(1));
sliderButtonPrev.addEventListener('click', () => updateSlide(-1));

setInterval(() => updateSlide(1), 5000);

function toggleActiveControl(direction) {
    activeControl[counter].classList.remove('active');
    counter = (counter + direction + activeControl.length) % activeControl.length;
    activeControl[counter].classList.add('active');
}

// Animation function for each element in activeControl
activeControl.forEach((control, index) => control.addEventListener('click', () => {
    updateSlide(index - counter);
    toggleActiveControl(index - counter);
}));

function toggleMenu() {
    hamburger.classList.toggle('hamburger_active');
    menu.classList.toggle('menu_active');
    mainPage.classList.toggle('no-scroll');
}

const animationDuration = 5000;
const animationSteps = 60;
const stepInterval = animationDuration / animationSteps;

function animateMoveControl(element) {
    element.style.width = 0; 

    let currentWidth = 0;
    const targetWidth = 100;
    const widthIncrement = (targetWidth - currentWidth) / animationSteps;

    const intervalId = setInterval(() => {
        currentWidth += widthIncrement;
        element.style.width = currentWidth + '%';

        if (currentWidth >= targetWidth) {
            clearInterval(intervalId);
        }
    }, stepInterval);
}

let offset = 0;

function updateSlide(direction) {
    offset = (offset + 480 * direction + 1440) % 1440;
    sliderLine.style.left = -offset + 'px';
    toggleActiveControl(direction);
    const activeMoveControl = moveControls[counter];
    animateMoveControl(activeMoveControl);
}

animateMoveControl(moveControls[counter]);