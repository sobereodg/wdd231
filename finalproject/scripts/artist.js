const data = [
  { name: "Wizkid", genre: "Afropop", photo: "images/wizkid.jpg", listeners: "20M" },
  { name: "Davido", genre: "Afrobeats", photo: "images/davido.jpg", listeners: "18M" },
  { name: "Tems", genre: "Soul/Afrobeats", photo: "images/tems.jpg", listeners: "12M" },
  // ... add more to reach 15
];

function createArtistCard(a) {
  return `
    <div class="card">
      <img src="${a.photo}" alt="${a.name}" loading="lazy">
      <h3>${a.name}</h3>
      <p>Genre: ${a.genre}</p>
      <p>Listeners: ${a.listeners}</p>
      <button data-name="${a.name}">Details</button>
    </div>`;
}

function openModal(artist) {
  const dlg = document.createElement("dialog");
  dlg.innerHTML = `
    <h2>${artist.name}</h2>
    <p>Genre: ${artist.genre}</p>
    <p>Monthly Listeners: ${artist.listeners}</p>
    <button>Close</button>`;
  document.body.appendChild(dlg);
  dlg.querySelector("button").addEventListener("click", () => dlg.close());
  dlg.showModal();
}

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("artist-list");
  container.innerHTML = data.map(createArtistCard).join("");
  container.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", e => {
      const name = e.target.dataset.name;
      openModal(data.find(a => a.name === name));
    });
  });
});
