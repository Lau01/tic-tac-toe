// Project #0: The Game
// Overview
// Let's start out with something fun - a game!
//
// We'll be making Tic Tac Toe, a game that takes seconds to learn but minutes to master! Everyone will get a chance to be creative, and work through some really tough programming challenges to get your feet wet in the world of web development.
//
// "hand me your phone," load up the game, and play a quick round!
//
// You will be working individually for this project, but we'll be guiding you along the process and helping as you go. Show us what you've got!
//
// What You've Learned
// By the time you submit this project, you will have covered new ground in many of the big themes of the course:
//
// Command Line: Practice interacting with the computer and navigating the filesystem from the command line.
// Source Control: Manage and interact with a git repository to store changes to code.
// Programming Fundamentals: Work with array, objects, event handlers & callbacks, while learning how to strategically solve problems and resolve errors.
// Web Fundamentals: Learn how communication happens over the internet, and how to structure, style, and animate documents within a browser. Also learn how to respond to actions taken by your users and the data they input into the browser.
// Browser Applications: Dive into CSS and learn how to use libraries and frameworks to get lots of style for free.
// Deployment: Host a static web site in a managed hosting environment.
// Products and Teams: Document your code and your code repository so others understand what you've built.
// Big Goals
// Build a web application from scratch, without a starter codebase
// Use your programming skills to map out the game logic for a simple game like Tic Tac Toe
// Separate HTML, CSS, and JavaScript files in your application
// Build an application to a spec that someone else gives you
// Build a dynamic game that allows two players to compete
// Craft a README.md file that explains your app to the world
// Technical Requirements
// Your app must:
//
// Render a game board in the browser
// Switch turns between X and O (or whichever markers you select); your game should prevent users from playing a turn into a square that is already occupied
// Visually display which side won if a player gets three in a row or show a draw/"cat’s game" if neither wins
// Include separate HTML / CSS / JavaScript files
// Stick with KISS (Keep It Simple Stupid) and DRY (Don't Repeat Yourself) principles
// Use Javascript with jQuery for DOM manipulation
// Deploy your game online, where the rest of the world can access it
// Use semantic markup for HTML and CSS (adhere to best practices)
// Bonus
// These are for extra credit! Don't focus on these until you've hit the core requirements.
//
// Keep track of multiple game rounds with a win counter
// Allow players to customize their tokens (X, O, name, picture, etc)
// Get inventive with your styling, e.g. use hover effects or animations to spiff things up
// Use LocalStorage to persist data locally to allow games to continue after page refresh or loss of internet connectivity
// Support custom board sizes: default is 3x3 but you could allow users to choose a larger board
// Support networked multiplayer: https://www.firebase.com/ has a nice quickstart guide
// TRICKIEST: Create an AI opponent: teach Javascript to play an unbeatable game against you
// Start by implementing a few simple rules which can be easily checked and are always good moves, such as "always take the center square if it's available" - you can google these rules for yourself
// You can build in as many AI player rules as you like but you'll quickly end up with a longwinded list of if-else-if statements. To make a truly unbeatable AI opponent you'll need to look into implementing an algorithm like MiniMax - for advanced/bold students only!
// Necessary Deliverables
// A working game, built by you, hosted somewhere on the internet
// A link to your hosted working game in the URL section of your Github repo
// A git repository hosted on Github, with a link to your hosted game, and frequent commits dating back to the very beginning of the project
// A readme.md file with explanations of the technologies used, the approach taken, installation instructions, unsolved problems, etc.
// On Friday of project week everyone individually presents their project to the class, with an overview of the app and a brief code tour of the highlights.
// Suggested Ways to Get Started
// Break the project down into different components (data, presentation, views, style, DOM manipulation) and brainstorm each component individually. Use whiteboards!
// Use your Development Tools (console.log, inspector, alert statements, etc) to debug and solve problems
// Work through the lessons in class, ask questions and come to office hours when you need to. Think about adding relevant code to your Tic Tac Toe game each night, instead of, you know... procrastinating.
// Commit early, commit often. Don’t be afraid to break something because you can always go back in time to a previous version.
// Check out Tutorial and Documentation resources (jQuery tutorial) at home to better understand what you’ll be getting into.
// Don’t be afraid to write code that you know you will have to remove later. Create temporary elements (buttons, links, etc) that trigger events if real data is not available. For example, if you’re trying to figure out how to change some text when the game is over but you haven’t solved the win/lose game logic, you can create a button to simulate that until then.
// Useful Resources
// MDN Javascript Docs (a great reference for all things Vanilla Javascript)
// jQuery Docs
// Github Pages (for hosting your game)
// If You Finish Early
// We invite you to work on any or all of the following:
//
// A more advanced game (Memory? Battleship? Connect Four?)
// A Vue.js version of the game (in place of the jQuery version)
// Your Github portfolio site
// Any other front-end project that interests you

// FIRST ATTEMPT &&&&&&&&&&&&&
// const ticTacToe = {
//   cells: [
//     0, 0, 0,
//     0, 0, 0,
//     0, 0, 0,
//   ],
//
//   turnState: false, // false = circle. true = cross.
//
//   diagonalWin1: function() {
//     let runningCount = 0;
//     for (let i = 0; i < this.cellsX.length; i+=4) {
//       runningCountO += this.cells[i];
//     }
//
//     if (runningCount === 3) {
//       console.log("you win");
//     } else {
//       console.log("No one has won yet")
//     }
//   },
// }
//
// ticTacToe.addState(0);
// ticTacToe.addState(4);
// ticTacToe.addState(8);

