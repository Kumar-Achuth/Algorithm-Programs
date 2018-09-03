var prompt = require('prompt-sync')()
var utility = require('/home/bridgeit/Documents/kumar/algorithmPrograms/utility/utility.js')
function calender()
{
    var date = prompt('Enter the date u want to check : ')
    var month = prompt('Enter the month : ')
    var year = prompt('Enter the year : ')
    utility.calender(date,month,year)
}
calender();