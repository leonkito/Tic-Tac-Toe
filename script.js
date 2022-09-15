const board = document.getElementById("main");
const createBoard = () =>{
  let Board =[0,0,0,0,0,0,0,0,0];
  const makeMove = (i)=>{
    if (Board[i]===0){
      Board[i] = 'X'
    
    }
  }
  return{Board,makeMove}
}
const Board = createBoard()
createGame(Board);
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

function definePlayer(){

}
// let Board =[0,0,0,0,0,0,0,0,0]
// function makeMove(i){
//   const tile = document.getElementById(i);
//   if (Board[i]===0){
//     player = player === 'X' ? 'O' : 'X'
//     tile.textContent = player
//     Board[i]=player
//     checkwinner()
//   }
// }

// function checkwinner(){
//   let roundWon = false;
//   for (let i = 0; i <= 7; i++){
//     const winCondition = winningConditions[i];
//     let a = Board[winCondition[0]];
//     let b = Board[winCondition[1]];
//     let c = Board[winCondition[2]];
//     if (a === 0 || b === 0 || c===0){
//       continue
//     }        
//     if (a === b && b === c) {
//       roundWon = true;
//       break
//     } 
//   }
//   if (roundWon){
//     document.getElementById("scoreboard").innerText = player + 'WIN'
//   }
// }

// const winningConditions = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6]
// ];