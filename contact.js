
const contactLink = document.querySelector('a[href="#"]');
const popupOverlay = document.createElement('div');
const formContainer = document.querySelector('.form-container');


popupOverlay.className = 'popup-overlay';
popupOverlay.appendChild(formContainer);
document.body.appendChild(popupOverlay);


contactLink.addEventListener('click', (e) => {
  e.preventDefault();
  popupOverlay.classList.add('active');
});


popupOverlay.addEventListener('click', (e) => {
  if (e.target === popupOverlay) {
    popupOverlay.classList.remove('active');
  }
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    popupOverlay.classList.remove('active');
  }
});
