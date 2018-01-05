//  randomly choosing words

// using node for wordGame.js and inquirer
var MovieDB = require('./wordGame');
var inquirer = require('inquirer');

//THIS FUNCTION TAKES IN THE USERPROMPT WHICH ASKS THEM TO TYPE IN THEIR FAVORITE ACTOR 
function userPrompt(ready) {
  inquirer.prompt([{
    //THIS IS MY PROMPT WHICH WILL BE THE FIRST THIS THE USER SEES UPON INITIATING THE GAME. 
    type: 'confirm',
    message: 'You ready to play hangman?',
    name: 'playGame'
  }]).then(function (inquirerResponse) {
    // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
    if (inquirerResponse.confirm) {
      console.log("Press any key to guess a letter\n");
      play();
    }
    else {
      console.log("\nCome back and play when you're ready.\n");
    }
  });
}

//THIS MAKES THE CALL TO THEMOVIEDB.ORG DATABASE TO GET THE MOVIE INFROMATION THAT WILL BE USED FOR THE GAME.
function getMovies(actorID, cb) {
  var wordArr = [];
    //THIS RULE HERE WILL EXCLUDE ANY TITLE WITH THESE TYPES OF CHARACTERS.
    if (/^[a-zA-Z ]*$/g.test(title)) {
      moviesArr.push(title);
    }
  }
  // function to pull random word from wordGame.js
  var randomNumber = Math.floor(Math.random() * moviesArr.length);
  randomNumber -= 1;
  var chosenWord = moviesArr[randomNumber];
  module.exports.chosenWord = chosenWord;
  cb();
};




//EXPORTS THE USERPROMPT FOR THE OTHER FILES TO USE. 
module.exports = {
  userPrompt
};


