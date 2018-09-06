var prompt = require('prompt-sync')()
var utility = require('/home/bridgeit/Documents/kumar/algorithmPrograms/utility/utility.js')

function swapNibbles()
{
    var number = prompt('Enter the number for nibble Swapping : ')
    utility.swapNibbles(number)
}
swapNibbles()