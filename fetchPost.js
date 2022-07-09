const api_url = "https://jsonplaceholder.typicode.com/posts";
fetch(api_url)
    .then((res) => res.json())
    .then(postData => {
        fetchData(postData);
        console.log(postData)
    })
    .catch((error) => {
        console.log(error);
    })

const showData = document.getElementById('showData');
const fetchData = (data) => {
    for (let i = 0; i < data.length; i++) {
        // Card
        let card = document.createElement("div")
        card.classList.add("card");

        // Card-body inside Card
        let cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        // User Id
        let userId = document.createElement("h2");
        userId.classList.add("card-title");

        // Card-title inside card-body
        let userTitle = document.createElement("h4");

        // card-text inside card-body
        let userBody = document.createElement("p");


        userId.innerHTML = data[i].id;
        cardBody.appendChild(userId);

        userTitle.innerHTML = data[i].title;
        userTitle.classList.add("card-title");
        cardBody.appendChild(userTitle);

        userBody.innerHTML = data[i].body;
        userBody.classList.add("card-text");
        cardBody.appendChild(userBody);

        card.appendChild(cardBody)
        showData.appendChild(card)
    }
}

// Fetching comments Data
const comments_api = " https://jsonplaceholder.typicode.com/comments";
fetch(comments_api)
    .then((res) => res.json())
    .then(comments => {
        commentsData(comments);
        console.log(comments)
    })
    .catch((error) => {
        console.log(error);
    })

const commentsCard = document.getElementById("commentData")
const commentsData = (comments) =>{
    for (let i = 0; i < comments.length; i++) {
         // Card
         let card = document.createElement("div")
         card.classList.add("card");
 
         // Card-body inside Card
         let cardBody = document.createElement("div");
         cardBody.classList.add("card-body");
 
         // User Id
         let userId = document.createElement("h2");
         userId.classList.add("card-title");
 
         // Card-title inside card-body
         let userName = document.createElement("h4");
         
 
         // card-text inside card-body
         let userEmail = document.createElement("p");

         // card-text inside card-body
         let userBody = document.createElement("p");
 
 
         userId.innerHTML = comments[i].id;
         cardBody.appendChild(userId);
         
 
         userName.innerHTML = comments[i].name;
         userName.classList.add("card-title");
         cardBody.appendChild(userName);
 
         userEmail.innerHTML = comments[i].email;
         userEmail.classList.add("card-text");
         cardBody.appendChild(userEmail);

         userBody.innerHTML = comments[i].body;
         userBody.classList.add("card-text");
         cardBody.appendChild(userBody);
 
         card.appendChild(cardBody)
         commentsCard.appendChild(card)
    }
}


