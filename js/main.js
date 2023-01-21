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

  const numTraps = {
    'num': 3, //may move this to a place where it can be changed eventually, difficult
  }


  /*----- state variables -----*/
  let board;
  let score; //number of squares revealed.
  let reuslts; //no squares left accept for the traps. 
  let trapLocs; //location of the traps. 
  let turns;
//   let timeElapse; icebox for now //how fast they win
  



  /*----- cached elements  -----*/
const markerEls = [...document.querySelectorAll('#board > div')];
const playAgainBtn = document.querySelector("button");

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
    winner = 0;

    makeTraps();
    render();
    // playAgainBtn.style.visibility = "hidden";

  }

function makeTraps() {
    //while traps.length < numTraps.num
    //generate two numbers 
    //board[x][y]
    //if statement to prevent them from being the same.
    trapCol = (Math.floor(Math.random() * 10));
    trapRow = (Math.floor(Math.random() * 10));
    trapLocs = board[trapCol][trapRow];
     board[trapCol][trapRow] = 0;  
     console.log(trapCol);
     console.log(trapRow);
    //  console.log(trapLoc);
     

}
function checkWinner() {
  if(board.contains(null)){
    render();
  } else {
    winner = -1;
  }
};

function handleChoice(evt) {
  const colIdx = evt.target.id.slice(1, 2);
  const rowIdx = evt.target.id.slice(3, 4);
      
if (colIdx === -1) return;  //guard
if (board[colIdx][rowIdx] === 0) {
     winner = 1;
    clickLoc = 1;
    
    } else {
      board[colIdx][rowIdx] = -1;
      score = +1;
      turns = +1;

    checkWinner();
    render();
  }
}

function render() {
  renderBoard();
  // renderMessage();
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
