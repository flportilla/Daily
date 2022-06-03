//Selectors
const startGameButton = document.getElementById('start_game_button');
const instructionsContainer = document.getElementById('instructions_container');
const clicks_counter = document.getElementById('clicks_counter')
const gameContainer = document.getElementById('game_container');
const tryAgain = document.getElementById('start_again_container');
const totalClicks = document.getElementById('total_clicks');
const clicksPerSecond = document.getElementById('clicks_per_second');

//Variables
let score = 0;
let gameStart = false;

//Functions
function startGame(){
    gameStart = true;
    instructionsContainer.style.display = 'none';
    gameContainer.style.display = 'block';
    handleGameDuration();
}

function clickCounter(){
    if (gameStart) {
        score++;
        clicks_counter.innerHTML = `${score}`;
    }
}

function handleGameDuration(){
    setTimeout(() => {
        gameStart = false;
        tryAgain.style.display = 'block';
        gameContainer.style.display = 'none';
        totalClicks.innerHTML = `${score}`;
        const clickPerSecond = (score / 30).toFixed(2);
        clicksPerSecond.innerHTML = `${clickPerSecond}`;
        score = 0;
    } , 30000);
}

//Events
startGameButton.addEventListener('click', startGame);
document.addEventListener('click', clickCounter);