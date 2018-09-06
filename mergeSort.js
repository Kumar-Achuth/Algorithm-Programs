var prompt = require('prompt-sync')()
var utility = require('/home/bridgeit/Documents/kumar/algorithmPrograms/utility/utility.js')
/**
     * @description : Merge sort program to perform sorting of the given user input 
     */
function mergeSort()
{
    var size = prompt ('Enter the size of the array : ')   // Take the user input for the size of the array
    utility.mergeSort(size)
}
mergeSort()

