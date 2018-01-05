//word.js SHOULD CONTAIN ALL OF THE METHODS WHICH WILL CHECK LETTERS GUESSED VERSUS THE RANDOM WORD SELECTED.

//THIS WILL REQUIRE THE "letter.js" FILE TO BE USED. 
var Letter = require('./letter.js');

//THIS IS MY CONSTRUCTOR FUNCTION WHICH HANDLES THE TRYLEFT AND TAKES IN CHOSEN WORD 
//ALSO HOLDS IN THE GUESSES AND THE LETTERS AS WELL
var Word = function(chosenWord) {
    this.trysLeft = 10;
    this.chosenWord = chosenWord;
    this.letters = [];
    this.guesses = [];
    for (var i = 0; i < this.chosenWord.length; i++) {
        this.letters.push(new Letter.Letter(this.chosenWord[i]));
    }
};