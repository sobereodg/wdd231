const membershipLevels = [
    {
        levelName: 'Non Profit',
        yearlyCost: 0,
        levelNumber: 0,
        numberOfPositionsAvaialble: -1,
        benefits: [
            'Free membership for nonprofits. Perks include event access and recognition'
        ]
    },
    {
        levelName: 'Bronze',
        yearlyCost: 500,
        levelNumber: 1,
        numberOfPositionsAvaialble: -1,
        benefits: [
            'Low-cost entry. Includes newsletters and limited event access',
        ]
    },
    {
        levelName: 'Silver',
        yearlyCost: 5000,
        levelNumber: 2,
        numberOfPositionsAvaialble: 50,
        benefits: [
            'Silver: Includes training access, discounts, and spotlight ads'
        ]
    },
    {
        levelName: 'Gold',
        yearlyCost: 15000,
        levelNumber: 3,
        numberOfPositionsAvaialble: 12,
        benefits: [
            'All Silver benefits + premium spotlight, ads, VIP invites',
        ]
    }
]

const timestamp = document.querySelector("#timestamp");

timestamp.value = Date.now();

const html = document.querySelector('html');
const dialog = document.querySelector("dialog");

const npMembershipButton = document.querySelector("#np-membership-button");
const bronzeMembershipButton = document.querySelector("#bronze-membership-button");
const silverMembershipButton = document.querySelector("#silver-membership-button");
const goldMembershipButton = document.querySelector("#gold-membership-button");

npMembershipButton.addEventListener('click', () => {
    getMembershipLevelDetailForLevelNumber(0);
});

bronzeMembershipButton.addEventListener('click', () => {
    getMembershipLevelDetailForLevelNumber(1);
});

silverMembershipButton.addEventListener('click', () => {
    getMembershipLevelDetailForLevelNumber(2);
});

goldMembershipButton.addEventListener('click', () => {
    getMembershipLevelDetailForLevelNumber(3);
});

function getMembershipLevelDetailForLevelNumber(levelNumber) {
    console.log(levelNumber);
    const selectedLevelArray = membershipLevels.filter((membershipLevelDetails) => membershipLevelDetails.levelNumber == levelNumber);

    console.log(selectedLevelArray);

    if (selectedLevelArray.length > 0) {
        displayMembershpLevelDetailsModal(selectedLevelArray[0]); 
    }
}

function conditionalCloseDialog(event) {

    const bondingRect = dialog.getBoundingClientRect();

    if ((event.x < bondingRect.left || event.x > bondingRect.right) || (event.y < bondingRect.top || event.y > bondingRect.bottom)) {
        dialog.close();
        html.removeEventListener('click', conditionalCloseDialog, true);
    }
}

function displayMembershpLevelDetailsModal(membershipDetail) {
    html.addEventListener('click', conditionalCloseDialog, true);
    
    dialog.innerHTML = "";

    const closeButton = document.createElement("button");
    closeButton.id = "close-dialog-button";
    closeButton.textContent = "X";

    closeButton.addEventListener('click', function() {
        dialog.close();
    });

    const dialogHeader = document.createElement("h2");
    dialogHeader.textContent = membershipDetail.levelName;
    dialogHeader.appendChild(closeButton);

    const numberOfSpots = document.createElement("h3");

    if (membershipDetail.numberOfPositionsAvaialble == -1) {
        numberOfSpots.textContent = "Membership Limit: None"
    } else {
        numberOfSpots.textContent = `Membership Limit: ${membershipDetail.numberOfPositionsAvaialble}`  
    }

    const p1 = document.createElement("p");

    if (membershipDetail.yearlyCost == 0) {
        p1.textContent = `Yearly Membershp Cost: None`;
    } else {
        p1.textContent = `Yearly Membershp Cost: \$${membershipDetail.yearlyCost}.00`;
    }

    dialog.appendChild(dialogHeader);
    dialog.appendChild(numberOfSpots);
    dialog.appendChild(p1);

    membershipDetail.benefits.forEach(benefit => {
        const p = document.createElement("p");
        p.className = "dialog-paragraphs";
        p.textContent = benefit

        dialog.appendChild(p);    
    });

    dialog.showModal();
}