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
function displayComment(comment) {
    const commentSection = document.querySelector("section.comments-section");
    const commentDiv = document.createElement("div");

    const nameParagraph = document.createElement("p");
    nameParagraph.textContent = comment.name;
    const timestampParagraph = document.createElement("p");
    timestampParagraph.textContent = comment.timestamp;
    const commentParagraph = document.createElement("p");
    commentParagraph.textContent = comment.commentText;

    commentDiv.appendChild(nameParagraph);
    commentDiv.appendChild(timestampParagraph);
    commentDiv.appendChild(commentParagraph);
    
    commentSection.appendChild(commentDiv);
}
comments.forEach((comment) => displayComment(comment));

document.getElementById("comments-section__form").addEventListener('submit', (event) => {
    event.preventDefault();

    const nameField = document.getElementById("name-field").value;
    const commentField = document.getElementById("comment-field").value;
    const newComment = {
        name: nameField,
        timestamp: new Date().toISOString(),
        commentText: commentField
    };
    comments.push(newComment);

    renderComments();
});

function renderComments() {
    commentDiv.innerHTML = "";
    comments.forEach((comment) => displayComment(comment));

    document.getElementById("name-field").value = "";
    document.getElementById("comment-field").value = "";
}