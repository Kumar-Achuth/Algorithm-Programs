var prompt = require('prompt-sync')()
var utility = require('/home/bridgeit/Documents/kumar/algorithmPrograms/utility/utility.js')
function anagram()
{
    var  string1 = prompt('Enter the first string : ')
    var string2 = prompt('Enter the second string : ')
    utility.anagram(string1, string2)
}
anagram();