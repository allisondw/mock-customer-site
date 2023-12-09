const showsArr = [
    { date: "Mon Sept 06 2021", venue: "Ronald Lane", location: "San Francisco" },
    { date: "Tue Sept 21 2021", venue: "Pier 3 East", location: "San Francisco" },
    { date: "Fri Oct 15 2021", venue: "View Lounge", location: "San Francisco" },
    { date: "Sat Nov 06 2021", venue: "Hyatt Agency", location: "San Francisco" },
    { date: "Fri Nov 26 2021", venue: "Moscow Center", location: "San Francisco" },
    { date: "Wed Dec 15 2021", venue: "Press Club", location: "San Francisco" }
];


renderShows();

function renderShows() {
    const showsSection = document.querySelector("section.shows");

    showsArr.forEach((show) => {
        let showCard = document.createElement("article");
        showCard.classList.add("shows__card");

        let dateTitle = document.createElement("h5");
        dateTitle.classList.add("shows__card-label--date")
        dateTitle.innerText = "date";

        let dateBody = document.createElement("p");
        dateBody.classList.add("shows__card-body--date");
        dateBody.innerText = show.date;

        let venueTitle = document.createElement("h5")
        venueTitle.classList.add("shows__card-label--venue");
        venueTitle.innerText = "venue";

        let venueBody = document.createElement("p");
        venueBody.classList.add("shows__card-body--venue");
        venueBody.innerText = show.venue;

        let locationTitle = document.createElement("h5")
        locationTitle.classList.add("shows__card-label--location");
        locationTitle.innerText = "location";

        let locationBody = document.createElement("p");
        locationBody.classList.add("shows__card-body--location");
        locationBody.innerText = show.location;

        let buyTickets = document.createElement("button");
        buyTickets.classList.add("button");
        buyTickets.innerText = "buy tickets";

        let divider = document.createElement("hr");
        divider.classList.add("shows__card--divider");
        
        showCard.appendChild(dateTitle);
        showCard.appendChild(dateBody);
        showCard.appendChild(venueTitle);
        showCard.appendChild(venueBody);
        showCard.appendChild(locationTitle);
        showCard.appendChild(locationBody);
        showCard.appendChild(buyTickets);
        showCard.appendChild(divider);

        // displayShowCard(show, showCard);
        
        
        showsSection.appendChild(showCard);
    });
    // showsArr.forEach((show) => {

    
};


function displayShowCard(show, showCardEl) {

}

