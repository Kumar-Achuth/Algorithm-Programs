var fs = require('fs')
var prompt = require('prompt-sync')()
var utility= require('/home/bridgeit/Documents/kumar/algorithmPrograms/utility/utility.js')
var data = fs.readFileSync('search.txt')
data =data.toString().split(',')
/**
 * @description : Read in a list of words from File. Then prompt the user to enter a word to
search the list. The program reports if the search word is found in the list.
@param array
@param word
 */
function binaryWords()
{
    var word = prompt('Enter the word u want to search : ')   // Take the user input for the key to be searched 
    utility.binaryWords(data, word)
}
binaryWords()