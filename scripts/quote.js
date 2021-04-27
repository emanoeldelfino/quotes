const quoteElem = document.querySelector('div#quote');
const authorElem = document.querySelector('div#author');

fetch("https://api.quotable.io/random")
  .then((response) => response.json())
  .then((data) => {
    quoteElem.innerText = data.content;
    authorElem.innerText = data.author;
  });
