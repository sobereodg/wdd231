document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  toggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
});
