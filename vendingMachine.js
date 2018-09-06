var prompt = require('prompt-sync')()
var utility = require('/home/bridgeit/Documents/kumar/algorithmPrograms/utility/utility.js')
/**
 * @description : There is 1, 2, 5, 10, 50, 100, 500 and 1000 Rs Notes which can be
returned by Vending Machine. Write a Program to calculate the minimum number
of Notes as well as the Notes to be returned by the Vending Machine as a
Change
@param amount 
 */
 function vendingMachine()
{
    var amount = prompt('Enter the amount : ')  // take input from the user as amount
    utility.vendingMachine(amount)

}
vendingMachine()
