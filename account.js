document.addEventListener("DOMContentLoaded", () => {
    const accountBtn = document.getElementById("account-btn");
    const accountMenu = document.getElementById("account-menu");
  
    // Toggle menu on click
    accountBtn.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent default anchor behavior
      accountMenu.style.display =
        accountMenu.style.display === "block" ? "none" : "block";
    });
  
    // Close menu when clicking anywhere else or scrolling
    document.addEventListener("click", (event) => {
      if (!accountMenu.contains(event.target) && !accountBtn.contains(event.target)) {
        accountMenu.style.display = "none";
      }
    });
  
    window.addEventListener("scroll", () => {
      accountMenu.style.display = "none";
    });
  });
  