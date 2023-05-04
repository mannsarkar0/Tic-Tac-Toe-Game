const cellElements = document.querySelectorAll(".game-board .cell");

const player1 = document.querySelector(".players .player1");
const player2 = document.querySelector(".players .player2");
const result = document.querySelector(".result");
const result_text =document.querySelector(".result h1");
const restart_btn = document.querySelector(".result button");

const WINNING_CONDITION = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];


const playerO = "O";
const playerX = "X";

let toggleTurn = true;

cellElements.forEach(cell=>{
    cell.onclick=()=>{
        let currentPlayer = toggleTurn ? playerO : playerX;
        cell.classList.add("disabled");
        addInCell(cell, currentPlayer);
         
        if(winnerCheck(currentPlayer)){
            // console.log(currentPlayer + " wins");
            addInactive();
            result_text.innerText =currentPlayer+ " wins the game";

        }else if(isDraw()){
            // console.log("game is draw");
            addInactive();
            result_text.innerText = "Game is Draw!";
        }else{
            swapPlayer();
        }
    }
});

function winnerCheck(currentPlayer){
    return WINNING_CONDITION.some(condition=>{ 
        return condition.every(index=>{
            return cellElements[index].classList.contains(currentPlayer);
        });
    })
}

function isDraw(){
    return [...cellElements].every(cell=>{
        return cell.classList.contains(playerX) || cell.classList.contains(playerO)
    })
}


function addInCell(cell, currentPlayer){
    cell.innerHTML = currentPlayer;
    cell.classList.add(currentPlayer);
}

function swapPlayer(){
    toggleTurn = !toggleTurn;
    if(toggleTurn){
        player1.classList.add("active");
        player2.classList.remove("active");
    }else{
        player2.classList.add("active");
        player1.classList.remove("active");
    }
}


function addInactive(){
    result.classList.remove("inactive");
}

restart_btn.onclick=()=>{
    location.reload();
}


