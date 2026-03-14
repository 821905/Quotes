let quote = document.querySelector(".quote");
let author = document.querySelector(".author");
let btn = document.querySelector(".btn");
let url = "https://dummyjson.com/quotes";
let quotes = [];

btn.addEventListener("click", setQuote);

function setQuote() {
  let index = Math.floor(Math.random() * 30);
  quote.innerHTML = quotes[index].quote;
  author.innerHTML = quotes[index].author;
}

async function getQuote() {
  let response = await fetch(url);
  let data = await response.json();
  quotes = data.quotes;
  console.log(data);
}

getQuote();
