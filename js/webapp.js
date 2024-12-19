const facts = [
    "Banging your head against a wall burns 150 calories an hour.",
    "In Switzerland it is illegal to own just one guinea pig.",
    "Pteronophobia is the fear of being tickled by feathers.",
    "Snails can sleep for three years.",
    "It is impossible to lick your elbow.",
    "There are more doors than wheels in the world",
    "Baseball players are statistically the best looking people on the planet." // Add more facts here
];

const factElement = document.getElementById('fact');
const generateButton = document.getElementById('generate');

function generateFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    factElement.textContent = facts[randomIndex];
}

generateButton.addEventListener('click', generateFact);
// Display a fact on initial load
generateFact();