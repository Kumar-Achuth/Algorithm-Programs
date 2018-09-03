var prompt = require('prompt-sync')()
var utility = require('/home/bridgeit/Documents/kumar/algorithmPrograms/utility/utility.js')
function toBinary()
{
    var number = prompt('Enter the number you want to convert from decimal to binary : ')
    utility.toBinary(number)
}
toBinary()