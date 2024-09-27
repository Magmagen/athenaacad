const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

const cards = document.querySelectorAll('.services__card');

cards.forEach((card) => {
  card.addEventListener('click', () => {
    window.location.href = 'signup.html';
  });
});