//Selectors
const attempts = document.getElementById('attempts');
const matches = document.getElementById('matches');
const cards = document.querySelectorAll("[data-cards]")

//Variables
const scores = {
    attempts: 0,
    matches: 0
}
const imgSources = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o']


//Functions

function flipCard(clickEvent) {
    const cardSelected = clickEvent.target.src
}

function generateRandomGrid(imagesList) {
    const copyOfImagesList = imagesList.slice()
    cards.forEach(card => {

        const randomIndex = Math.floor(Math.random() * copyOfImagesList.length)

        //check if the card is already used

        card.src = `./img/${imgSources[randomIndex]}.jpg`
        copyOfImagesList.splice(randomIndex, 1)
        console.log(copyOfImagesList)
    })
}

//Event listeners
cards.forEach(card => {
    card.addEventListener('click', flipCard)
})

window.addEventListener("load", () => {
    generateRandomGrid(imgSources)
})