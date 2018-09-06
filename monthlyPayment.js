var prompt = require('prompt-sync')()
var utility = require('/home/bridgeit/Documents/kumar/algorithmPrograms/utility/utility.js')
/**
 * @description : To calculate the monthly payment due with respect to principal amount , year , rate of interest
 * @param principal
 * @param year
 * @param rate 
 */
function monthlyPayment()
{
    var principal = prompt('Enter the Principa Loan Amount : ')
    var year = prompt('Enter the number of years : ')  // Take user inputs for all the three parameters
    var rate = prompt('Enter the rate of interest : ')   // Principal amount, years and  rate of interest
    utility.monthlyPayment(principal,year,rate)
}
monthlyPayment();