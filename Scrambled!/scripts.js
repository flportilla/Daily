//Selectors
const instructionsContainer = document.querySelector('[data-instructions_container]');
const gameContainer = document.querySelector('[data-game_container]');
const playButton = document.querySelector('[data-play_button]');
const wordBox = document.querySelector('[data-word_box]');

// 'words' contain the answer word and the shuffled word after the user clicks on the play button
const words = {
    answer: '',
    challenge: '',
}

//Get the words list
let wordsList;
window.addEventListener('load', async () => {

    const endpoint = "https://gist.githubusercontent.com/flportilla/15434508547bdcdfa58f4314a8704ef0/raw/24510856f6c566d99fcb6e8e740569c4063f2f3f/Words%2520List"

    const wordList =
        await fetch(endpoint)
            .then(blob => blob.json());

    return wordsList = wordList.filter(word => word.length >= 4);


})

// Function to generate random words and display them
function randomWord() {

    // Get a random word from the words list
    const randomIndex = Math.floor(Math.random() * wordsList.length);

    // Split the word into an array of letters and save it to a variable to know the answer
    const randomWordAnswer = wordsList[randomIndex]
        .toUpperCase()
        .split('');
    // Copy the array to a new array to still have the answer, and now shuffle it
    const randomWordChallenge = randomWordAnswer
        .slice()
        .sort(() => Math.random() - 0.5)
        .join('');

    wordBox.textContent = randomWordChallenge;

    // Save the answer and the challenge to the words object
    return words.answer = randomWordAnswer, words.challenge = randomWordChallenge;
};






// Function to Show/hide instructions
function startGame() {
    // Hide the instructions container
    // @ts-ignore
    instructionsContainer.style.display = 'none';
    randomWord()
    // Show the game container
    // @ts-ignore
    gameContainer.style.display = 'flex';
}

//Add event listeners
playButton.addEventListener('click', startGame);



