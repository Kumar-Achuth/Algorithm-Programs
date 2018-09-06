var prompt = require('prompt-sync')()
var utility= require('/home/bridgeit/Documents/kumar/algorithmPrograms/utility/utility.js')
/**
     * @description : Program to calculate square root of a number using epsilon
     * @param c   
     */
 function newtonsMethod()
 {
     var c=prompt('Enter the non-negative number for c : ')  // take the input from the user as to wat the number is 
     utility.newtonsMethod(c)

 }
 newtonsMethod();