//Selectors
const startGameButton = document.getElementById('start_game_button');
const instructionsContainer = document.getElementById('instructions_container');
const clicks_counter = document.getElementById('clicks_counter')
const gameContainer = document.getElementById('game_container');


//Variables
let score = 0;

//Functions

//Events
startGameButton.addEventListener('click', function () {
    instructionsContainer.style.display = 'none';
    gameContainer.style.display = 'block';
})
document.addEventListener('click', function () {
    if (gameContainer.style.display === 'block') {
        score++;
        clicks_counter.innerHTML = `${score}`;
    }
})