const menu = document.querySelector('.menu');
const menuItem = document.querySelectorAll('.menu_item');
const hamburger = document.querySelector('.hamburger');
const mainPage = document.querySelector('.root');
const headerBtns = document.querySelectorAll('.scroll');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger_active');
    menu.classList.toggle('menu_active');
    mainPage.classList.toggle('no-scroll');
});

headerBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('menu_active');
      mainPage.classList.toggle('no-scroll');
    });
  });