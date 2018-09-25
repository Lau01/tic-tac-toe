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

// FIRST ATTEMP &&&&&&&&&&&&&
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



const checkWinO = function(element) {
  return element === 0;
};

const checkWinX = function(element) {
  return element === 1;
};

const ticTacToe = {
  boardState: [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ],

  turnCount: 0,

  checkDraw: function() {
    if (this.turnCount === 9) {
      console.log('draw')
      return this.gameContine = false;
    }
  },

  gameContinue: true,

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
        return this.gameContinue = false;
      } else if (this.boardState[i].every(checkWinO)) {
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
        return this.gameContinue = false;
      } else if (verticalArray.every(checkWinO)) {
        return this.gameContinue = false;
      };
    }
  },

  checkDiagTopLeft: function() {
    let diagonalArray1 = ['', '', ''];
    for (let i = 0; i < this.boardState[1].length; i++) {
      diagonalArray1[i] = this.boardState[i][i];

      if (diagonalArray1.every(checkWinX)) {
        return this.gameContinue = false;
      } else if (diagonalArray1.every(checkWinO)) {
        return this.gameContinue = false;
      };
    }
  },

  checkDiagTopRight: function() {
    let diagonalArray2 = ['', '', ''];
    for (let i = 0; i < 3; i++) { //3 should be length of array (row)
      diagonalArray2[i] = this.boardState[i][(this.boardState.length - 1)-i]; //use length-1 instead of 2

      if (diagonalArray2.every(checkWinX)) {
        return this.gameContinue = false;
      } else if (diagonalArray2.every(checkWinO)) {
        return this.gameContinue = false;
      };
    }
  },

}; // ticTacToe

const checkRound = function() {
  ticTacToe.checkRowWin();
  ticTacToe.checkColumnWin();
  ticTacToe.checkDiagTopLeft();
  ticTacToe.checkDiagTopRight();
  ticTacToe.checkDraw();
}

$(document).ready(function() {

  $('.box').on('click',function() {
    if (ticTacToe.gameContinue) {
      if (ticTacToe.turnCount % 2 === 0) {
        $(this).find('img:first').attr('class', 'displayX');
      } else {
        $(this).find('img:first').attr('class', 'displayO');
      }

      $(this).css('pointer-events', 'none');

      let rowArg = parseInt($(this)[0].className.split('')[1]);
      let colArg = parseInt($(this)[0].className.split('')[4]);
      ticTacToe.addPiece(rowArg, colArg);

      checkRound();

      console.log(ticTacToe.turnCount)

      if (!ticTacToe.gameContinue) {
        console.log('game over');
      }
    }
  })


}); //document ready


