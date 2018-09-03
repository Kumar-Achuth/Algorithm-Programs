var prompt = require('prompt-sync')()
var utility= require('/home/bridgeit/Documents/kumar/algorithmPrograms/utility/utility.js')
function bubbleSort()
{
    var size = prompt('Enter the size of the array : ')
    startTime =  utility.getcurrentTime();
    utility.bubbleSort(size)
    var stopTime =  utility.getcurrentTime();
       var res = utility.getelapsedTime(startTime,stopTime)
       console.log('The elapsed time is ' +res + " seconds")
}
bubbleSort();
