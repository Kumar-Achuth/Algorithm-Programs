var prompt = require('prompt-sync')()
var utility = require('/home/bridgeit/Documents/kumar/algorithmPrograms/utility/utility.js')
/**
     * @description : takes a command­line argument N, asks you to think of a number
between 0 and N­1, where N = 2^n, and always guesses the answer with n
questions.
@param number 
     */
 function questionNumber()
 {     var number = prompt('Enter the number : ')  // take user input for the number
     utility.questionNumber(number)
 }
 questionNumber()
