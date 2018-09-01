var prompt = require('prompt-sync')()
var utility= require('/home/bridgeit/Documents/kumar/algorithmPrograms/utility/utility.js')
function temperatureConversion()
{
    var choice = prompt('Press 1 to convert celsius to farenheit, Or 2 to convert farenheit to celsius respectively :')
    utility.temperatureConversion(choice)
}
temperatureConversion();
