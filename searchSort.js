var prompt = require('prompt-sync')()
var utility = require('/home/bridgeit/Documents/kumar/algorithmPrograms/utility/utility.js')
/**
 * @description: to create a method for the following operations and find elapsed time after each function
 */
function searchSort()
{
    console.log('1 : Enter 1 for BinarySerach method  for integer execution ')
    console.log('2 : Enter 2 for BinarySerach method  for string execution ')
    console.log('3 : Enter 3 for BubbleSort method  for integer execution ')
    console.log('4 : Enter 4 for BubbleSort method  for string execution ')
    console.log('5 : Enter 5 for InsertionSort method  for integer execution ')
    console.log('6 : Enter 6 for InsertionSort method  for string execution ')
var choice = prompt('Enter your choice : ')

switch(parseInt(choice))
{
    case 1 : 
    var size = prompt('Enter the size of the array : ')
    startTime =  utility.getcurrentTime();
    utility.binarySearch(size)
    var stopTime =  utility.getcurrentTime();
       var res1 = utility.getelapsedTime(startTime,stopTime)
       console.log('The elapsed time is ' +res1 + " seconds")

       case 2 :
       var size = prompt('Enter the size of the array : ')
       startTime =  utility.getcurrentTime();
       utility.binarySearchString(size)
       var stopTime =  utility.getcurrentTime();
          var res2 = utility.getelapsedTime(startTime,stopTime)
          console.log('The elapsed time is ' +res2 + " seconds")
        

          case 3 : 
          var size = prompt('Enter the size of the array : ')
          startTime =  utility.getcurrentTime();
          utility.bubbleSort(size)
          var stopTime =  utility.getcurrentTime();
             var res3 = utility.getelapsedTime(startTime,stopTime)
             console.log('The elapsed time is ' +res3 + " seconds")
        

             case 4 : 
             var size = prompt('Enter the size of the array : ')
    startTime =  utility.getcurrentTime();
    utility.bubbleSortString(size)
    var stopTime =  utility.getcurrentTime();
       var res4 = utility.getelapsedTime(startTime,stopTime)
       console.log('The elapsed time is ' +res4 + " seconds")


       case 5 : 
       var size = prompt('Enter the size of the array : ')
    startTime =  utility.getcurrentTime();
    utility.insertionSort(size)
    var stopTime =  utility.getcurrentTime();
       var res5= utility.getelapsedTime(startTime,stopTime)
       console.log('The elapsed time is ' +res5 + " seconds")

       case 6  : 
       var size = prompt('Enter the size of the array : ')
    startTime =  utility.getcurrentTime();
    utility.insertionSortString(size)
    var stopTime =  utility.getcurrentTime();
       var res6 = utility.getelapsedTime(startTime,stopTime)
       console.log('The elapsed time is ' +res6 + " seconds")
       var array =[res1,res2,res3,res4,res5,res6]
       array = array.sort().reverse()
       console.log(array)
} 
}
searchSort()