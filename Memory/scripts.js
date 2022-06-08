//Selectors
const attempts = document.getElementById('attempts');
const matches = document.getElementById('matches');
const cards = document.querySelectorAll(".card")
const cardsBack = document.querySelectorAll(".card_back")

//Variables
const scores = {
    attempts: 0,
    matches: 0
}
const imgSources = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o'
]
const cardsSelected = {
    first: null,
    second: null
}

//Functions

function firstCardHandler(clickEvent) {
    const cardSelected = clickEvent.target
    const cardSelectedBack = cardSelected.nextElementSibling

    cardSelected.style.display = "none"
    cardSelectedBack.style.display = "block"

    cardsSelected.first = cardSelected
}

function generateRandomGrid(imagesList) {

    const copyOfImagesList = imagesList.slice()
    cards.forEach(card => {
        const randomIndex = Math.floor(Math.random() * copyOfImagesList.length)
        card.src = `./img/${copyOfImagesList[randomIndex]}.jpg`
        copyOfImagesList.splice(randomIndex, 1)
    })
}

//Event listeners
cardsBack.forEach(cardBack => {
    cardBack.addEventListener('click', firstCardHandler)

})



window.addEventListener("load", () => {
    generateRandomGrid(imgSources)
})