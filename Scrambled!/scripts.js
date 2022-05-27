// Selectors
const instructionsContainer = document.querySelector('[data-instructions_container]');
const gameContainer = document.querySelector('[data-game_container]');
const playButton = document.querySelector('[data-play_button]');
const wordBox = document.querySelector('[data-word_box]');
const inputBox = document.querySelector('[data-input_box]');
const submitButton = document.querySelector('[data-submit_button]');
const scoreRecord = document.querySelector('[data-score]')
const titleInformation = document.querySelector('[data-title_information]')

// Fixed values
let score = 0
let intervalId1;
let intervalId2;
let chances = 3;

// 'words' contains the answer word and the shuffled word after the user clicks on the play button
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
function randomWordGenerator() {

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
    return words.answer = randomWordAnswer, words.challenge = randomWordChallenge, clearInterval(intervalId1), clearInterval(intervalId2)
};

// Function to Show/hide instructions
function startGame() {
    
    // Hide the instructions container
    instructionsContainer.style.display = 'none';
    randomWordGenerator()

    // Show the game container
    gameContainer.style.display = 'flex';
}

//function to compare the user input with the answer
function checkGuess(submitAction) {

    // Prevent the submit button to reload the page
    submitAction.preventDefault();

    // Get the user input
    const guess = inputBox.value.toUpperCase();

    // Check if the user input is the same as the answer
    if (guess === words.answer.join('')) {

        //Add the text 'Good job' before the next word is generated
        titleInformation.textContent = 'Good job!'

        // If it is correct, add 1 to the score
        score++

        // Update the score
        scoreRecord.textContent = `Score: ${score}`

        // Clear the input box after two seconds, generate a new word and changes the title information to 'Here is the next word'
        intervalId1 = setTimeout(() => {
            chances = 3;
            randomWordGenerator()
            inputBox.value = ''
            titleInformation.textContent = 'Here is the next word'

        }, 2000)

    }
    else {

        // If it is incorrect, substract 1 to the score
        score--

        // If it is incorrect, substract 1 to the chances
        chances--

        // Update the score that shows in the screen
        scoreRecord.textContent = `Score: ${score}`

        // Show a message for incorrect guesses
        titleInformation.textContent = `Incorrect! You have ${chances} chances left`

        //if the chances reach 0, restart the game
        if (chances <= 0) {

            // Add the game over text
            titleInformation.innerHTML = `
            <span>
                Incorrect! You are out of chances.
            </span>
            <span>
                The word was: ${words.answer.join('')}
            </span>`

            // Resets everything and show the instructions again
            intervalId2 = setTimeout(() => {
                score = 0;
                chances = 3;
                scoreRecord.textContent = `Score: ${score}`
                instructionsContainer.style.display = 'flex';
                gameContainer.style.display = 'none';
                inputBox.value = ''
                titleInformation.textContent = 'Here is the first word'

            }, 3000)
        }

    }
}

//Add event listeners
playButton.addEventListener('click', startGame);
submitButton.addEventListener('click', checkGuess);



