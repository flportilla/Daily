//Selectors
const colors = document.getElementById('color_palette')
const squares = document.getElementById('painting')
const colorTileInfo = {color: '', tile: ''}

//Functions
function colorAndTile(event) {

    if(event.target.classList == 'color') {
        colorTileInfo.color = event.target.id
    }
    if(event.target.classList == 'row') {
        colorTileInfo.tile = event.target.id
    }
    paint(event, colorTileInfo)
}

function paint(event, colorTileInfo){

    if(event.target.classList == 'row') {
        event.target.style.backgroundColor = colorTileInfo.color
    }
}

//Event Listeners
colors.addEventListener('click', colorAndTile)
squares.addEventListener('click', colorAndTile)