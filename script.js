// Show new quote

function newQuote(apiQuotes) {
  // Pick a random quote from apiQuotes array

  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  console.log(quote);
}

// Get Quotes from API

async function getQuotes() {
  const apiUrl = "https://type.fit/api/quotes";

  try {
    const response = await fetch(apiUrl);
    const apiQuotes = await response.json();

    newQuote(apiQuotes);
  } catch (error) {
    // Catch error/s here
  }
}

// On Load
getQuotes();

// Use the localQuotes instead
// newQuote(localQuotes);
