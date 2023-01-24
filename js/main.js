/*----- constants -----*/
const BOARD_ROWS = 10;
const BOARD_COLS = 10;
const MINE_PCT = 20;


/*----- app's state (variables) -----*/
let game;
let board;
let turn;
let clickedCell;
let boardArrayThing = []; //delete eventually
let newBoard; //delete eventually
// let cells; //maybe

/*----- cached element references -----*/
const boardEl = document.getElementById('board');
const msgEl = document.getElementById('message');
document.querySelector('button')
.addEventListener('click', init);

/*----- classes -----*/
class Square {
  constructor(domElement) {
    this.domElement = domElement;
    this.value = null;
  }


  static renderLookup = {
    '1': 'blue',
    '-1': 'red',
    'null': 'darkgrey'
  }
  render() {
    this.domElement.style.backgroundColor = Square.renderLookup[this.value];
  }
}

// class Cell {
//   constructor(rowIdx, colIdx) {
//     board[rowIdx].push({ 
//     this.isMine = Math.random() < (MINE_PCT / 100);
//     this.isRevealed = false;
//     isFlagged = false,
//     adjMineCount = null,  // Compute after mines are determined
//     rowIdx,
//     colIdx,
//   }
// }
// }

class ChooseWiselyGame {
  constructor(boardElement, messageElement) {
    this.boardElement = boardElement;
    this.messageElement = messageElement;
    this.squareEls = [...boardElement.querySelectorAll('div')];
    this.boardElement.addEventListener('click', (evt) => {
      const idx = this.squareEls.indexOf(evt.target);
      if (idx === -1 || this.squares[idx].value || this.winner) return;
      this.squares[idx].value = this.turn;  
      this.turn += 1;
      const clickCol = parseInt(evt.target.id.slice(1, 3));
      const clickRow = parseInt(evt.target.id.slice(5, 7));
      clickedCell = board[clickRow][clickCol];
      // this.resolveClick();
      this.winner = this.getWinner();
      
      // console.log(clickedCell.isMine);
      // if (clickedCell.isMine === true){
      //   loss === true;
      //   render
      // } else if {  }

      this.render();
      
    });
  }

  play() {
    // this.turn = 1; //may not be necessary
    this.winner = null;
    this.squares = this.squareEls.map(el => new Square(el));
    this.render();
  }
  
  getWinner() {
 
    }
    
  render() {
    this.squares.forEach(square => square.render());
      
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
      // console.log(cell)
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


 

initialize();

function initialize() {
  game = new ChooseWiselyGame(boardEl, msgEl);
  game.play();

}