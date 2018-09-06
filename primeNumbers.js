var prompt = require('prompt-sync')()
var utility = require('/home/bridgeit/Documents/kumar/algorithmPrograms/utility/utility.js')
   /**
     * @description : program to find the prime numbers in between 0 and 1000 in the prescribed range
     * @param Minimum
     * @param Maximum 
     */
function primeNumbers()
{
    console.log('Please enter the range required ')
    var  Minimum = prompt('Enter the Minumun Number : ') // Take user  inputs of the range 
    var Maximum = prompt('Enter the Maximum Number : ')
    utility.primeNumbers(Minimum, Maximum)
}
primeNumbers();