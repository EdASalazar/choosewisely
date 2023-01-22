/*----- constants -----*/
const BOARD_ROWS = 8;
const BOARD_COLS = 8;



/*----- app's state (variables) -----*/
let game;

/*----- cached element references -----*/
const boardEl = document.getElementById('board');
const msgEl = document.getElementById('message');

/*----- classes -----*/

/*----- functions -----*/

init();

function init() {
  board = [];
  for (let rowIdx = 0; rowIdx < BOARD_ROWS; rowIdx++) {
    board[rowIdx] = [];
    for (let colIdx = 0; colIdx < BOARD_COLS; colIdx++) {
      board[rowIdx].push({
        isMine: false,  // TBD later
        isRevealed: false,
        isFlagged: false,
        adjMineCount: null,  // Compute after mines are determined
        rowIdx,
        colIdx
        board[rowIdx].push({
          isMine: Math.random() < (MINE_PCT / 100),
          isRevealed: false,
      });
    }
  }
  // TODO: Iterate over cells to plant mines
  /



initialize();

function initialize() {

}