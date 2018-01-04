var inquirer = require("inquirer");
var clear = require('clear');
var figlet = require("figlet");

var Stats = function(){
  this.correctQuotes = [];
  this.incorrectQuotes = [];
};

// Methods
Stats.prototype.addCorrect = function(quote){
  this.correctQuotes.push(quote);
};
Stats.prototype.addIncorrect = function(quote){
    this.incorrectQuotes.push(quote);
};
Stats.prototype.getWins = function(){
  return this.correctQuotes.length;
};
Stats.prototype.getLosses = function(){
  return this.incorrectQuotes.length;
};