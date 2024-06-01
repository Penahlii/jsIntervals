const quotes = ["Quote 1", "Quote 2", "Quote 3", "Quote 4", "Quote 5"];

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function changeQuote() {
  const quoteText = document.getElementById("quote-text");
  quoteText.innerText = getRandomQuote();
  document.getElementById("quote-box").style.backgroundColor = getRandomColor();
  document.getElementById("quote-box").style.color = getRandomColor();
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

setInterval(changeQuote, 5000);
window.onload = changeQuote;
