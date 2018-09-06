var prompt = require('prompt-sync')()
var utility = require('/home/bridgeit/Documents/kumar/algorithmPrograms/utility/utility.js')
/**
     * @description : Program to find out numbers which are prime , paindrome and anagram
     * @param Minimum1
     * @param Maximum1
     */
function primePalindrome()
{
    console.log('Please enter the range required ')
    var  Minimum1 = prompt('Enter the Minumun Number : ') // Input from the user for the range of the values 
    var Maximum1 = prompt('Enter the Maximum Number : ')
    utility.primePalindrome(Minimum1,Maximum1)
}
primePalindrome();