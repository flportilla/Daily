//selectors
const computerHand = document.querySelector('#computer_hand');
const playerHand = document.querySelector('#player_hand');
const rockButton = document.querySelector('#rock_button');
const paperButton = document.querySelector('#paper_button');
const scissorsButton = document.querySelector('#scissors_button');
let playerSelection;
let computerResult;


//functions


//handle shaking animation
function handleShake() {
    computerHand.classList.add('shake');
    playerHand.classList.add('shake');
    playerSelection = this.name;
}
function removeShake() {
    computerHand.classList.remove('shake');
    playerHand.classList.remove('shake');
}

function handlePlayerChoice() {
    playerHand.style.marginTop = '-100px';
    playerHand.innerHTML = `<img src="img/${playerSelection}.png" alt="${playerSelection}">`;

}

function handleComputerChoice() {
    const computerSelection = Math.floor(Math.random() * 3) + 1;
  
    switch (computerSelection) {
        case 1:
            computerHand.style.marginTop = '-100px';
            computerHand.innerHTML = `<img src="img/scissors.png" alt="scissors">`;
            computerResult = computerHand.querySelector('img').alt;

            if(computerResult === playerSelection) {
                console.log('draw')
            }

            else if(playerSelection === 'rock' && computerResult === 'scissors') {
                console.log('player wins');
            }
            else if (playerSelection === 'paper' && computerResult === 'scissors') {
                console.log('player loses');
            }
            break;
        case 2:
            computerHand.style.marginTop = '-100px';
            computerHand.innerHTML = `<img src="img/paper.png" alt="paper">`;
            computerResult = computerHand.querySelector('img').alt;

            if(computerResult === playerSelection) {
                console.log('draw')
            }
            else if(playerSelection === 'rock' && computerResult === 'paper'){
                console.log('player loses');
            }
            else if (playerSelection === 'scissors' && computerResult === 'paper') {
                console.log('player wins');
            }
            break;
        case 3:
            computerHand.style.marginTop = '-100px';
            computerHand.innerHTML = `<img src="img/rock.png" alt="rock">`;
            computerResult = computerHand.querySelector('img').alt;

            if(computerResult === playerSelection) {
                console.log('draw');
            }
            else if (playerSelection === 'paper' && computerResult === 'rock'){
                console.log('player wins');
            }
            else if (playerSelection === 'scissors' && computerResult === 'rock') {
                console.log('player loses');
            }
            break;
    }



}


// function computerPlay(){
//     let random = Math.floor(Math.random() * 3);
//     if(random === 0){
//         return 'rock';
//     } else if(random === 1){
//         return 'paper';
//     } else {
//         return 'scissors';
//     }
// }

// function handlePlayerChoice(){
//     let playerChoice = this.id;
//     let computerChoice = computerPlay();

// }


//event listeners

//handle shaking animation
rockButton.addEventListener('click', handleShake)
paperButton.addEventListener('click', handleShake)
scissorsButton.addEventListener('click', handleShake)
computerHand.addEventListener('animationend', removeShake)
playerHand.addEventListener('animationend', removeShake)

//handle choices
playerHand.addEventListener('animationend', handlePlayerChoice)
computerHand.addEventListener('animationend', handleComputerChoice)

//handle results
