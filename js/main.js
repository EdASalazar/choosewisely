/*----- constants -----*/
const BOARD_ROWS = 10;
const BOARD_COLS = 10;
const MINE_PCT = 20;



/*----- app's state (variables) -----*/
let game;
let board;
let turn;
let clickedSquare;


/*----- cached element references -----*/
const boardEl = document.getElementById('board');
const msgEl = document.getElementById('message');
const resetBtn = document.querySelector('button').addEventListener('click', init);
// console.log(resetBtn);


/*----- classes -----*/

class Square {
  constructor(domElement) {
    this.domElement = domElement;
    this.value = null;
    
  }

  render() {} 
}

class ChooseWiselyGame {
  constructor(boardElement, messageElement) {
    this.boardElement = boardElement;
    this.messageElement = messageElement;

    this.squareEls = [...boardElement.querySelectorAll('div')];
//right click
    this.boardElement.addEventListener('contextmenu', (evt) => {
      const idx = this.squareEls.indexOf(evt.target);
      if (idx === -1) return;
      this.turn += 1;

      let evtSplit = evt.target.id.split(" ");
      let rowIdx = evtSplit[0].replace("r", "");
      let colIdx = evtSplit[1].replace("c", "");
      clickedSquare = board[rowIdx][colIdx];
      
      if(clickedSquare.isFlagged === false) {
        clickedSquare.isFlagged = true;
       } else if (clickedSquare.isFlagged = true) {
        clickedSquare.isFlagged = false;
       };
       this.render();
    });
//left click
    this.boardElement.addEventListener('click', (evt) => {
      const idx = this.squareEls.indexOf(evt.target);
      if (idx === -1) return; 
      this.turn += 1;
      let evtSplit = evt.target.id.split(" ");
      let rowIdx = evtSplit[0].replace("r", "");
      let colIdx = evtSplit[1].replace("c", "");
      clickedSquare = board[rowIdx][colIdx];
      this.resolveClick();
      this.render();
      
    });
  }

  
resolveClick() {
  if (clickedSquare.isMine === true) {
    endGame();
  } else if (clickedSquare.isFlagged === true || clickedSquare.isRevealed === true) {
  }  else if 
    (clickedSquare.isFlagged === false && clickedSquare.isRevealed === false) {
      clickedSquare.isRevealed = true; 
  }
}
//endGame();
  play() {
    this.squares = this.squareEls.map(el => new Square(el));
    this.render();
  }
      
render() {
  this.squares.forEach(square => square.render());

  board.forEach(function(rowArr, rowIdx) {
    rowArr.forEach(function(square, colIdx) {
      let cellEl = document.getElementById(`r${rowIdx} c${colIdx}`) 
        if (square.isFlagged === true) {
          cellEl.classList.add('flagged');
        } else if (square.isFlagged === false) {
         cellEl.classList.remove('flagged');
         if (square.isMine === true && square.isRevealed === true) {
           cellEl.classList.add('revealed-mine');
         } else if (square.isRevealed === true && square.isMine === false) {
          cellEl.classList.add('revealed');

        }
      } 
     }); 
    })
   }
}
      
    /*----- functions -----*/
    
    init();

    function init() {
      board = [];
      for (let rowIdx = 0; rowIdx < BOARD_ROWS; rowIdx++) {
        board[rowIdx] = [];
        for (let colIdx = 0; colIdx < BOARD_COLS; colIdx++) {
          board[rowIdx].push({
            isMine: Math.random() < (MINE_PCT / 100),
            isRevealed: false,
            isFlagged: false,
            adjMineCount: null,  
            rowIdx,
            colIdx
          });
        }
      } 

      for (let rowIdx = 0; rowIdx < BOARD_ROWS; rowIdx++) {
        for (let colIdx = 0; colIdx < BOARD_COLS; colIdx++) {
          const cell = board[rowIdx][colIdx];
          cell.neighbors = getNeighbors(cell);
          cell.adjMineCount = cell.neighbors.reduce((count, cell) => cell.isMine ? count + 1 : count, 0);

        }
      }
    }
    
    function getNeighbors(cell) {
      const neighbors = [];
      for (let rowOffset = -1; rowOffset < 2; rowOffset++) {
        for (let colOffset = -1; colOffset < 2; colOffset++) {
          const rowIdx = cell.rowIdx + rowOffset;
          const colIdx = cell.colIdx + colOffset;
          if (
            !(rowIdx === cell.rowIdx && colIdx === cell.colIdx) &&
            rowIdx >= 0 && rowIdx < board.length &&
            colIdx >= 0 && colIdx < board[0].length
          ) neighbors.push(board[rowIdx][colIdx]);
        }
      }
      return neighbors;
    }
function adjMineText(){}    




  initialize();
    
    function initialize() {
      game = new ChooseWiselyGame(boardEl, msgEl);
      game.play();
    
    }

function endGame() {

  for (let rowIdx = 0; rowIdx < BOARD_ROWS; rowIdx++) {
    for (let colIdx = 0; colIdx < BOARD_COLS; colIdx++) {
      const cell = board[rowIdx][colIdx];
      cell.isRevealed = true;
    }
  }
}

    
 