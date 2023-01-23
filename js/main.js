/*----- constants -----*/
const BOARD_ROWS = 8;
const BOARD_COLS = 8;



/*----- app's state (variables) -----*/
let game;
let board;

/*----- cached element references -----*/
const boardEl = document.getElementById('board');
const msgEl = document.getElementById('message');

/*----- classes -----*/
class Square {
  constructor(domElement) {
    this.domElement = domElement;
    this.value = null;
  }

static renderLookUp = {
        '1': 'black',
        '-1': 'red',
        'null': 'grey',
  };
  render() {
    this.domElement.style.backgroundColor = Square.renderLookup[this.value];
  }
}

class ChooseWiselyGame {
  constructor(boardElement, messageElement) {
    this.boardElement = boardElement;
    this.messageElement = messageElement;
    this.squareEls = [...boardElement.querySelectorAll('div')];

  }
  play() {
    this.turn = 1; //may not be necessary
    this.winner = null;
    this.squares = this.squareEls.map(el => new Square(el));
    this.render();
  }
  render() {
    console.log("Render Game..");
  }

  toString() {
    return `Tic Tac Toe / winner is  - > ${this.winner}`;
  }
  //may not need for this game. It's not like tic tac toe
  // static winningCombos = [

  // ];
}
//event listners 
// document.getElementById('board').addEventListener('click', handleChoice);
// playAgainBtn.addEventListener("click", init);


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
//   // TODO: Iterate over cells to plant mines
//   // TODO: Iterate over cells to compute adjMineCount
// }


initialize();

function initialize() {
  game = new ChooseWiselyGame(boardEl, msgEl);
  game.play();

}