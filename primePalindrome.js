var prompt = require('prompt-sync')()
var utility = require('/home/bridgeit/Documents/kumar/algorithmPrograms/utility/utility.js')
function primePalindrome()
{
    console.log('Please enter the range required ')
    var  Minimum1 = prompt('Enter the Minumun Number : ')
    var Maximum1 = prompt('Enter the Maximum Number : ')
    utility.primePalindrome(Minimum1,Maximum1)
}
primePalindrome();