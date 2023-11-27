const coffeeCup = document.querySelector('.header__button');
const enjoyBtn = document.querySelector('.enjoy__button');
const mainPage = document.querySelector('.header__link');

function openMenu() {
    document.getElementById('main').hidden = true;
    document.getElementById('menu').hidden = false;
}

function openMain() {
    document.getElementById('main').hidden = false;
    document.getElementById('menu').hidden = true;
}

coffeeCup.addEventListener('click', openMenu);
enjoyBtn.addEventListener('click', openMenu);
mainPage.addEventListener('click', openMain);