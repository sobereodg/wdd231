document.addEventListener("DOMContentLoaded", () => {
    const menubtn = document.getElementById("menubtn");
    const navLinks = document.getElementById("navLinks");

    menubtn.addEventListener("click", () => {
        navLinks.classList.toggle("open");
    });

    // Optional: Close nav when a link is clicked (mobile)
    document.querySelectorAll("#navLinks a").forEach(link =>
        link.addEventListener("click", () => navLinks.classList.remove("open"))
    );
});
