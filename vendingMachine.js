var prompt = require('prompt-sync')()
var utility = require('/home/bridgeit/Documents/kumar/algorithmPrograms/utility/utility.js')
 function vendingMachine()
{
    var amount = prompt('Enter the amount : ')
    utility.vendingMachine(amount)

}
vendingMachine()
