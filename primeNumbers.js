var prompt = require('prompt-sync')()
var utility = require('/home/bridgeit/Documents/kumar/algorithmPrograms/utility/utility.js')
function primeNumbers()
{
    console.log('Please enter the range required ')
    var  Minimum = prompt('Enter the Minumun Number : ')
    var Maximum = prompt('Enter the Maximum Number : ')
    utility.primeNumbers(Minimum, Maximum)
}
primeNumbers();