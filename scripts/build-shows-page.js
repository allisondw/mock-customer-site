let showsArr = [];

async function displayShows() {
    try {
        showsArr = await myBandSiteApi.getShows();
        console.log(showsArr)
    } catch (error) {
        console.log(error);
    };
    renderShows();
}
displayShows();


function convertToFormattedDate(timestamp) {
    const date = new Date(timestamp);

    const dayOfWeek = date.toLocaleString('en-US', { weekday: 'short', timeZone: 'UTC' }); 
    const month = date.toLocaleString('en-US', { month: 'short', timeZone: 'UTC' });
    const day = date.getUTCDate();
    const year = date.getUTCFullYear();

    const formattedDay = day < 10 ? `0${day}` : day;

    return `${dayOfWeek} ${month} ${formattedDay} ${year}`;
}

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
        dateBody.innerText = convertToFormattedDate(show.date);


        let venueTitle = document.createElement("h5");
        venueTitle.classList.add("shows__card-label--venue");
        venueTitle.innerText = "venue";
        let venueBody = document.createElement("p");
        venueBody.classList.add("shows__card-body--venue");
        venueBody.innerText = show.place;


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

