
const randomInteger = function(number) {
  return Math.floor(Math.random() * number);
}

const checkWinO = function(element) {
  return element === 0;
};

const checkWinX = function(element) {
  return element === 1;
};

const createBoardArray = function(cellNumber) {
  let board =[];
  for (let i = 0; i < cellNumber; i++) {
    board[i] = new Array(cellNumber);
    for(let j = 0; j < cellNumber; j++) {
      board[i][j] = "";
    }
  }
  return board;
  console.table(board); // test it!
  console.table( ticTacToe.boardState );
};

const ticTacToe = {
  boardState: [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ],

  turnCount: 0,

  gameContinue: true,

  gameScoreX: 0,

  gameScoreO: 0,

  xWin: false,

  oWin: false,

  draw: false,

  checkDraw: function(cellAmount) {
    if (this.turnCount === Math.pow(cellAmount, 2) && this.gameContinue) {
      this.gameContinue = false;
      return this.draw = true;
    }
  },

  addO: function(row, column) {
    if (this.boardState[row][column] === '') {
      this.boardState[row][column] = 0;
      this.turnCount += 1;
    } else {
      return;
    }
  },

  addX: function(row, column) {
    if (this.boardState[row][column] === '') {
      this.boardState[row][column] = 1;
      this.turnCount += 1;
    } else {
      return;
    }
  },

  addPiece: function(row, column) {
    if (this.turnCount % 2 === 0) {
      this.addX(row, column);
    } else if (this.turnCount % 2 !== 0) {
      this.addO(row, column);
    }
  },

  checkRowWin: function() {
    for (let i = 0; i < this.boardState[1].length; i++) {
      if (this.boardState[i].every(checkWinX)) {
        this.xWin = true;
        return this.gameContinue = false;
      } else if (this.boardState[i].every(checkWinO)) {
        this.oWin = true;
        return this.gameContinue = false;
      };

    }
  },

  checkColumnWin: function () {
    for (let j = 0; j < this.boardState[1].length; j++) {
      let verticalArray = ['', '', ''];
      for (let i = 0; i < this.boardState[1].length; i++) {
        verticalArray[i] = this.boardState[i][j];
      }

      if (verticalArray.every(checkWinX)) {
        this.xWin = true;
        return this.gameContinue = false;
      } else if (verticalArray.every(checkWinO)) {
        this.oWin = true;
        return this.gameContinue = false;
      };
    }
  },

  checkDiagTopLeft: function(cellAmount) {
    let diagonalArray1 = new Array(cellAmount);
    for (let i = 0; i < cellAmount; i++) {
      diagonalArray1[i] = "";
    }
    for (let i = 0; i < this.boardState.length; i++) {
      diagonalArray1[i] = this.boardState[i][i];

      if (diagonalArray1.every(checkWinX)) {
        this.xWin = true;
        return this.gameContinue = false;
      } else if (diagonalArray1.every(checkWinO)) {
        this.oWin = true;
        return this.gameContinue = false;
      };
    }
  },

  checkDiagTopRight: function(cellAmount) {
    let diagonalArray2 = new Array(cellAmount);
    for (let i = 0; i < cellAmount; i++) {
      diagonalArray2[i] = "";
    }
    for (let i = 0; i < this.boardState.length; i++) {
      diagonalArray2[i] = this.boardState[i][(this.boardState.length - 1)-i];

      if (diagonalArray2.every(checkWinX)) {
        this.xWin = true;
        return this.gameContinue = false;
      } else if (diagonalArray2.every(checkWinO)) {
        this.oWin = true;
        return this.gameContinue = false;
      };
    }
  },

  gameCount: function () {
    if (this.xWin) {
      this.gameScoreX += 1;
    } else if (this.oWin) {
      this.gameScoreO += 1;
    }
  },

  gameRestart: function(cellAmount) {

    this.turnCount = 0;
    this.gameContinue = true;
    this.gameScoreX = 0;
    this.gameScoreO = 0;
    this.xWin = false;
    this.oWin = false;
    this.draw = false;
    this.aiCell= ["", ""];
    this.boardState = createBoardArray(cellAmount);
  },

  gameReplay: function(cellAmount) {
    this.turnCount = 0;
    this.gameContinue = true;
    this.xWin = false;
    this.oWin = false;
    this.draw = false;
    this.boardState = createBoardArray(cellAmount)
  },

  aiTurn: function(cellAmount) {
    let rowPos = randomInteger(cellAmount);
    let colPos = randomInteger(cellAmount);

    while (this.boardState[rowPos][colPos] !== "") {
      rowPos = randomInteger(cellAmount);
      colPos = randomInteger(cellAmount);
    }

    this.aiCell[0] = rowPos;
    this.aiCell[1] = colPos;

    this.addPiece(rowPos, colPos);
  },

  aiCell: ["", ""],
}; // ticTacToe