// %%%%%%%%%%%%%%%%%FOR DIVS %%%%%%%%%%%%%%%%%%%%%%%%%%
// $(document).ready(function() {
//
//   $('#box1').on('click', function() {
//     if ($('#image1').attr('class') == 'imageInBox') { //only run if class is initial no picture "imageInBox"
//       if (ticTacToe.turnCount % 2 === 0) {
//         $('#image1').attr('class', 'displayX'); //change class to X
//       } else if (ticTacToe.turnCount % 2 !== 0) {
//         $('#image1').attr('class', 'displayO') // change class to O
//       }
//       ticTacToe.addPiece(0,0);
//       ticTacToe.checkRowWin();
//       ticTacToe.checkColumnWin();
//       ticTacToe.checkDiagTopLeft();
//       ticTacToe.checkDiagTopRight();
//       ticTacToe.checkDraw();
//
//
//     } else {
//       return;
//     }
//   });
//
//   $('#box2').on('click', function() {
//     if ($('#image2').attr('class') == 'imageInBox') {
//       if (ticTacToe.turnCount % 2 === 0) {
//         $('#image2').attr('class', 'displayX');
//       } else if (ticTacToe.turnCount % 2 !== 0) {
//         $('#image2').attr('class', 'displayO')
//       }
//       ticTacToe.addPiece(0,1);
//       ticTacToe.checkRowWin();
//       ticTacToe.checkColumnWin();
//       ticTacToe.checkDiagTopLeft();
//       ticTacToe.checkDiagTopRight();
//       ticTacToe.checkDraw();
//     }
//   });
//
//   $('#box3').on('click', function() {
//     if ($('#image3').attr('class') == 'imageInBox') {
//       if (ticTacToe.turnCount % 2 === 0) {
//         $('#image3').attr('class', 'displayX');
//       } else if (ticTacToe.turnCount % 2 !== 0) {
//         $('#image3').attr('class', 'displayO')
//       }
//       ticTacToe.addPiece(0,2);
//       ticTacToe.checkRowWin();
//       ticTacToe.checkColumnWin();
//       ticTacToe.checkDiagTopLeft();
//       ticTacToe.checkDiagTopRight();
//       ticTacToe.checkDraw();
//     }
//   });
//
//   $('#box4').on('click', function() {
//     if ($('#image4').attr('class') == 'imageInBox') {
//       if (ticTacToe.turnCount % 2 === 0) {
//         $('#image4').attr('class', 'displayX');
//       } else if (ticTacToe.turnCount % 2 !== 0) {
//         $('#image4').attr('class', 'displayO')
//       }
//       ticTacToe.addPiece(1,0);
//       ticTacToe.checkRowWin();
//       ticTacToe.checkColumnWin();
//       ticTacToe.checkDiagTopLeft();
//       ticTacToe.checkDiagTopRight();
//       ticTacToe.checkDraw();
//     }
//   });
//
//   $('#box5').on('click', function() {
//     if ($('#image5').attr('class') == 'imageInBox') {
//       if (ticTacToe.turnCount % 2 === 0) {
//         $('#image5').attr('class', 'displayX');
//       } else if (ticTacToe.turnCount % 2 !== 0) {
//         $('#image5').attr('class', 'displayO')
//       }
//       ticTacToe.addPiece(1,1);
//       ticTacToe.checkRowWin();
//       ticTacToe.checkColumnWin();
//       ticTacToe.checkDiagTopLeft();
//       ticTacToe.checkDiagTopRight();
//       ticTacToe.checkDraw();
//     }
//   });
//
//   $('#box6').on('click', function() {
//     if ($('#image6').attr('class') == 'imageInBox') {
//       if (ticTacToe.turnCount % 2 === 0) {
//         $('#image6').attr('class', 'displayX');
//       } else if (ticTacToe.turnCount % 2 !== 0) {
//         $('#image6').attr('class', 'displayO')
//       }
//       ticTacToe.addPiece(1,2);
//       ticTacToe.checkRowWin();
//       ticTacToe.checkColumnWin();
//       ticTacToe.checkDiagTopLeft();
//       ticTacToe.checkDiagTopRight();
//       ticTacToe.checkDraw();
//     }
//   });
//
//   $('#box7').on('click', function() {
//     if ($('#image7').attr('class') == 'imageInBox') {
//       if (ticTacToe.turnCount % 2 === 0) {
//         $('#image7').attr('class', 'displayX');
//       } else if (ticTacToe.turnCount % 2 !== 0) {
//         $('#image7').attr('class', 'displayO')
//       }
//       ticTacToe.addPiece(2,0);
//       ticTacToe.checkRowWin();
//       ticTacToe.checkColumnWin();
//       ticTacToe.checkDiagTopLeft();
//       ticTacToe.checkDiagTopRight();
//       ticTacToe.checkDraw();
//     }
//   });
//
//   $('#box8').on('click', function() {
//     if ($('#image8').attr('class') == 'imageInBox') {
//       if (ticTacToe.turnCount % 2 === 0) {
//         $('#image8').attr('class', 'displayX');
//       } else if (ticTacToe.turnCount % 2 !== 0) {
//         $('#image8').attr('class', 'displayO')
//       }
//       ticTacToe.addPiece(2,1);
//       ticTacToe.checkRowWin();
//       ticTacToe.checkColumnWin();
//       ticTacToe.checkDiagTopLeft();
//       ticTacToe.checkDiagTopRight();
//       ticTacToe.checkDraw();
//     }
//   });
//
//   $('#box9').on('click', function() {
//     if ($('#image9').attr('class') == 'imageInBox') {
//       if (ticTacToe.turnCount % 2 === 0) {
//         $('#image9').attr('class', 'displayX');
//       } else if (ticTacToe.turnCount % 2 !== 0) {
//         $('#image9').attr('class', 'displayO')
//       }
//       ticTacToe.addPiece(2,2);
//       ticTacToe.checkRowWin();
//       ticTacToe.checkColumnWin();
//       ticTacToe.checkDiagTopLeft();
//       ticTacToe.checkDiagTopRight();
//       ticTacToe.checkDraw();
//     }
//   });
//
//
// }); //document.ready
