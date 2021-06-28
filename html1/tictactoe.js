const statusS = document.querySelector('.status');
const reset = document.querySelector('.reset');
const cellBOX = document.querySelectorAll('.box');
let player1 = "X";
let player2 = "O";
let playturn = 1;
let currentplayer = player1;
var winner = document.querySelector("#win");
let winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
var whoWon = null
var lastTurn = null
let b1 = document.getElementById('1')
let b2 = document.getElementById('2')
let b3 = document.getElementById('3')
let b4 = document.getElementById('4')
let b5 = document.getElementById('5')
let b6 = document.getElementById('6')
let b7 = document.getElementById('7')
let b8 = document.getElementById('8')
let b9 = document.getElementById('9')
let clicked = []
var isFullNested
var isWin = false





//event handlers
const handleReset = (e) => {
    console.log(e);
};
const checkWinner = () => {
  winCombos.forEach((combo) => {
    if (cellBOX[combo[0]].textContent && cellBOX[combo[0]].textContent === cellBOX[combo[1]].textContent && cellBOX[combo[0]].textContent === cellBOX[combo[2]].textContent) {
      winner = 'cellBOX';
      alert("The winner is " + whoWon)
      console.log("The winner is " + whoWon)
      isWin = true
    }
  })
}

const isFull = () => {
  if(b1.textContent !== "" && b2.textContent !== "" && b3.textContent !== "" && b4.textContent !== "" && b5.textContent !== "" && b6.textContent !== "" && b7.textContent !== "" && b8.textContent !== "" && b9.textContent !== ""){
    console.log('test')
    isFullNested = true
  }

}

const isTied = () => {
  if(isFullNested === true && isWin === false){
    alert('Tie')
  }
}

const handleBoxClick = (e) => {
    console.log(e);
    if (playturn % 2 == 0) {
        if(clicked.includes(e.target.id) === true){ 
          console.log('clicked')
        }
        else{
          e.target.textContent = player1;
          lastTurn = "X"
          whoWon = lastTurn
          clicked.push(e.target.id)
        }
    }
    else if (playturn % 2 == 1) {
      if(clicked.includes(e.target.id) === true){
        console.log('clicked')
      }
      else{        
        e.target.textContent = player2;
        lastTurn = "O"
        whoWon = lastTurn
        clicked.push(e.target.id)
      }
    }
    whoWon = lastTurn
    playturn++;
    checkWinner();
    isFull();
    isTied();
};


//const checkWinner = () => {
//    winCombos.forEach((combo) => {
//        if (cellBOX[combo[0]].textContent
//            && cellBOX[combo[0]].textContent === cellBOX[combo[1]].textContent
//            && cellBOX[combo[0]].textContent === cellBOX[combo[2]].textContent) {
//            winner = 'cellBOX';
//            alert("Winner!")
//        }
//    })
//}

    
//event listeners

reset.addEventListener("click", (e) =>{
  //cellBOX.textContent = null
  //for(box = 1; box < 9; box++){
  //  b1.textContent = null
  //}
  b1.textContent = null
  b2.textContent = null
  b3.textContent = null
  b4.textContent = null
  b5.textContent = null
  b6.textContent = null
  b7.textContent = null
  b8.textContent = null
  b9.textContent = null
  lastTurn = null
  whoWon = null
  clicked = []
  isWin = false
  isFullNested = false
});

for (let i = 0; i < cellBOX.length; i++) {
    cellBOX[i].addEventListener("click", handleBoxClick);
}