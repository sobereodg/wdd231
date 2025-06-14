document.addEventListener("DOMContentLoaded", () => {
  fetch('data/discover.json')
    .then(res => res.json())
    .then(data => {
      const container = document.querySelector('.grid-container');
      data.forEach((item, index) => {
        const card = document.createElement('section');
        card.classList.add(`card${index + 1}`);

        card.innerHTML = `
          <h2>${item.name}</h2>
          <figure><img src="${item.image}" alt="${item.name}" loading="lazy"></figure>
          <address>${item.address}</address>
          <p>${item.description}</p>
          <button>Learn more</button>
        `;

        container.appendChild(card);
      });
    });
});


// Visit message logic
const visitMessage = document.getElementById("visit-message");
const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
  visitMessage.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const daysPassed = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
  visitMessage.textContent = daysPassed < 1
    ? "Back so soon! Awesome!"
    : `You last visited ${daysPassed} day${daysPassed === 1 ? '' : 's'} ago.`;
}

localStorage.setItem("lastVisit", now);
