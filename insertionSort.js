var prompt = require('prompt-sync')()
var utility= require('/home/bridgeit/Documents/kumar/algorithmPrograms/utility/utility.js')
function insertionSort()
{
    var size = prompt('Enter the size of the array : ')
    utility.insertionSort(size)
}
insertionSort();
