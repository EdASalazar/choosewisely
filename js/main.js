/*----- constants -----*/
const BOARD_ROWS = 10;
const BOARD_COLS = 10;
const MINE_PCT = 20;


/*----- app's state (variables) -----*/
let game;
let board;
let turn;
let clickedCell;
let boardArrayThing = [];
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
      const clickCol = parseInt(evt.target.id.slice(1, 3));
      const clickRow = parseInt(evt.target.id.slice(5, 7));
      clickedCell = board[clickRow][clickCol];
      this.resolveClick();
      this.winner = this.getWinner();



     
      // console.log(clickedCell);
     
  
       

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
    
  resolveClick() {
    if (clickedCell.isMine === true){
      console.log(dead);
    };
  }
    
    
  }
  

    
    /*----- functions -----*/
    
    
    init();
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

  function computeAdjMineCount(board) {
    let neigbors = [];
    let boardLocation;
//row
for (let i = 0; rowIdx < BOARD_ROWS; i++){
  //column
  for (let j = 0; j < BOARD_COLS; j++) {
    boardArrayThing.push(board[i][j]);
  }
      // function checkDiagonalMineNWSE(colIdx, rowIdx) {
      //   const adjCountNW = countAdjacent(colIdx, rowIdx, -1, 1)
      //   const adjCountSE = countAdjacent(colIdx, rowIdx, 1, -1)
      // }



// //   board[rowIdx].adjMineCount +=1
// // };
// };
  // TODO: Iterate over cells to compute adjMineCount
}


initialize();

function initialize() {
  game = new ChooseWiselyGame(boardEl, msgEl);
  game.play();

}