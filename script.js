// script.js
const quotes = [
    "La vida es lo que pasa mientras estás ocupado haciendo otros planes. - John Lennon",
    "El éxito es la suma de pequeños esfuerzos repetidos día tras día. - Robert Collier",
    "No cuentes los días, haz que los días cuenten. - Muhammad Ali",
    "La única forma de hacer un gran trabajo es amar lo que haces. - Steve Jobs",
    "La vida es un 10% lo que me sucede y un 90% cómo reacciono a ello. - Charles R. Swindoll"
];

const quoteElement = document.getElementById('quote');

function showNewQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
}

document.getElementById('newQuoteButton').addEventListener('click', showNewQuote);
