// get elements

const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

// Functions

// show loading

function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

// hide loading
function complete() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}

// Show new quote

function newQuote(apiQuotes) {
  // Pick a random quote from apiQuotes array

  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

  //   Check if Author field is blank and replace it with 'Unknown'

  //   if (!quote.author) {
  //     authorText.textContent = "Unknown";
  //   } else {
  //     authorText.textContent = quote.author;
  //   }

  //   using ternary insted of ifelse
  authorText.textContent = !quote.author ? "Unknownnnn" : quote.author;

  //   Check quote length to determine styling

  if (quote.text.length > 50) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  // set quote, hide loader
  complete();
  quoteText.textContent = quote.text;
}

// Get Quotes from API

async function getQuotes() {
  loading();
  const apiUrl = "https://type.fit/api/quotes";

  try {
    const response = await fetch(apiUrl);
    const apiQuotes = await response.json();

    newQuote(apiQuotes);
  } catch (error) {
    // Catch error/s here
  }
}

// Tweet Quote

function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;

  window.open(twitterUrl, "_blank");
}

// add event listeners

newQuoteBtn.addEventListener("click", getQuotes);
twitterBtn.addEventListener("click", tweetQuote);

// On Load
getQuotes();

// Use the localQuotes instead
// newQuote(localQuotes);
