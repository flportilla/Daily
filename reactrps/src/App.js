
import left_fist from './left_fist.png';
import right_fist from './right_fist.png';
import rock from './rock.png';
import paper from './paper.png';
import scissors from './scissors.png';

import './App.css';

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
      <button className={buttonsName.rock} id={buttonsName.rock}>{buttonsName.rock}</button>
      <button className={buttonsName.paper} id={buttonsName.paper}>{buttonsName.paper}</button>
      <button className={buttonsName.scissors} id={buttonsName.scissors}>{buttonsName.scissors}</button>
    </>
  )
}
function Computer() {
  return (
    <>
      <div>Computer</div>
      <div style={{ height: 100 }}></div>
      <div id='computer_hand'>
        <img src={left_fist} id="computer_hand_img" alt="left_fist" />
      </div>
    </>
  )
}
function Timer() {
  return (
    <>
      <div>Choose your weapon</div>
    </>
  )
}
function Player() {
  return (
    <>
      <div>Player</div>
      <div style={{ height: 100 }}></div>
      <div id='player_hand'>
        <img src={right_fist} id="player_hand_img" alt="right_fist" />
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

export default App;
