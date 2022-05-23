//selectors
const pips = document.querySelectorAll('[data-pip]');
const button = document.querySelector('#button_container button');
const title = document.querySelector('#title');
const result = document.querySelector('#title h1');


//functions

//Generates a random number between 1 and 12 and returns it
const num = function rollDice (){ 
    return Math.floor(Math.random() * 11) + 2
}
function unShake(){
    title.classList.remove('shake')
}
function shakeEm(){
    title.classList.add('shake')
    result.innerText = 'Shake, Shake, Shake...'
}

function changeTitle(){
    const generatedNumber = num();
    console.log(generatedNumber);
    result.innerText = generatedNumber

    switch(generatedNumber){
        case 2:
            pips.forEach(pip => pip.style.display = 'none');
            pips[3].style.display = 'block';
            pips[10].style.display = 'block';
            result.innerText = 'Snake Eyes!'
            break;
        case 3:
            pips.forEach(pip => pip.style.display = 'none');
            pips[7].style.display = 'block';
            pips[13].style.display = 'block';
            pips[3].style.display = 'block';
            break;
        case 4:
            pips.forEach(pip => pip.style.display = 'none');
            pips[0].style.display = 'block';
            pips[6].style.display = 'block';
            pips[7].style.display = 'block';
            pips[13].style.display = 'block';
            break;
        case 5:
            pips.forEach(pip => pip.style.display = 'none');
            pips[7].style.display = 'block';
            pips[13].style.display = 'block';
            pips[11].style.display = 'block';
            pips[9].style.display = 'block';
            pips[3].style.display = 'block';
            break;
        case 6:
            pips.forEach(pip => pip.style.display = 'none');
            pips[7].style.display = 'block';
            pips[13].style.display = 'block';
            pips[11].style.display = 'block';
            pips[9].style.display = 'block';
            pips[0].style.display = 'block';
            pips[6].style.display = 'block';
            break;
        case 7:
            pips.forEach(pip => pip.style.display = 'none');
            pips[7].style.display = 'block';
            pips[8].style.display = 'block';
            pips[9].style.display = 'block';
            pips[11].style.display = 'block';
            pips[12].style.display = 'block';
            pips[13].style.display = 'block';
            pips[3].style.display = 'block';
            break;
        case 8:
            pips.forEach(pip => pip.style.display = 'none');
            pips[7].style.display = 'block';
            pips[8].style.display = 'block';
            pips[9].style.display = 'block';
            pips[11].style.display = 'block';
            pips[12].style.display = 'block';
            pips[13].style.display = 'block';
            pips[0].style.display = 'block';
            pips[6].style.display = 'block';
            break;
        case 9:
            pips.forEach(pip => pip.style.display = 'none');
            pips[7].style.display = 'block';
            pips[8].style.display = 'block';
            pips[9].style.display = 'block';
            pips[11].style.display = 'block';
            pips[12].style.display = 'block';
            pips[13].style.display = 'block';
            pips[0].style.display = 'block';
            pips[6].style.display = 'block';
            pips[3].style.display = 'block';
            break;
        case 10:
            pips.forEach(pip => pip.style.display = 'none');
            pips[7].style.display = 'block';
            pips[8].style.display = 'block';
            pips[9].style.display = 'block';
            pips[11].style.display = 'block';
            pips[12].style.display = 'block';
            pips[13].style.display = 'block';
            pips[0].style.display = 'block';
            pips[6].style.display = 'block';
            pips[2].style.display = 'block';
            pips[4].style.display = 'block';
            break;
        case 11:
            pips.forEach(pip => pip.style.display = 'none');
            pips[7].style.display = 'block';
            pips[8].style.display = 'block';
            pips[9].style.display = 'block';
            pips[11].style.display = 'block';
            pips[12].style.display = 'block';
            pips[13].style.display = 'block';
            pips[0].style.display = 'block';
            pips[6].style.display = 'block';
            pips[2].style.display = 'block';
            pips[4].style.display = 'block';
            pips[3].style.display = 'block';
            break;
        case 12:
            pips.forEach(pip => pip.style.display = 'none');
            pips[7].style.display = 'block';
            pips[8].style.display = 'block';
            pips[9].style.display = 'block';
            pips[11].style.display = 'block';
            pips[12].style.display = 'block';
            pips[13].style.display = 'block';
            pips[0].style.display = 'block';
            pips[1].style.display = 'block';
            pips[2].style.display = 'block';
            pips[4].style.display = 'block';
            pips[5].style.display = 'block';
            pips[6].style.display = 'block';
            break;
    }
    
}

//events
button.addEventListener('click', shakeEm)
title.addEventListener('animationend', unShake)
title.addEventListener('animationend', changeTitle)


