

let comments = [];
async function displayComments() {
    try {
        comments = await myBandSiteApi.getComments();
        console.log(comments);
    } catch (error) {
        console.log(error);
    };
    renderComments();
}
displayComments();

document.getElementById("submit-section__form").addEventListener('submit', (event) => {
    event.preventDefault();
    // this is where the postComment would go, need to figure out how to build
    let nameFieldValue = document.getElementById("name-field").value;
    let commentFieldValue = document.getElementById("comment-field").value;
    let newComment = {
        name: nameFieldValue,
        timestamp: new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
          }),
        commentText: commentFieldValue
    };
    comments.unshift(newComment);

    renderComments();
});

function convertTimestampToDate(timestamp) {
    const date = new Date(timestamp);
    const month = date.getMonth() + 1; 
    const day = date.getDate();
    const year = date.getFullYear();

    const formattedMonth = month < 10 ? `0${month}` : month;
    const formattedDay = day < 10 ? `0${day}` : day;

    return `${formattedMonth}/${formattedDay}/${year}`;
};

function formatComment(commentObj, commentCardEl) {
    let userImg = document.createElement("img");
    userImg.classList.add("comments-section__user-pic");
    let nameEl = document.createElement("h5");
    nameEl.textContent = commentObj.name;
    nameEl.classList.add("comments-section__name")
    let timestampEl = document.createElement("p");
    let commentTopRow = document.createElement("div");
    commentTopRow.classList.add("comments-section__post--top-row");
    timestampEl.textContent = convertTimestampToDate(commentObj.timestamp);
    timestampEl.classList.add("comments-section__timestamp")
    let commentEl = document.createElement("p");
    commentEl.textContent = commentObj.comment;
    commentEl.classList.add("comments-section__body")
    let commentTextEl = document.createElement("div");
    commentTextEl.classList.add("comments-section__post--div");

    commentTopRow.appendChild(nameEl);
    commentTopRow.appendChild(timestampEl);
    
    commentTextEl.appendChild(commentTopRow);
    commentTextEl.appendChild(commentEl); 
    
    commentCardEl.appendChild(userImg);
    commentCardEl.appendChild(commentTextEl)
};

function renderComments() {
    let commentSection = document.querySelector("section.comments-section");
    commentSection.innerText = "";

    comments.forEach((comment) => {
        let commentCard = document.createElement("article");
        commentCard.classList.add("comments-section__post");

        
        formatComment(comment, commentCard);
        commentSection.appendChild(commentCard);
    })

    document.getElementById("name-field").value = "";
    document.getElementById("comment-field").value = "";
};

