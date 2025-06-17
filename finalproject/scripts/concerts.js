export async function fetchConcerts() {
  try {
    const res = await fetch("data/concerts.json");
    return await res.json();
  } catch (err) {
    console.error(err);
    return [];
  }
}

function createConcertCard(c) {
  return `
    <div class="card">
      <img src="${c.poster}" alt="${c.artist}" loading="lazy">
      <h3>${c.artist}</h3>
      <p>${c.date} — ${c.venue}</p>
      <p>${c.city}, ${c.country}</p>
      <button data-artist="${c.artist}">Details</button>
    </div>`;
}

function showDetails(con) {
  const dlg = document.createElement("dialog");
  dlg.innerHTML = `
    <h2>${con.artist}</h2>
    <p>${con.date} at ${con.venue}, ${con.city}</p>
    <p>${con.details}</p>
    <button>Close</button>`;
  document.body.appendChild(dlg);
  dlg.querySelector("button").addEventListener("click", () => dlg.close());
  dlg.showModal();
}

async function init() {
  const cons = await fetchConcerts();
  const cont = document.getElementById("concert-list");
  cont.innerHTML = cons.map(createConcertCard).join("");
  cons.forEach(c => {
    document.querySelector(`[data-artist="${c.artist}"]`)
      .addEventListener("click", () => showDetails(c));
  });
}

init();
