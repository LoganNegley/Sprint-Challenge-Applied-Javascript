// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardsPromise = axios.get(
  "https://lambda-times-backend.herokuapp.com/articles"
);

cardsPromise.then(response => {
  console.log(response.data.articles);
  const info = response.data.articles;
  cardContainer.appendChild(newCard(info));
});

const cardContainer = document.querySelector(".cards-container");
function newCard(obj) {
  // Creating Elements
  const card = document.createElement("div");
  const headline = document.createElement("div");
  const author = document.createElement("div");
  const imgContainer = document.createElement("div");
  const image = document.createElement("img");
  const byAuthor = document.createElement("span");

  // Structure
  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgContainer);
  imgContainer.appendChild(image);
  author.appendChild(byAuthor);

  // Classes
  card.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imgContainer.classList.add("img-container");

  // Added textContent
  headline.textContent = obj.bootstrap[0].headline;
  author.textContent = obj.bootstrap[0].authorName;
  image.src = obj.bootstrap[0].authorPhoto;
  return card;
}
