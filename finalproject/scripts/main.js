// main.js (ES Module)
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector("#menu-toggle");
  const nav = document.querySelector("nav ul");

  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
    menuToggle.classList.toggle('open')
  });

const user = localStorage.getItem("username");
if (user) {
  const welcome = document.createElement("p");
  welcome.textContent = `Welcome back, ${user}! 🎧`;
  document.querySelector(".hero").appendChild(welcome);
}

  // Fetch artist data
  fetch("data/artists.json")
    .then(res => res.json())
    .then(artists => {
      const grid = document.querySelector("#artist-grid");
      artists.slice(0, 4).forEach(artist => {
        const div = document.createElement("div");
        div.classList.add("artist-card");
        div.innerHTML = `
          <img src="${artist.image}" alt="${artist.name}" loading="lazy" />
          <h3>${artist.name}</h3>
          <p>${artist.genre}</p>
        `;
        grid.appendChild(div);
      });
    })
    .catch(err => console.error("Error loading artists:", err));
});
