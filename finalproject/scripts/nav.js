// nav.js
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector("#menu-toggle");
  const navLinks = document.querySelector("nav .nav-links");

  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    menuBtn.classList.toggle("open");
  });
});
