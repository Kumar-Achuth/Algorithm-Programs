var prompt = require('prompt-sync')()
var utility = require('/home/bridgeit/Documents/kumar/algorithmPrograms/utility/utility.js')
/**
     * @description : To find a integer using binarySearch method
     *  @param size
     */
function binarySearch()
{
    var size = prompt('Enter the size of the array : ')  // Take the user input for the size of the array
    startTime =  utility.getcurrentTime();
    utility.binarySearch(size)
    var stopTime =  utility.getcurrentTime();
       var res = utility.getelapsedTime(startTime,stopTime)
       console.log('The elapsed time is ' +res + " seconds")
}
binarySearch()