/////////////////////jQuery/////////////////////////////
$(document).ready(function() {

  let changedName = false;

  let changedCell = false;

  //player 1 is name even if empty input
  const player1Name = function() {
    if (!changedName) {
      return 'Player 1';
    } else {
      return $('#namePlayer1').val();
    }
  };

  const player2Name = function() {
    if (!changedName) {
      return 'Player 2';
    } else {
      return $('#namePlayer2').val();
    }
  };

  //function to check round status and updates some html
  const checkRound = function(cellAmount) {
    ticTacToe.checkRowWin();
    ticTacToe.checkColumnWin();
    ticTacToe.checkDiagTopLeft(cellAmount);
    ticTacToe.checkDiagTopRight(cellAmount);
    ticTacToe.checkDraw(cellAmount);
    ticTacToe.gameCount();

    if (ticTacToe.turnCount % 2 === 0) {
      $('#whoWins').html(`${player1Name()}'s turn!`);
    } else {
      $('#whoWins').html(`${player2Name()}'s turn!`);
    }

    if (ticTacToe.xWin) {
      $('#whoWins').html(`${player1Name()} Wins!`).css('color', '#007bff');
    } else if (ticTacToe.oWin) {
      $('#whoWins').html(`${player2Name()} Wins!`).css('color','#dc3545');
    } else if (ticTacToe.draw) {
      $('#whoWins').html('DRAW!').css('color', '#6610f2');
    } else {
      $('#whoWins').css('color', '#000000');
    }

    $('#player1Score').html(`${ticTacToe.gameScoreX}`);
    $('#player2Score').html(`${ticTacToe.gameScoreO}`);

    if (!ticTacToe.gameContinue) {
      $('#replayButton').attr('disabled', false);
    }

  };

  //used to change UI on input
  const cellUiChange = function() {
    $('#cellUi').html(`by ${$('#cellInput').val()} cells`)
    changedCell = true;
  };

  const createRowDivs = function(cellAmount) {
    for (i = 0; i < cellAmount; i++) {
      $('#container').append(`<div class='row' id='row${i}'></div>`)
    }
  }

  // changes height and width dynamically
  const createColDivs = function(cellAmount) {
    for (i = 0; i < cellAmount; i++) {
      for(j = 0; j < cellAmount; j++) {
      $(`#row${i}`).append(`<div row='${i}' col='${j}' class='col box rounded'></div>`)
      }
    }
    $('.row').css('height', `${100/cellAmount}%`);
    $('.box').css('width', `${100/cellAmount}%`);
  };

  // resets everything to default except score count.
  const cleanUp = function(cellAmount) {
    ticTacToe.gameRestart(cellAmount);
    $('.box').css('pointer-events', 'auto');
    $('#whoWins').html(`${player1Name()}'s Turn`);
    $('#whoWins').css('color', '#000000')
    $('#container').empty();
    createRowDivs(cellAmount);
    createColDivs(cellAmount);
  }

  //on click

  // event delegation: attach a click handler to the whole document,
  // and the browser will check *at the point of receiving the click*
  // if the element clicked actually matches the selector - if so,
  // your click handler function will run
  $(document).on('click', '.box', function() {

    if (ticTacToe.gameContinue) {
      //Picks random image to print
      let numberPicker = randomInteger(3);
      ticTacToe.turnCount % 2 === 0 ?
      $(this).addClass(`displayX${numberPicker + 1}`):
      $(this).addClass(`displayO${numberPicker + 1}`)

      //prevent further clicks
      $(this).css('pointer-events', 'none');

      // grab coords of box clicked
      let rowArg = parseInt($(this).attr('row'));
      let colArg = parseInt($(this).attr('col'));
      ticTacToe.addPiece(rowArg, colArg);

      checkRound($('#cellInput').val());

      //"ai"
      if ($('#aiButton').prop('checked') && ticTacToe.gameContinue) {
        ticTacToe.aiTurn($('#cellInput').val());
        let randomRow = ticTacToe.aiCell[0];
        let randomCol = ticTacToe.aiCell[1]
        //prints img and turns off pointer events in div
        $(`.box[row="${randomRow}"][col="${randomCol}"]`).addClass(`displayO${randomInteger(3) + 1}`)
        $(`.box[row="${randomRow}"][col="${randomCol}"]`).css('pointer-events', 'none');
        ticTacToe.aiCell[0] = "";
        ticTacToe.aiCell[1] = "";
        checkRound($('#cellInput').val());

      }
    }


  }); //box click function

  //restart everything other than player names (needs fix)
  $('#restartButton').on('click', function() {
    cleanUp(3);
    $('#player1Score').html('0');
    $('#player2Score').html('0');
  }); //restartButton function

  //modal save setting button. when pressed just hides with inputs still there. if cell number changed, call function to restartGame
  $('#saveSettings').on('click', function() {
    changedName = true;
    $('#xName').html(`${player1Name()}`)
    $('#oName').html(`${player2Name()}`)
    if (changedCell) {
      cleanUp($('#cellInput').val());
    }

    if ($('#aiButton').prop('checked')) {
      cleanUp($('#cellInput').val());
      $('#player1Score').html('0');
      $('#player2Score').html('0');
    }
    $('#exampleModal').modal('hide');
  })

  $('.humanAiButton').on('click', function() {
    $(this).prop('checked', true);
  })

  $('#aiButton').on('click', function() {
    $('#namePlayer2').prop('disabled', true);
    $('#namePlayer2').val('Player 2');
  })

  $('#humanButton').on('click', function() {
    $('#namePlayer2').prop('disabled', false);
  })

  $('#defaultButton').on('click', function() {
    $('#namePlayer1').val('Player 1');
    $('#namePlayer2').val('Player 2');
    $('#humanButton').prop('checked', true);
    $('#cellInput').val('3');
    cleanUp(3);
    $('#player1Score').html('0');
    $('#player2Score').html('0');
    $('#cellUi').html(`by ${$('#cellInput').val()} cells`);
    $('.alert').addClass('invisible');
    $('#namePlayer2').prop('disabled', false);
  })

  $('#replayButton').on('click', function() {
    ticTacToe.gameReplay($('#cellInput').val());
    $('#container').empty();
    createRowDivs($('#cellInput').val());
    createColDivs($('#cellInput').val());
    $('.box').css('pointer-events', 'auto');
    $('#whoWins').html(`${player1Name()}'s Turn`);
    $('#replayButton').attr('disabled', true);
    $('#whoWins').css('color', '#000000');
  });

  $('#cellInput').on('input', function() { //changes cell UI settings on input
    cellUiChange()
    if ($(this).val() >= 3 && $(this).val() <= 50) {
      $('.alert').removeClass('visible');
      $('.alert').addClass('invisible');
      $('#saveSettings').attr('disabled', false);
    } else {
      $('.alert').removeClass('invisible');
      $('.alert').addClass('visible');
      $('#saveSettings').attr('disabled', true);
    }
  });


}); //document ready
