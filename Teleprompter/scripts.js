//Selectors

const submitButton = document.getElementById('button');
const mainContainer = document.getElementById('main_container');
const header = document.getElementById('header');
const body = document.getElementById('body');

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
}

//Event Listeners

submitButton.addEventListener('click', (clickEvent) => {
    clickEvent.preventDefault();
    const textAreaValue = document.getElementById('textarea').value;
    showTeleprompter(textAreaValue);
})