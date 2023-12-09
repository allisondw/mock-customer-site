// const form = document.getElementById("#comments-form");
// form.addEventListener('submit', function(e) {
//     e.preventDefault();
//     console.log(e.target.name-field.value);
//     console.log(e.target.comment-field.value);
// });

const comments = [
    { name: "Connor Walton", timestamp: "02/17/2021", commentText: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains." },
    { name: "Emilie Beach", timestamp: "01/09/2021", commentText: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day." },
    { name: "Miles Acosta", timestamp: "12/20/2020", commentText: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough." }
];
renderComments();

function displayComment(comment, commentCardEl) {

    let nameEl = document.createElement("h5");
    nameEl.textContent = comment.name;
    nameEl.classList.add("comments-section__name")
    let timestampEl = document.createElement("p");
    timestampEl.textContent = comment.timestamp;
    timestampEl.classList.add("comments-section__timestamp")
    let commentEl = document.createElement("p");
    commentEl.textContent = comment.commentText;
    commentEl.classList.add("comments-section__body")

    commentCardEl.appendChild(nameEl);
    commentCardEl.appendChild(timestampEl);
    commentCardEl.appendChild(commentEl); 
};


document.getElementById("submit-section__form").addEventListener('submit', (event) => {
    event.preventDefault();

    let nameField = document.getElementById("name-field").value;
    let commentField = document.getElementById("comment-field").value;
    let newComment = {
        name: nameField,
        timestamp: new Date().toISOString(),
        commentText: commentField
    };
    comments.unshift(newComment);

    renderComments();
});

function renderComments() {
    let commentSection = document.querySelector("section.comments-section");
    commentSection.innerText = "";

    comments.forEach((comment) => {
        let commentCard = document.createElement("article");
        commentCard.classList.add("comments-section__post");
        
        displayComment(comment, commentCard);
        commentSection.appendChild(commentCard);
    })

    document.getElementById("name-field").value = "";
    document.getElementById("comment-field").value = "";
}
