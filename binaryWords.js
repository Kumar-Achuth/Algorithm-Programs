var fs = require('fs')
var prompt = require('prompt-sync')()
var utility= require('/home/bridgeit/Documents/kumar/algorithmPrograms/utility/utility.js')
var data = fs.readFileSync('search.txt')
data =data.toString().split(',')

function binaryWords()
{
    var word = prompt('Enter the word u want to search : ')
    utility.binaryWords(data, word)
}
binaryWords()