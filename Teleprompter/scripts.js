//Selectors
const submitButton = document.getElementById('button');
const mainContainer = document.getElementById('main_container');
const header = document.getElementById('header');
const body = document.getElementById('body');

//Variables
let positionY = 0;


//Functions 
/**
 * @param {string} text
 */

function showTeleprompter(text) {
    header.classList.add('dark')
    body.classList.add('dark_background')
    mainContainer.classList.add('dark_background')
    mainContainer.innerHTML = `
        <div class="teleprompt_screen">${text}</div>
    `;
    const teleprompt = document.querySelector('.teleprompt_screen');
    const totalHeight = teleprompt.clientHeight;
    setInterval(() => {
        if (positionY < totalHeight) {
            teleprompt.style.top = "-" + positionY + "px";
            positionY++;
        }
    }
        , 25)
}

//Event Listeners

submitButton.addEventListener('click', (clickEvent) => {
    clickEvent.preventDefault();
    let textAreaValue = document.getElementById('textarea').value;
    
    if (textAreaValue.replace(/^\s+|\s+$/g, '') == '') {
        textAreaValue = 'You should probably enter some text next time.'
    }
    showTeleprompter(textAreaValue);
})