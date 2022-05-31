//Selectors

const shapes = document.querySelectorAll('.shape');
const canvas = document.querySelector('#canvas');
const infoContainer = document.querySelector('#info-container');
let currentShape;
let interval1;

//Variables


//Functions

//Get the shape that is clicked, clone it, and add it to the page
function handleInitialValues(e) {
    currentShape = e.target;
    const shapeSelected = currentShape.cloneNode(true);
    canvas.appendChild(shapeSelected);

}

function showCanvas() {

    infoContainer.classList.add('hidden');
    canvas.classList.remove('hidden');
    canvas.classList.add('canvas');
    interval1 = setInterval(() => {
        infoContainer.classList.add('hide');
    }, 1000);
}

//Event Listeners
shapes.forEach(shape => {
    shape.addEventListener('click', handleInitialValues)
});
shapes.forEach(shape => {
    shape.addEventListener('click', showCanvas)
});

//stop the interval on animation end
canvas.addEventListener('animationend', () => {
    clearInterval(interval1);

});

