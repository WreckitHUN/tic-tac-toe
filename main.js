const GAMEAREASIZE = 3;

const ZERO = 0;
const gameArea = document.querySelector(".game-area");

let id_count = ZERO;

gameArea.style.gridTemplateColumns = `repeat(${GAMEAREASIZE}, 1fr)`;
gameArea.style.gridTemplateRows = `repeat(${GAMEAREASIZE}, 1fr)`;

// Creating the game area
for (let i = 0; i < GAMEAREASIZE; i++) {
    for (let j = 0; j < GAMEAREASIZE; j++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        cell.setAttribute('id', `${id_count}`);
        gameArea.appendChild(cell);
        id_count++;
    }
}