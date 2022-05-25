//Selectors
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const changeSign = document.querySelector('[data-changeSign]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-clearAll]');
const display = document.querySelector('[data-display]');


//Functions

function showNumber(){
    const number = this.id
    const maxLength = display.value.length;
    if(maxLength < 14){
    display.value += number;
    }
}

function clearAll(){
    display.value = '';
}

function deleteLast(){
    display.value = display.value.slice(0, -1);
}

function negative(){

    const checkIfNumber = (display.value * -1) ? true : false;
    if(checkIfNumber){
        display.value = display.value * -1;
    }

}

function showOperator(){

    if(display.value === '') return;

    if(display.value.slice(-1) === '+' || display.value.slice(-1) === '-' || display.value.slice(-1) === '*' || display.value.slice(-1) === '/') {

        deleteLast()
    }
    if(this.id === '+'){
        display.value += '+';
    }
    else if(this.id === '-'){
        display.value += '-';
    }
    else if(this.id === '*'){
        display.value += '*';
    }
    else if(this.id === '/'){
        display.value += '/';
    }

}

function calculate(){
    let result = eval(display.value);
    display.value = result;
}

//Event Listeners

numberButtons.forEach(button => {
    button.addEventListener('click', showNumber);
})
allClearButton.addEventListener('click', clearAll);
deleteButton.addEventListener('click', deleteLast);
changeSign.addEventListener('click', negative);
operationButtons.forEach(button => {
    button.addEventListener('click', showOperator);
})
equalsButton.addEventListener('click', calculate);