//Selectors
const instructionsContainer = document.querySelector('[data-instructions_container]');
const gameContainer = document.querySelector('[data-game_container]');
const playButton = document.querySelector('[data-play_button]');




// List of random words .JSON https://raw.githubusercontent.com/bevacqua/correcthorse/master/wordlist.json


function startGame() {
    // Hide the instructions container
    instructionsContainer.style.display = 'none';
    // Show the game container
    gameContainer.style.display = 'flex';
}

//Add event listeners
playButton.addEventListener('click', startGame);