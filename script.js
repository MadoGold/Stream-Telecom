const openPopup = document.getElementById('TwoFactorAuth');
const closePopup = document.querySelector('.popup__close');
const popup = document.querySelector('.popup');
const popupBody = document.querySelector('.popup__body');

openPopup.addEventListener('click', (e) => {
  e.preventDefault();
  popup.classList.add('open');
});

closePopup.addEventListener('click', (e) => {
  e.preventDefault();
  popup.classList.remove('open');
});

popup.addEventListener('click', (e) => {
  e.preventDefault();
  popup.classList.remove('open');
});

popupBody.addEventListener('click', (e) => {
  e.stopPropagation();
});

