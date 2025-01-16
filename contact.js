// Select relevant elements
const contactLink = document.querySelector('a[href="#"]'); // Ensure correct selector
const popupOverlay = document.createElement('div');
const formContainer = document.querySelector('.form-container');

// Create and configure the popup overlay
popupOverlay.className = 'popup-overlay';
popupOverlay.appendChild(formContainer);
document.body.appendChild(popupOverlay);

// Show popup on "Contact Us" click
contactLink.addEventListener('click', (e) => {
  e.preventDefault(); // Prevent default link behavior
  popupOverlay.classList.add('active'); // Show the overlay
});

// Hide popup on clicking outside or pressing Escape
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
