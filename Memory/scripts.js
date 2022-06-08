//Selectors
const attempts = document.getElementById('attempts');
const matches = document.getElementById('matches');
const cards = document.querySelectorAll(".card")
const cardsBack = document.querySelectorAll(".card_back")
const cardsContainer = document.querySelector(".cards_container")

//Variables
const scores = {
    attempts: 0,
    matches: 0
}
const imgSources = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o'
]

const flippedCards = []

//Functions

function cardFlipHandler(clickEvent) {

    //Save the clicked card
    const cardBack = clickEvent.target
    const cardSelected = cardBack.nextElementSibling

    //Add the clicked card to the flipped cards array
    flippedCards.push(cardSelected)

    //Flip the card
    cardBack.style.display = "none"
    cardSelected.style.display = "block"

    //keep the cards array in a length of 2
    flippedCards.splice(0, flippedCards.length - 2);

    //Check if the cards match
    handleMatch(flippedCards)
}

function handleMatch(flippedCards) {

    //if the array is full
    if (flippedCards.length === 2) {

        //Disable clicks
        // @ts-ignore
        cardsContainer.style.pointerEvents = "none"

        //Add attempts and update the attempts counter
        scores.attempts++
        attempts.innerText = `Attempts: ${scores.attempts}`

        //if the cards match
        if (flippedCards[0].src === flippedCards[1].src) {

            //Add matches and update the matches counter
            scores.matches++
            matches.innerText = `Matches: ${scores.matches}`

            //remove the cards from the array
            flippedCards.length = 0

            //Enable clicks again
            // @ts-ignore
            cardsContainer.style.pointerEvents = "auto"

        }

        //if the cards don't match
        else {

            //Wait 400ms before flipping the cards back
            setTimeout(() => {
                flippedCards.forEach(card => {
                    card.style.display = "none"
                    card.previousElementSibling.style.display = "block"
                })
                flippedCards.length = 0
                // @ts-ignore
                cardsContainer.style.pointerEvents = "auto"
            }, 400)
        }
    }

}

//generate the cards randomly 
function generateRandomGrid(imagesList) {
    const copyOfImagesList = imagesList.slice()
    cards.forEach(card => {
        const randomIndex = Math.floor(Math.random() * copyOfImagesList.length)
        // @ts-ignore
        card.src = `./img/${copyOfImagesList[randomIndex]}.jpg`
        copyOfImagesList.splice(randomIndex, 1)
    })
}

//Event listeners
cardsBack.forEach(cardBack => {
    cardBack.addEventListener('click', cardFlipHandler)

})

window.addEventListener("load", () => {
    generateRandomGrid(imgSources)
})