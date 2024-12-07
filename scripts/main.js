document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const mainNav = document.querySelector(".main-nav");
  const darkModeBtn = document.getElementById("toggle-dark-mode");

  // Mobile nav toggle
  burger.addEventListener("click", () => {
    mainNav.classList.toggle("open");
  });

  // Dark mode toggle
  darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
});
