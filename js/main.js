/*----- constants -----*/
const BOARD_ROWS = 8;
const BOARD_COLS = 8;



/*----- app's state (variables) -----*/
let game;
let baord;

/*----- cached element references -----*/
const boardEl = document.getElementById('board');
const msgEl = document.getElementById('message');

/*----- classes -----*/
class ChooseWiselyGame {
  constructor(boardElement, messageElement) {
    this.boardElement = boardElement;
    this.messageElement = messageElement;
  }
}

// class Square {
//   constructor(domElement) {
//     this.domElement = domElement;
//     this.value = null;
//   }

/*----- functions -----*/
// init();

// function init() {
//   board = [];
//   for (let rowIdx = 0; rowIdx < BOARD_ROWS; rowIdx++) {
//     board[rowIdx] = [];
//     for (let colIdx = 0; colIdx < BOARD_COLS; colIdx++) {
//       board[rowIdx].push({
//         isMine: false,  // TBD later
//         isRevealed: false,
//         isFlagged: false,
//         adjMineCount: null,  // Compute after mines are determined
//         rowIdx,
//         colIdx,
//       });
//     }
//   }
  // TODO: Iterate over cells to plant mines
  // TODO: Iterate over cells to compute adjMineCount
// }


initialize();

function initialize() {
  game = new ChooseWiselyGame(boardEl);


}