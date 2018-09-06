var prompt = require('prompt-sync')()
var utility= require('/home/bridgeit/Documents/kumar/algorithmPrograms/utility/utility.js')
/**
 * @description : Reads in integers prints them in sorted order using Bubble Sort
 * @param size
 */
function bubbleSort()
{
    var size = prompt('Enter the size of the array : ')   // Take size of the array from the user
    startTime =  utility.getcurrentTime();
    utility.bubbleSort(size)
    var stopTime =  utility.getcurrentTime();
       var res = utility.getelapsedTime(startTime,stopTime)
       console.log('The elapsed time is ' +res + " seconds")
}
bubbleSort();
