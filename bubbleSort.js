var prompt = require('prompt-sync')()
var utility= require('/home/bridgeit/Documents/kumar/algorithmPrograms/utility/utility.js')
function bubbleSort()
{
    var size = prompt('Enter the size of the array : ')
    utility.bubbleSort(size)
}
bubbleSort();
