//Selectors
const startGameButton = document.querySelector('#start_game_button');
const instructionsContainer = document.querySelector('#instructions_container');
//Variables

//Functions

//Events
startGameButton.addEventListener('click', function(){
    instructionsContainer.style.display = 'none';
})