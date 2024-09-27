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

const registerBtn = document.getElementById('register-btn');

registerBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const formData = new FormData(document.getElementById('register-form'));

  try {
    emailjs.send('your_service_id', 'your_template_id', Object.fromEntries(formData), 'your_user_id')
      .then((response) => {
        console.log('Email sent successfully:', response);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  } catch (error) {
    console.error('Error:', error);
  }
});