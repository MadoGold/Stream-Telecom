const openPopup = document.getElementById('TwoFactorAuth');
const closePopup = document.querySelector('.popup__close');
const popup = document.querySelector('.popup');

openPopup.addEventListener('click', (e) => {
  e.preventDefault();
  popup.classList.add('open');
});

closePopup.addEventListener('click', (e) => {
  e.preventDefault();
  popup.classList.remove('open');
});

