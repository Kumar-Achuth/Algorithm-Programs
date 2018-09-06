var prompt = require('prompt-sync')()
var utility= require('/home/bridgeit/Documents/kumar/algorithmPrograms/utility/utility.js')
/**
     * @description : Reads in strings from standard input and prints them in sorted order.
Uses insertion sort.
        @param size
     */
function insertionSort()
{
    var size = prompt('Enter the size of the array : ')  // Take the input from the user for the size of the array
    startTime =  utility.getcurrentTime();
    utility.insertionSort(size)
    var stopTime =  utility.getcurrentTime();
       var res = utility.getelapsedTime(startTime,stopTime)
       console.log('The elapsed time is ' +res + " seconds")
}
insertionSort();
