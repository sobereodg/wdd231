// spotlights.js

async function displaySpotlights() {
  try {
    const response = await fetch('data/members.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const members = await response.json();

    // Filter only Silver and Gold members
    const premiumMembers = members.filter(member =>
      member.membership === 'Gold' || member.membership === 'Silver'
    );

    // Shuffle the array randomly
    const shuffled = premiumMembers.sort(() => 0.5 - Math.random());

    // Pick 2 or 3 randomly
    const count = Math.floor(Math.random() * 2) + 2; // Either 2 or 3
    const selected = shuffled.slice(0, count);

    const spotlightContainer = document.querySelector('#spotlights');
    spotlightContainer.innerHTML = '';

    selected.forEach(member => {
      const card = document.createElement('div');
      card.classList.add('spotlight-card');

      card.innerHTML = `
        <img src="images/${member.image}" alt="${member.name} logo" loading="lazy">
        <h3>${member.name}</h3>
        <p><strong>Phone:</strong> ${member.phone}</p>
        <p><strong>Address:</strong> ${member.address}</p>
        <a href="${member.website}" target="_blank">${member.website}</a>
        <p class="membership">${member.membership} Member</p>
      `;

      spotlightContainer.appendChild(card);
    });
  } catch (error) {
    console.error('Failed to load spotlights:', error);
  }
}

displaySpotlights();
