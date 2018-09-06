var prompt = require('prompt-sync')()
var utility = require('/home/bridgeit/Documents/kumar/algorithmPrograms/utility/utility.js')
/**
     * @description : To convert the given decimal number to binary value 
     * @param number
     */
function toBinary()
{
    var number = prompt('Enter the number you want to convert from decimal to binary : ')
    utility.toBinary(number)  // take input from the user
}
toBinary()