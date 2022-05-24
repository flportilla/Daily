//selectors
const computerHand = document.querySelector('#computer_hand');
const playerHand = document.querySelector('#player_hand');
const rockButton = document.querySelector('#rock_button');
const paperButton = document.querySelector('#paper_button');
const scissorsButton = document.querySelector('#scissors_button');
const resultMessages = document.querySelector('#result_messages');
let playerSelection;
let computerResult;
let setCountdown;



//functions


function setTimer() {
    let contador = 2
    resultMessages.innerHTML = (`<span>3</span>`);
    const timer = setInterval(function () {
        resultMessages.innerHTML = (`<span>${contador}</span>`);
        contador--;
        
    }, 500);
    setCountdown =  timer;
}

//handle shaking animation
function handleShake() {

    setTimer();

    computerHand.innerHTML = `<img src="./img/left_fist.png" alt="rock" id="computer_hand_img">`
    playerHand.innerHTML = `<img src="./img/right_fist.png" alt="hand" id="player_hand_img">`
    computerHand.classList.add('shake');
    playerHand.classList.add('shake');
    playerSelection = this.name;
}
function removeShake() {
    computerHand.classList.remove('shake');
    playerHand.classList.remove('shake');
    clearInterval(setCountdown)
    
}


//handle choice selection
function handlePlayerChoice() {
    playerHand.style.marginTop = '-100px';
    playerHand.innerHTML = `<img src="img/${playerSelection}.png" alt="${playerSelection}">`;

}

//handle the computer selection and result
function handleResults() {

    const computerSelection = Math.floor(Math.random() * 3) + 1;

    switch (computerSelection) {

        case 1:
            computerHand.style.marginTop = '-100px';
            computerHand.innerHTML = `<img src="img/scissors.png" alt="scissors">`;
            computerResult = computerHand.querySelector('img').alt;

            if (computerResult === playerSelection) {
                resultMessages.innerHTML = (`<span> It's a draw! </span>`);
            }
            else if (playerSelection === 'rock' && computerResult === 'scissors') {
                resultMessages.innerHTML = (`<span> You win! </span>`)
            }
            else if (playerSelection === 'paper' && computerResult === 'scissors') {
                resultMessages.innerHTML = (`<span> You lose! </span>`)
            }
            break;

        case 2:
            computerHand.style.marginTop = '-100px';
            computerHand.innerHTML = `<img src="img/paper.png" alt="paper">`;
            computerResult = computerHand.querySelector('img').alt;

            if (computerResult === playerSelection) {
                resultMessages.innerHTML = (`<span> It's a draw! </span>`);
            }
            else if (playerSelection === 'rock' && computerResult === 'paper') {
                resultMessages.innerHTML = (`<span> You win! </span>`)
            }
            else if (playerSelection === 'scissors' && computerResult === 'paper') {
                resultMessages.innerHTML = (`<span> You lose! </span>`)
            }
            break;

        case 3:
            computerHand.style.marginTop = '-100px';
            computerHand.innerHTML = `<img src="img/rock.png" alt="rock">`;
            computerResult = computerHand.querySelector('img').alt;

            if (computerResult === playerSelection) {
                resultMessages.innerHTML = (`<span> It's a draw! </span>`);
            }
            else if (playerSelection === 'paper' && computerResult === 'rock') {
                resultMessages.innerHTML = (`<span> You win! </span>`)
            }
            else if (playerSelection === 'scissors' && computerResult === 'rock') {
                resultMessages.innerHTML = (`<span> You lose! </span>`)
            }
            break;
    }

}


//event listeners

//handle shaking animation
rockButton.addEventListener('click', handleShake)
paperButton.addEventListener('click', handleShake)
scissorsButton.addEventListener('click', handleShake)
computerHand.addEventListener('animationend', removeShake)
playerHand.addEventListener('animationend', removeShake)

//handle choices
playerHand.addEventListener('animationend', handlePlayerChoice)
computerHand.addEventListener('animationend', handleResults)

//handle results
