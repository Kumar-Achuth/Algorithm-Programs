var prompt = require('prompt-sync')()
var utility= require('/home/bridgeit/Documents/kumar/algorithmPrograms/utility/utility.js')
/**
 * @description : To convert the degree from celsius to farenheit and vice versa.
 * @param choice 
 */
function temperatureConversion()
{
    var choice = prompt('Press 1 to convert celsius to farenheit, Or 2 to convert farenheit to celsius respectively :')
    utility.temperatureConversion(choice)   // take input from the choice 
}
temperatureConversion();
