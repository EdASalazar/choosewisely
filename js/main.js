  /*----- constants -----*/
  //AUDIO GOES HERE

const COLOR =  {
  'null': 'darkgrey',     //will be an image
   '0': 'blue', //this will be the same as null's value to hide it. 
    '-1': 'red', //will be an image
    '1': 'black' //will be an image
}
  
  const PLAYERS = {
    'player': -1,
    'computer': 1,
}

  // const numTraps = {
  //   'num': 3, //may move this to a place where it can be changed eventually, difficult
  // }


  /*----- state variables -----*/
  let board;
  let score; //number of squares revealed.
  let reuslts; //no squares left accept for the traps. 
  let trapLocs; //location of the traps. 
  let turns;
  let winner;
  let squareClkd;
//   let timeElapse; icebox for now //how fast they win
  



  /*----- cached elements  -----*/
const markerEls = [...document.querySelectorAll('#board > div')];
const playAgainBtn = document.querySelector("button");
const messageEl = document.querySelector("h1");

  /*----- event listeners -----*/
document.getElementById('board').addEventListener('click', handleChoice);
playAgainBtn.addEventListener("click", init);

  /*----- functions -----*/
  init();

  //intialize 

  function init() {

    board = [
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null]
        
    ];

    score = 0;
    turns = 0;
    winner = null;

    makeTraps();
    render();
    // playAgainBtn.style.visibility = "hidden";

  }

function makeTraps() {
    trapCol = (Math.floor(Math.random() * 10));
    trapRow = (Math.floor(Math.random() * 10));
    trapLocs = board[trapCol][trapRow];
     board[trapCol][trapRow] = 0;  
    //  console.log(trapCol);
    //  console.log(trapRow);
    //  console.log(trapLoc);
     

}
function checkWinner() {
  
  // const hasNull = board.some((num) => num === null) 
  // if (hasNull === false) {
  //       winner = -1;
  // } 
  // console.log(hasNull);
};

// if(board.includes(null)){
  //   render();
  // } else {
  //   winner = -1;
  // }

function handleChoice(evt) {
  const colIdx = evt.target.id.slice(1, 2);
  const rowIdx = evt.target.id.slice(3, 4);
  squareClkd = `board[${colIdx}][${rowIdx}]`;
      
if (colIdx === -1) return;  //guard
if (board[colIdx][rowIdx] === 0) {
     winner = 1;
     squareClkd = 1;
    
    } else {
      board[colIdx][rowIdx] = -1;
      score = +1;
      turns = +1;

    console.log(squareClkd);
    console.log(winner);
    checkWinner();
    render();
  }
}

function render() {
  renderBoard();
  renderMessage();
 }

function renderBoard() {
    board.forEach(function(colArr, colIdx) {
        colArr.forEach(function(cellVal, rowIdx){
            const cellId = `c${colIdx}r${rowIdx}`;
            const cellEl = document.getElementById(cellId);
            cellEl.style.backgroundColor = COLOR[cellVal];
        });
    });
  }
function renderMessage() {
  if (winner === 1) {
    messageEl.innerText = "You chose poorly!!!";
  } else if (winner === -1) {
    messageEl.innerText = "You chose wisely!!!";
  } else {
    messageEl.innerText = "Choose again!!!";
  }

};