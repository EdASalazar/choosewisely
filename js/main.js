/*----- constants -----*/
const BOARD_ROWS = 10;
const BOARD_COLS = 10;
const MINE_PCT = 20;


/*----- app's state (variables) -----*/
let game;
let board;
let turn;
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
      this.winner = this.getWinner();
      const colIdx = evt.target.id.slice(1, 3);
      const rowIdx = evt.target.id.slice(5, 7);
      console.log(colIdx);
      
       

      this.render();
      console.log(evt.target);
    });
  }
  play() {
    // this.turn = 1; //may not be necessary
    this.winner = null;
    this.squares = this.squareEls.map(el => new Square(el));
    this.render();
  }

  getWinner() {

    //(if idx === idx of land mine){
      //game over
      // if (this.squares.some(square => square.value === null)) return null;
      // return 'Win';
    }

  render() {
    this.squares.forEach(square => square.render());
 
// Render the cells
// board.forEach(function(rowArr) {
//   rowArr.forEach(function(cell) {
//     cell.render();
//   });
// });

    // for (let rowIdx = 0; rowIdx < BOARD_ROWS; rowIdx++) {
    //   board[rowIdx] = [];
    //   for (let colIdx = 0; colIdx < BOARD_COLS; colIdx++) {
        // if(cell.isRendered && cellisMine){game over you lose};
        //if(cell.isRendered){render the cell.adjMineCount};
        //else render 'blank'
    //   }
    // }

  }

  toString() {
    return `${this.winner} Chose Wisely`;
  }

}

// class Cell {
//   constructor(rowIdx, colIdx) {
//     this.isMine = Math.random() < (MINE_PCT / 100);
//     this.isRevealed: false;
//     ...
//   }

//   computeAdjMineCount() {
//     let neighbors = [];
//     // TODO: Push each neighboring cell into neighbors
//     let count = 0;
//     // TODO: Loop through the cells in neighbors
//     //       and increment count if the cell is a mine
//     this.adjMineCount = count;
//   }

//   render() {
//     // TODO: Put the rendering logic here
//   }
// }
/*----- functions -----*/
 

init();
//from Jim's post 
function init() {
  board = [];
  for (let rowIdx = 0; rowIdx < BOARD_ROWS; rowIdx++) {
    board[rowIdx] = [];
    for (let colIdx = 0; colIdx < BOARD_COLS; colIdx++) {
      board[rowIdx].push({ //could switch the below into an object. 
        isMine: Math.random() < (MINE_PCT / 100),
        isRevealed: false,
        isFlagged: false,
        adjMineCount: null,  // Compute after mines are determined
        rowIdx,
        colIdx,
      
      });
    }
//function set adjct mine count (helper function)

  }
//   for (let rowIdx = 0; rowIdx < BOARD_ROWS; rowIdx++)
//  board[rowIdx] = [];
// for (let colIdx = 0; colIdx < BOARD_COLS; colIdx++) {
	// document.querySelectorAll("sectin:first-child")
  // .setAttribute('id', 323)
// };
  // TODO: Iterate over cells to plant mines
  // TODO: Iterate over cells to compute adjMineCount
}


initialize();

function initialize() {
  game = new ChooseWiselyGame(boardEl, msgEl);
  game.play();

}