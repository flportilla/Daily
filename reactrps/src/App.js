
// @ts-ignore
import left_fist from './left_fist.png';
// @ts-ignore
import right_fist from './right_fist.png';
// @ts-ignore
import rock from './rock.png';
// @ts-ignore
import paper from './paper.png';
// @ts-ignore
import scissors from './scissors.png';
import './App.css';

let setCountdown;
const selections = {}

function GameContainers() {

  const containerClasses = {
    computer: 'computer_container',
    timer: 'timer_container',
    player: 'player_container'
  };
  return (
    <>
      <div className={containerClasses.computer} id={containerClasses.computer}>
        <Computer />
      </div>
      <div className={containerClasses.timer} id={containerClasses.timer}>
        <Timer />
      </div>
      <div className={containerClasses.player} id={containerClasses.player}>
        <Player />
      </div>
    </>
  )
}
function ButtonsContainer() {
  const buttonsName = {
    rock: 'rock',
    paper: 'paper',
    scissors: 'scissors'
  }
  return (
    <>
      <button type="button" onClick={handleShake} className={buttonsName.rock} id={buttonsName.rock}>{buttonsName.rock}</button>
      <button type="button" onClick={handleShake} className={buttonsName.paper} id={buttonsName.paper}>{buttonsName.paper}</button>
      <button type="button" onClick={handleShake} className={buttonsName.scissors} id={buttonsName.scissors}>{buttonsName.scissors}</button>
    </>
  )
}
function Computer() {
  return (
    <>
      <div className="computer_name" id="computer_name">Computer</div>
      <div style={{ height: 100 }}></div>
      <div id='computer_hand'>
        <img src={left_fist} id="computer_hand_img" />
      </div>
    </>
  )
}
function Timer() {
  return (
    <>
      <div className="timer" id="timer">Choose your weapon</div>
    </>
  )
}
function Player() {
  return (
    <>
      <div className="player_name" id="player_name">You</div>
      <div style={{ height: 100 }}></div>
      <div id='player_hand'>
        <img src={right_fist} onAnimationEnd={() => { handleChoices(); handleResults() }} id="player_hand_img" />
      </div>
    </>
  )
}
function App() {

  return (
    <div className='main_container'>
      <div className='game_container' id="game_container">
        <GameContainers />
      </div>
      <div className='buttons_container' id="buttons_container">
        <ButtonsContainer />
      </div>
    </div>
  )
}

function handleChoices() {

  const playerHand = document.getElementById('player_hand_img');
  const computerSelection = Math.floor(Math.random() * 3) + 1;

  switch (computerSelection) {
    case 1:
      selections.computer = 'rock';
      break;
    case 2:
      selections.computer = 'paper';
      break;
    case 3:
      selections.computer = 'scissors';
      break;
  }

  switch (selections.player) {
    case 'rock':
      selections.player = 'rock';
      playerHand.src = `${rock}`;
      break;
    case 'paper':
      selections.player = 'paper';
      playerHand.src = `${paper}`;
      break;
    case 'scissors':
      selections.player = 'scissors';
      playerHand.src = `${scissors}`;
      break;
  }
}

function setTimer() {
  const results = document.getElementById('timer');

  let contador = 2
  results.innerText = '3';
  const timer = setInterval(function () {
    results.innerText = `${contador}`;
    contador--;
  }, 500);
  setCountdown = timer;
}

function handleShake(clickEvent) {

  const computerHand = document.getElementById('computer_hand_img');
  const playerHand = document.getElementById('player_hand_img');

  computerHand.src = `${left_fist}`
  playerHand.src = `${right_fist}`

  computerHand.classList.toggle('shake');
  playerHand.classList.toggle('shake');

  selections.player = clickEvent.target.id;

  setTimer();
};

function handleResults() {

  clearInterval(setCountdown)

  const results = document.getElementById('timer');
  const computerHand = document.getElementById('computer_hand_img');
  const playerHand = document.getElementById('player_hand_img');

  computerHand.classList.remove('shake');
  playerHand.classList.remove('shake');

  switch (selections.computer) {
    case 'rock':
      computerHand.src = `${rock}`
      if (selections.computer === selections.player) {
        results.innerText = `It's a draw!`;
      }
      else if (selections.player === 'paper' && selections.computer === 'rock') {
        results.innerText = `You win!`;
      }
      else if (selections.player === 'scissors' && selections.computer === 'rock') {
        results.innerText = `You lose!`;
      }
      break;

    case 'paper':
      computerHand.src = `${paper}`
      if (selections.computer === selections.player) {
        results.innerText = `It's a draw!`;
      }
      else if (selections.player === 'rock' && selections.computer === 'paper') {
        results.innerText = `You lose!`;
      }
      else if (selections.player === 'scissors' && selections.computer === 'paper') {
        results.innerText = `You win!`;
      }
      break;

    case 'scissors':
      computerHand.src = `${scissors} `
      if (selections.computer === selections.player) {
        results.innerText = `It's a draw!`;
      }
      else if (selections.player === 'rock' && selections.computer === 'scissors') {
        results.innerText = `You win!`;
      }
      else if (selections.player === 'paper' && selections.computer === 'scissors') {
        results.innerText = `You lose!`;
      }
      break;



  }

}

export default App;