// $(document).ready(function() {
//
//   $('#box1').on('click', function() {
//     $('#image1').attr('class', 'displayX');
//   });
//
//   $('#box2').on('click', function() {
//     $('#image2').attr('class', 'displayX');
//   });
//
//   $('#box3').on('click', function() {
//     $('#image3').attr('class', 'displayX');
//   });
//
//   $('#box4').on('click', function() {
//     $('#image4').attr('class', 'displayX');
//   });
//
//   $('#box5').on('click', function() {
//     $('#image5').attr('class', 'displayX');
//   });
//
//   $('#box6').on('click', function() {
//     $('#image6').attr('class', 'displayX');
//   });
//   $('#box7').on('click', function() {
//     $('#image7').attr('class', 'displayX');
//   });
//   $('#box8').on('click', function() {
//     $('#image8').attr('class', 'displayX');
//   });
//   $('#box9').on('click', function() {
//     $('#image9').attr('class', 'displayX');
//   });
//
// }); //document.ready

// Attempt at ROW/COLS
// const ticTacToe = {
//   column: [1, 1, 1],
//   row:[1, 1, 0],
//
//   checkRowWin: function() {
//     let colTotalArray = this.column.reduce(function(total, num) {
//       return total + num;
//     })
//     for (i = 0; i < this.row.length; i++) {
//       if (colTotalArray === 3 && this.row[i] === 1) {
//         console.log(`Winner on row ${i+1}`);
//       }
//     }
//   },
//
//   checkColumnWin: function() {
//     let rowTotalArray = this.row.reduce(function(total, num) {
//       return total + num;
//     })
//     for (i = 0; i < this.column.length; i++) {
//       if (rowTotalArray === 3 && this.column[i] === 1) {
//         console.log(`Winner on column ${i+1}`);
//       }
//     }
//   },
//
//   checkDiagonalWin: function() {
//     let rowTotalArray = this.row.reduce(function(total, num) {
//       return total + num;
//     });
//     let colTotalArray = this.column.reduce(function(total, num) {
//       return total + num;
//     });
//
//     if
//
//   }
//
// }

// const sumArray = function(array) {
//   array.reduce(function(elementAccrue, num) {
//     return elementAccrue + num;
//   })
// };

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

    console.log(rowPos);
    console.log(colPos);

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

  // also adds empty img in divs. changes height and width dynamically
  const createColDivs = function(cellAmount) {
    for (i = 0; i < cellAmount; i++) {
      for(j = 0; j < cellAmount; j++) {
      $(`#row${i}`).append(`<div row='${i}' col='${j}' class='col box rounded'></div>`)
      }
    }
    $('.col.box.rounded').append("<img class=imageInBox/>");
    $('.row').css('height', `${100/cellAmount}%`);
    $('.box').css('width', `${100/cellAmount}%`);
  };

  $('#cellInput').on('input', function() {cellUiChange()}); //changes cell UI settings on input

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
      $(this).find('img:first').attr('class', `displayX${numberPicker + 1}`):
      $(this).find('img:first').attr('class', `displayO${numberPicker + 1}`)

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
        $(`.box[row="${randomRow}"][col="${randomCol}"]`).find('img:first').attr('class', `displayO${randomInteger(3) + 1}`)
        $(`.box[row="${randomRow}"][col="${randomCol}"]`).css('pointer-events', 'none');
        ticTacToe.aiCell[0] = "";
        ticTacToe.aiCell[1] = "";
        checkRound($('#cellInput').val());

      }
    }


  }); //box click function

  //restart everything other than player names (needs fix)
  $('#restartButton').on('click', function() {
    ticTacToe.gameRestart($('#cellInput').val());
    $('.box img').attr('class', 'imageInBox');
    $('.box').css('pointer-events', 'auto');
    $('#whoWins').html(`${player1Name()}'s Turn`);
    $('#player1Score').html('0');
    $('#player2Score').html('0');
    $('#whoWins').css('color', '#000000')
    $('#container').empty();
    createRowDivs($('#cellInput').val());
    createColDivs($('#cellInput').val());
  }); //restartButton function

  //modal save setting button. when pressed just hides with inputs still there. if cell number changed, call function to restartGame
  $('#saveSettings').on('click', function() {
    changedName = true;
    if (changedCell) {
      $('#restartButton').trigger('click');
    }
    $('#exampleModal').modal('hide');
  })

  $('#replayButton').on('click', function() {
    ticTacToe.gameReplay($('#cellInput').val());
    $('.box img').attr('class', 'imageInBox');
    $('.box').css('pointer-events', 'auto');
    $('#whoWins').html(`${player1Name()}'s Turn`);
    $('#replayButton').attr('disabled', true);
    $('#whoWins').css('color', '#000000')
  });

  // //disabls difficulty buttons depending on human or AI checked box. dont need yet.
  // $('.humanAiButton').on('click', function () {
  //   if ($('#aiButton').prop('checked')) {
  //     $('.difficultyButtons').prop('disabled', false);
  //   } else {
  //     $('.difficultyButtons').prop('disabled', true);
  //   }
  // });


}); //document ready
