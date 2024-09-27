const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

const parallax = document.getElementById('parallax');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  parallax.style.backgroundPositionY = `${scrollPosition * 0.1}px`;
});

const mainContent = document.querySelector('.main__content');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  mainContent.style.transform = `translateY(${scrollPosition * 0.9}px)`;
});

const imgContainer = document.querySelector('.main__img--container');
const img = imgContainer.querySelector('img');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  imgContainer.style.transform = `translateY(${scrollPosition * 0.9}px)`;
});