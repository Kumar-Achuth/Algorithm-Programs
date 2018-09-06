var prompt = require('prompt-sync')()
var utility = require('/home/bridgeit/Documents/kumar/algorithmPrograms/utility/utility.js')
/**
 * @description : To guess the day of the week by taking user input as date , month and year 
         * @param date 
         * @param month
         * @param year
 */
function calender()
{
    var date = prompt('Enter the date u want to check : ')  // Take input date from the user
    date =  parseInt(date)
    var month = prompt('Enter the month : ')     // Take input from the user for the month
    month =  parseInt(month)
    var year = prompt('Enter the year : ')  // Take input from the user for the year
    year = parseInt(year)
    if(year % 4 == 0 && year % 100 !=0 || year % 400 ==0) //logic to find leap year
{
    if (date > 0 && date < 32 && month  <=12)
    {
        utility.calender(date, month , year);
    }
    else{
        console.log("Invalid date");

    }
}
else if (date >= 29 && month == 2)   // condition to check for the valid date 
{
    console.log("Date doesn't exsit");
}
else if (date >= 31 && (month == 4 || month ==6 || month ==9 || month == 11))
{
    console.log("Invalid date");
}
else if(date > 0 && date < 32)
{
    utility.calender(date, month , year);
}
else{
    console.log("Invalid date");
}    
}
calender();