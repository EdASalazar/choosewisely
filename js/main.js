  /*----- constants -----*/
  //AUDIO GOES HERE

  const COLORS =  {
      '0': 'darkgrey',     //will be an image
     '-1': 'lightgrey', //will be an image
     '1': 'black' //will be an image
  }



  /*----- state variables -----*/
  let board;
  let scores; //number of squares revealed.
  let reuslts; //no squares left accept for the traps. 
  let traps; //location of the traps. 
  let floodSquares; //spaces that are touch the trap 
  let turns;
//   let timeElapse; icebox for now //how fast they win
  



  /*----- cached elements  -----*/
const markerEls = [...document.querySelectorAll('#board > div')];
const playAgainBtn = document.querySelector('button');

  /*----- event listeners -----*/
document.getElementById('board').addEventListener('click', handleChoice);
playAgainBtn.addEventListener('click', init);

  /*----- functions -----*/
  init();

  //intialize 

  function init() {
    board = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];

    turns = 0;
    render();

  }

  function handleChoice(evt) {
    const colIdx = markerEls.indexOf(evt.target);
    if (colIdx === -1) return;  //guard 
    // const colArr = board[colIdx];
    console.log(colIdx);
    render();

  }

  function render () {
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

};
