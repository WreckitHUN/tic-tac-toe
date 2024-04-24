const GAMEAREASIZE = 3;
const NUMBERTOWIN = 3;

let isTurn = false;
const ZERO = 0;
const gameArea = document.querySelector(".game-area");
const indicator = document.querySelector(".indicator");
let id_count = ZERO;
let blueArray = [];
let redArray = [];
let blueWin = false;
let redWin = false;

gameArea.style.gridTemplateColumns = `repeat(${GAMEAREASIZE}, 1fr)`;
gameArea.style.gridTemplateRows = `repeat(${GAMEAREASIZE}, 1fr)`;

const toggleIndicator = () => {
    isTurn ? indicator.style.background = "red" : indicator.style.background = "blue";
}

toggleIndicator();

// Creating the game area
for (let i = 0; i < GAMEAREASIZE; i++) {
    for (let j = 0; j < GAMEAREASIZE; j++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        cell.setAttribute('id', `${id_count}`);
        cell.textContent = cell.id;
        // Event Listener 
        cell.addEventListener("click", () => {
            
            if (!cell.classList.contains("clicked")){
            cell.classList.add("clicked");
                if (isTurn){
                    cell.style.background = "red";
                    redArray.push(cell.id);
                }else{
                    cell.style.background = "blue";
                    blueArray.push(cell.id);
                }
            isTurn = !isTurn;
            toggleIndicator();
            roundWon(cell.id);
            console.log(blueWin);
        }
        })
        gameArea.appendChild(cell);
        id_count++;
    }
}


// Check who wins the round
const roundWon = (id) => {
    const tempArray = [];

    

    
}
