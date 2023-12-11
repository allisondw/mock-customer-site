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
    let showsSection = document.querySelector("section.shows");
    let showsDiv = document.createElement("div");
    showsDiv.classList.add("shows__container");
    let showsHeader = document.createElement("h2");
    showsHeader.classList.add("shows__title")
    showsHeader.innerText = "Shows";
    showsSection.appendChild(showsHeader);

    showsArr.forEach((show) => {
        let showCard = document.createElement("article");
        showCard.classList.add("shows__card");
        let showInfoDiv = document.createElement("div");
        showInfoDiv.classList.add("shows__card--info-div")
        
        let dateTitle = document.createElement("h5");
        dateTitle.classList.add("shows__card-label--date")
        dateTitle.innerText = "date";
        
        let dateBody = document.createElement("p");
        dateBody.classList.add("shows__card-body--date");
        dateBody.innerText = show.date;


        let venueTitle = document.createElement("h5");
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

        let dateDiv = document.createElement("div");
        dateDiv.classList.add("shows__card--inner-div");

        let venueDiv = document.createElement("div");
        venueDiv.classList.add("shows__card--inner-div");

        let locationDiv = document.createElement("div");
        locationDiv.classList.add("shows__card--inner-div");

        if(show == showsArr[0]) {
            dateTitle.classList.add("label__first-row");
            venueTitle.classList.add("label__first-row");
            locationTitle.classList.add("label__first-row");
        };
        
        dateDiv.appendChild(dateTitle);
        dateDiv.appendChild(dateBody);

        venueDiv.appendChild(venueTitle);
        venueDiv.appendChild(venueBody);

        locationDiv.appendChild(locationTitle);
        locationDiv.appendChild(locationBody);

        showInfoDiv.appendChild(dateDiv);
        showInfoDiv.appendChild(venueDiv);
        showInfoDiv.appendChild(locationDiv);

        showCard.appendChild(showInfoDiv);
        showCard.appendChild(buyTickets);

        showsDiv.appendChild(showCard);


        showsSection.appendChild(showsDiv);
    });
};

const cards = document.querySelectorAll('article.shows__card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        cards.forEach(card => card.classList.remove('shows__card--selected'));
        card.classList.add('shows__card--selected');
    });
});

