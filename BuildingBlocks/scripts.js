//Selectors

const shapes = document.querySelectorAll('.shape');
const toyBox = document.querySelector('#toy-box');
const canvas = document.querySelector('#canvas');
const infoContainer = document.querySelector('#info-container');
let currentShape;
let interval1;
let isDragging = false;

//Variables

const mouseCoords = {
    initialX: 0,
    initialY: 0,

    newX: 0,
    newY: 0
} 



//Functions

//Get the shape that is clicked, clone it, and add it to the #canvas div
function handleInitialValues(mouseDownAction) {

    //Get the shape that is clicked
    currentShape = mouseDownAction.target;

    //Clone the shape
    const shapeSelected = currentShape.cloneNode(true);

    //Add the cloned shape to the #canvas div
    canvas.appendChild(shapeSelected);

    isDragging = true;

}

//Hide info container and show the canvas
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
    shape.addEventListener('mousedown', showCanvas)
});

