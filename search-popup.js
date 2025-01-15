// script.js
document.addEventListener("DOMContentLoaded", () => {
    const popupButton = document.getElementById("search-title-btn");
    const popup = document.getElementById("search-popup");
    const closeButton = document.querySelector(".close");
  
    popupButton.addEventListener("click", () => {
        popup.classList.add("show"); // Add the 'show' class to make it visible
      });
    
      closeButton.addEventListener("click", () => {
        popup.classList.remove("show"); // Remove the 'show' class to hide it
      });
    
      window.addEventListener("click", (event) => {
        if (event.target === popup) {
          popup.classList.remove("show"); // Hide if clicking outside the popup
        }
      });
  });
  