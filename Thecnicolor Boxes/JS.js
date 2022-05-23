const boxes = document.querySelectorAll('.box');

function changeColor() {

    // # + 6 hexadecimal characters
    this.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16); // 16777215 = color code for white
}

boxes.forEach(box => {
    box.addEventListener('mouseenter', changeColor)
});

