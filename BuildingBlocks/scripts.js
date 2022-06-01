//Selectors

const shapes = document.querySelectorAll('.shape');
const toyBox = document.querySelector('#toybox');
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

//Hide info container and show the canvas



function startDrag(mouseDownEvent) {
    isDragging = true;
    const shapes = document.querySelectorAll('.shape');

    if (!shapes) return;

    shapes.forEach(shape => {
        if (shape.contains(mouseDownEvent.target)) {
            shapeSelected = shape;
        }
    });

    mouseDownEvent.preventDefault();

    canvas.appendChild(shapeSelected);

    mouseInitialCoords.x = mouseDownEvent.clientX - shapeSelected.offsetLeft;  
    mouseInitialCoords.y = mouseDownEvent.clientY - shapeSelected.offsetTop;

}

function dragAction(mouseMoveEvent) {
    if (!isDragging) return

    mouseNewCoords.newX = mouseMoveEvent.clientX - shapeSelected.offsetLeft;
    mouseNewCoords.newY = mouseMoveEvent.clientY - shapeSelected.offsetTop;

    const walkX = mouseNewCoords.newX - mouseInitialCoords.x;
    const walkY = mouseNewCoords.newY - mouseInitialCoords.y;

    shapeSelected.style.left = `${(shapeSelected.offsetLeft + walkX)}px`;
    shapeSelected.style.top = `${shapeSelected.offsetTop + walkY}px`;
}

function endDrag() {

    isDragging = false;

}


//Event Listeners

toyBox.addEventListener('mousedown', startDrag);

canvas.addEventListener('mousedown', startDrag)

document.addEventListener('mouseup', endDrag);
document.addEventListener('mousemove', dragAction)  