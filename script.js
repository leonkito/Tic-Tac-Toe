const board = document.getElementById("main");
const createBoard = () =>{
  let Board =[0,0,0,0,0,0,0,0,0];
  function newBoard(){
    Board = [0,0,0,0,0,0,0,0,0]
    return{Board}
  }
  function makeMove(i){
    if (roundWon === false){
      if (Board[i]===0){
        Board[i] = definePlayer() //definir player responsavel pela jogada
        const tile = document.getElementById(i);
        tile.textContent = Board[i];
        checkwinner(Board);
      }
    }
  }
  return{Board,makeMove,newBoard}
}

const Board = createBoard()
createGame(Board)

function restart(){
  Board.newBoard()
  board.innerHTML = '';
  createGame(Board)
  player='X'
  definePlayer()
  roundWon = false;
}

function createGame (Board){
  for(let i = 0; i<=8;i++){
    const tile = document.createElement('div');
    tile.classList.add('tile');
    tile.setAttribute("id",i)
    tile.texContent = Board.Board[i]
    tile.addEventListener("click", () => {Board.makeMove(i)});
    board.appendChild(tile);
  }
}
const Score = document.getElementById('scoreboard')

let player = 'X'
definePlayer()
function definePlayer(){
  Score.textContent = `It's player ${player} turn`
  player = player === "O" ? "X" : "O";
  return player;
}
let roundWon = false;

function checkwinner(Board){
  
  for (let i = 0; i <= 7; i++){
    const winCondition = winningConditions[i];
    let a = Board[winCondition[0]];
    let b = Board[winCondition[1]];
    let c = Board[winCondition[2]];
    if (a === 0 || b === 0 || c===0){
      continue
    }        
    if (a === b && b === c) {
      roundWon = true;
      break
    } 
  }
  if (roundWon){
    document.getElementById("scoreboard").innerText = player + 'WIN'
  }
}

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];