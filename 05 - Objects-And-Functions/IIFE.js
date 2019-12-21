// Immediately Invoked Function Expressions

/* 
// function declaration
function game() {
    var score = Math.random() * 10;

    console.log(score >= 5);
}

game();
 */

// This is a small game where second player always win

// anonymous function iife
(function () {
  var score = Math.random() * 10;
  console.log(score >= 5);
})();

// console.log(score); // show error because score is not a global var

(function (goodLuck) {
  var score = Math.random() * 10;
  console.log(score >= 5 - goodLuck);
})(5);