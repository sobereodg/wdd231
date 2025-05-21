const hamburgerElement = document.querySelector('#menu-toggle');
const navElement = document.querySelector('.menulinks');

hamburgerElement.addEventListener('click', () => {
  navElement.classList.toggle('open');
  hamburgerElement.classList.toggle('open');
});

document.addEventListener("DOMContentLoaded", () => {
  const directory = document.getElementById("directory");
  const gridButton = document.getElementById("gridView");
  const listButton = document.getElementById("listView");

  async function getMembers() {
    try {
      const response = await fetch("data/members.json");
      const data = await response.json();
      displayMembers(data);
    } catch (error) {
      console.error("Error fetching members:", error);
    }
  }

  function displayMembers(members) {
    directory.innerHTML = ""; // clear previous content

    members.forEach(member => {
      const card = document.createElement("article");
      card.classList.add("member-card");

      card.innerHTML = `
        <img src="images/${member.image}" alt="${member.name} logo">
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <p><a href="${member.website}" target="_blank">Visit Website</a></p>
        <p class="level">Membership Level: ${getMembershipLevel(member.membership)}</p>
      `;

      directory.appendChild(card);
    });
  }

  function getMembershipLevel(level) {
    switch (level) {
      case 1: return "Member";
      case 2: return "Silver";
      case 3: return "Gold";
      default: return "Unknown";
    }
  }

  // View toggles
  gridButton.addEventListener("click", () => {
    directory.classList.add("grid");
    directory.classList.remove("list");
  });

  listButton.addEventListener("click", () => {
    directory.classList.add("list");
    directory.classList.remove("grid");
  });

  // Load the members on page load
  getMembers();

  // Show last modified date
  document.getElementById("currentyear").textContent = new Date().getFullYear();

  document.getElementById("lastModified").textContent =
  "Last Modification: " + document.lastModified;
});
