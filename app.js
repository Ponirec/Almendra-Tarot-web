const tarotCards = [
    "fool", "magician", "high_priestess", "empress", "emperor", "hierophant", "lovers", "chariot"
];

// Duplicamos las cartas para formar pares y las mezclamos
let cards, flippedCards, matchedPairs, attempts, timer, timeElapsed;

function initializeGame() {
    cards = [...tarotCards, ...tarotCards].sort(() => Math.random() - 0.5);
    flippedCards = [];
    matchedPairs = 0;
    attempts = 0;
    timeElapsed = 0;

    clearInterval(timer);
    document.getElementById("attempts").textContent = "Intentos: 0";
    document.getElementById("timer").textContent = "Tiempo: 0 segundos";
    
    const board = document.getElementById("game-board");
    board.innerHTML = "";
    
    startTimer();
    
    cards.forEach((card, index) => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");
        cardElement.dataset.card = card;
        cardElement.dataset.index = index;
        
        cardElement.addEventListener("click", flipCard);
        board.appendChild(cardElement);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const resetButton = document.getElementById("reset-button");
    resetButton.addEventListener("click", initializeGame);
    initializeGame();
});

function flipCard(event) {
    let selectedCard = event.target;
    
    if (flippedCards.length < 2 && !selectedCard.classList.contains("flipped")) {
        selectedCard.classList.add("flipped");
        selectedCard.style.backgroundImage = `url('images/${selectedCard.dataset.card}.jpg')`;
        flippedCards.push(selectedCard);
    }

    if (flippedCards.length === 2) {
        attempts++;
        document.getElementById("attempts").textContent = `Intentos: ${attempts}`;
        setTimeout(checkMatch, 1000);
    }
}

function checkMatch() {
    const [card1, card2] = flippedCards;
    
    if (card1.dataset.card === card2.dataset.card) {
        matchedPairs++;
        flippedCards = [];
        if (matchedPairs === tarotCards.length) {
            clearInterval(timer);
            alert(`¡Has encontrado todas las parejas en ${attempts} intentos y ${timeElapsed} segundos!`);
        }
    } else {
        card1.classList.remove("flipped");
        card2.classList.remove("flipped");
        card1.style.backgroundImage = "";
        card2.style.backgroundImage = "";
        flippedCards = [];
    }
}

function startTimer() {
    timer = setInterval(() => {
        timeElapsed++;
        document.getElementById("timer").textContent = `Tiempo: ${timeElapsed} segundos`;
    }, 1000);
}