  /*----- constants -----*/
  //AUDIO GOES HERE

  const TILES =  {
      'rune': 'darkgrey',     //will be an image
     'floor': 'lightgrey', //will be an image
     'trap': 'black' //will be an image
  }



  /*----- state variables -----*/
  let scores; //number of squares revealed.
  let reuslts; //no squares left accept for the traps. 
  let traps; //location of the traps. 
  let floodSquares; //spaces that are touch the trap 
  let turns;
//   let timeElapse; icebox for now //how fast they win
  



  /*----- cached elements  -----*/
const markerEls = [...document.querySelectorAll('#board > div')];

  /*----- event listeners -----*/
document.getElementById('board').addEventListener('click', handleChoice);
//reset button

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
    const colArr = board[colIdx];
    

  }