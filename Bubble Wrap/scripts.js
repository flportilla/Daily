//Selectors
const resetButton = document.getElementById("reset_button");
const superButton = document.getElementById("super_button");
const bubbleContainer = document.getElementById("bubble_container");
const popSound = document.getElementById("pop_sound");
const bubbles = document.querySelectorAll(".bubble");
const poppedBubbles = document.querySelectorAll(".popped");


//Variables
let superFlag = false;

//Functions
function popBubble(clickEvent) {
    if (superFlag) {
        console.log(clickEvent)
        clickEvent.target.style.display = "none";
        clickEvent.target.nextElementSibling.style.display = "block"
        popSound.innerHTML = `
            <audio autoplay = "">
                <source src="./audio/pop.wav" type="audio/wav">
            </audio>`;
    }
    else {
        clickEvent.target.style.display = "none";
        clickEvent.target.parentNode.nextElementSibling.style.display = "block"
        popSound.innerHTML = `
            <audio autoplay = "">
                <source src="./audio/pop.wav" type="audio/wav">
            </audio>`;
    }
}

function handleSuperButton(clickEvent) {

    const superB = superButton.classList;

    if (superB.value.includes("off")) {
        superB.remove("off");
        superB.add("on");
        superFlag = true;
    }
    else {
        superB.remove("on");
        superB.add("off");
        superFlag = false;
    }
}

function isSuper() {
    if (superFlag) {
        console.log(superFlag)
        bubbles.forEach(bubble => {
            bubble.removeEventListener("click", popBubble);
            bubble.addEventListener("mouseenter", popBubble);
        })
    }
    else {
        bubbles.forEach(bubble => {
            bubble.removeEventListener("mouseenter", popBubble);
            bubble.addEventListener("click", popBubble);
        })
    }
}

//Event Listeners

bubbles.forEach(bubble => {
    bubble.addEventListener("click", popBubble);
})

resetButton.addEventListener("click", () => {
    location.reload();
});

superButton.addEventListener("click", () => {
    handleSuperButton()
    isSuper()

});