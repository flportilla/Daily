//Selectors
const instructionsContainer = document.querySelector('[data-instructions_container]');
const gameContainer = document.querySelector('[data-game_container]');
const playButton = document.querySelector('[data-play_button]');

//Get the words list
let wordsList = []
window.addEventListener('load', async () => {

    const endpoint = "https://gist.githubusercontent.com/flportilla/15434508547bdcdfa58f4314a8704ef0/raw/24510856f6c566d99fcb6e8e740569c4063f2f3f/Words%2520List"

    const wordList =
        await fetch(endpoint)
            .then(blob => blob.json());

    return wordsList = wordList.filter(word => word.length >= 4);
    })


// List of random words .JSON 


function startGame() {
    // Hide the instructions container
    instructionsContainer.style.display = 'none';
    // Show the game container
    gameContainer.style.display = 'flex';
}

//Add event listeners
playButton.addEventListener('click', startGame);



