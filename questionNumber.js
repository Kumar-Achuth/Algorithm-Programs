var prompt = require('prompt-sync')()
var utility = require('/home/bridgeit/Documents/kumar/algorithmPrograms/utility/utility.js')
 function questionNumber()
 {
     var first = 0;
     var number = prompt('Enter the number : ')
     utility.questionNumber(first, number)
 }
 questionNumber()
