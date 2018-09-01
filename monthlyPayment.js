var prompt = require('prompt-sync')()
var utility = require('/home/bridgeit/Documents/kumar/algorithmPrograms/utility/utility.js')

function monthlyPayment()
{
    var principal = prompt('Enter the Principa Loan Amount : ')
    var year = prompt('Enter the number of years : ')
    var rate = prompt('Enter the rate of interest : ')
    utility.monthlyPayment(principal,year,rate)
}
monthlyPayment();