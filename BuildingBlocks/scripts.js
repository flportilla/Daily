//Selectors

const shapes = document.querySelectorAll('.shape');
const toyBox = document.querySelector('#toy-box');
const canvas = document.querySelector('#canvas');
const infoContainer = document.querySelector('#info-container');


//Variables

//Coodinates
const mouseInitialCoords = {}
const mouseNewCoords = {};

//Holds the current shape that is being clicked
let shapeSelected = null;

//Stores the interval ID to clear it later
let interval1;

//Flag to check if the shape is being dragged
let isDragging = false;

//Functions

//Get the shape that was clicked.
function getShapeClicked(mouseDownAction) {
    const shapes = document.querySelectorAll('.shape');
    
    if(!shapes) return;

    shapes.forEach(shape => {
        if(shape.contains(mouseDownAction.target)) {
            shapeSelected = shape;
        }
    });
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


function startDrag(mouseDownAction) {
    isDragging = true;

    mouseDownAction.preventDefault();
    getShapeClicked(mouseDownAction)
    showCanvas();

    canvas.appendChild(shapeSelected);

    mouseInitialCoords.x = mouseDownAction.clientX - shapeSelected.offsetLeft;
    mouseInitialCoords.y = mouseDownAction.clientY - shapeSelected.offsetTop;

    console.log(mouseInitialCoords);

}

function dragAction(mouseMoveAction) {
    if (!isDragging) return 

        mouseNewCoords.newX = mouseMoveAction.clientX - shapeSelected.offsetLeft;
        mouseNewCoords.newY = mouseMoveAction.clientY - shapeSelected.offsetTop;

        const walkX = mouseNewCoords.newX - mouseInitialCoords.x;
        const walkY = mouseNewCoords.newY - mouseInitialCoords.y;
        
        shapeSelected.style.left = `${shapeSelected.offsetLeft + walkX}px`;
        shapeSelected.style.top = `${shapeSelected.offsetTop + walkY}px`;
   }

function endDrag() {

    isDragging = false;

}


//Event Listeners

toyBox.addEventListener('mousedown', startDrag);
toyBox.addEventListener('mouseup', startDrag);
shapes.forEach(shape => {
    shape.addEventListener('mousemove', dragAction)
});


canvas.addEventListener('mousedown', startDrag)
canvas.addEventListener('mouseup', endDrag);