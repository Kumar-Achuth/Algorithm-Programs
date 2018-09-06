module.exports=
{
    /**
     * @description : To find whether the given strings are anagram or not
     * @param : string1 , string2
     */
    anagram : function(string1,string2)
    {
        if((!NaN) && string1 >= 'a' || string1 <='z' || string2 >= 'a' || string2 <= 'z'|| string1 >= 'A' || string1 <='Z' || string2 >= 'A' || string2 <= 'Z'  )  // input strings have to be a string type 
        {                       
            var str1 =string1.toLowerCase().split('').sort().join('').trim();  // convert to lower case,split,sort,join,trim 
var str2 = string2.toLowerCase().split('').sort().join('').trim();    
if(str1 == str2)       // compare both the strings after the execution and check if they are equal
{
    console.log('The given string is an anagram ')
}
else 
{
    console.log('Not an anagram ')
}
        }
        else
        {
            console.log('Please enter only string type ')
        }
    },
    getcurrentTime : function()
{
    var currenttime = new Date();    // method to get the current date
    var n = currenttime.getTime();   // method to get the current time in seconds
    return n;
},
getelapsedTime : function(startTime, stopTime)
{
    var elapsed = (stopTime-startTime)/1000;        // calculation of the elapsed time 
    return elapsed;                                 // return the value
},
    /**
     * @description : program to find the prime numbers in between 0 and 1000 in the prescribed range
     * @param Minimum
     * @param Maximum 
     */
 primeNumbers : function(Minimum,Maximum)
    {
        if(NaN)  // check if inputs are only numbers
        {
            console.log("only Numbers please ")
        }
        if(Maximum<Minimum) // if the maximum < minimum, swap
        {
            var swap = Maximum;
            Maximum = Minimum;        //swapping two numbers
            Minimum = swap;
        }
        if(Minimum >=0 && Maximum<=1000)   // range has to be in between 0 and 1000
        {
        var j , isPrime = 0;
        while(Minimum < Maximum)   // run untill ninimum == maximum
        {
            isPrime = 0;
         for (j=2; j<=Minimum/2; ++j)
         {
             if(Minimum % j == 0)
             {
                 isPrime = 1;
                 break;
             }
         }
         if(isPrime == 0 && Minimum !=0)
         console.log(Minimum)

         ++Minimum
        }
        return 0;
    }
        else
        {
            console.log('The range has to be in between the range 0 and 1000 ')
        }
    },
    /**
     * @description : Program to find out numbers which are prime , paindrome and anagram
     * @param Minimum1
     * @param Maximum1
     */
    primePalindrome : function(Minimum1,Maximum1)
    {
        if(Maximum1<Minimum1) // if the maximum < minimum, swap
        {
            var swap = Maximum1;
            Maximum1 = Minimum1;      //  swapping to make the larger number as Maximum 
            Minimum1 = swap;
        }
        if(Minimum1 >=0 && Maximum1<=1000)   // range has to be in between 0 and 1000
        {
        var j , isPrime = 0;
        while(Minimum1 < Maximum1)   // run untill ninimum == maximum
        {
            isPrime = 0;
         for (j=2; j<=Minimum1/2; ++j)
         {
             if(Minimum1 % j == 0)
             {
                 isPrime = 1;
                 break;
             }
         }
         if(isPrime == 0 && Minimum1 !=0)
         {
             console.log('The prime numbers are : ' +Minimum1)
         if(Minimum1.toString().split('').reverse().join('')==Minimum1) // && (Minimum1.toString().split('').sort().join('').trim()))
         console.log('The prime palindrome Numbers are : ' +Minimum1)
         if((Minimum1.toString().split('').sort().join('').trim())==Minimum1)
         console.log('The anagramic prime numbers are : '+Minimum1)
         }
         ++Minimum1
         }
        return 0;
    }
        else
        {
            console.log('The range has to be in between the range 0 and 1000 ')
        }
        
    },
    /**
     * @description : To find a integer using binarySearch method
     *  @param size
     */
    binarySearch : function(size)
    {
        var prompt = require('prompt-sync')()
        var check =0; 
        var array = new Array(size);   // create a array with size of the input
        for(var i = 0; i<size; i++)
    {
        array[i]=prompt('Enter the elements : ');     // take input of elements from the user and store in the array
    }
    array.sort();
   // console.log(array); 
    var low = 0;                             // assign low to 0
    var high = size-1;    
    var element = prompt('Enter the element to be searched : ')   //Ask the number to be searched 
    while(low <=  high)
    {
        var midkey = Math.floor((low + high)/2);  // assign midkey with the formula
        if(element== array[midkey])               // if element is present 
        {
            check = 1;
            break;   // come out of the loop
        }
        else 
        {
            if(element > array[midkey]) //for element > than midkey
                low = midkey + 1;
            else
                high = midkey - 1;
        }
    }
    if(check == 1)  // if found
    console.log('The element was found at index ' + midkey  )
    else
    console.log("The element was not found ")
    return 0;
    },
/**
 * @description : Reads in integers prints them in sorted order using Bubble Sort
 * @param size
 */
    bubbleSort : function(size)
    {
        var prompt = require('prompt-sync')()
        var array = new Array(size)  // creating empty array with size 
        for (var i=0;i<size;i++)
        {
            array[i]= prompt('Enter the elements to be stored : ')   // Getting the elements from the user
        }
        console.log('Input array elements are '+array)
        for ( i=0; i<array.length-1; i++)
        {
            for (var j=0; j<array.length-i-1; j++)
            {
                if(array[j] > array[j+1])    // comparing two integers
                {
                    var swap = parseInt(array[j+1])   //swapping two integers 
                    array[j+1] = parseInt(array[j])
                    array[j] = swap;
                }
            }
        }
        console.log('Sorted array is '+array);
    },
    /**
     * @description : Reads in strings from standard input and prints them in sorted order.
Uses insertion sort.
@param size
     */
    insertionSort : function(size)
    {
var prompt = require('prompt-sync')()
var array = new Array(size);  // creating a empty array 
var  i,d,swap;
for (i=0;i<size; i++)
{
    array[i] = prompt('Enter the elements : ')   // getting the elements from the user
}
console.log(array)
for(i=1; i<=size-1; i++)
{
    d=i;

while(d > 0 && array[d-1] > array[d])   // checking for the condition 
{
    swap = parseInt(array[d])
    array[d] = parseInt(array[d-1])   //swapping two numbers 
    array[d-1] = swap;
    d--;
}
}
console.log("Sorted list in ascending order : \n")
    console.log(array);
return 0;
},
/**
 * @description : Read in a list of words from File. Then prompt the user to enter a word to
search the list. The program reports if the search word is found in the list.
@param array
@param word
 */
binaryWords : function(array,word)
{
    array = array.sort();  // get the array from the txt file and then sort 
    console.log(array); 
    var low = 0;
    var check = 0;word
    var high = array.length-1;
    while(low <=  high)  // run untill condition becomes fall
    {
        var midkey = Math.floor((low + high)/2);   //assign midkey
        if(word == array[midkey])
        {
            check = 1;
            break;
        }
        else 
        {
            if(word > array[midkey])    //  same as binarysearch
                low = midkey + 1;
            else
                high = midkey - 1;
        }
    }
    if(check == 1)
    console.log('The element was found at index ' + midkey  )
    else
    console.log("The element was not found ")
    return 0;
    
},
/**
 * @description : To calculate the monthly payment due with respect to principal amount , year , rate of interest
 * @param principal
 * @param year
 * @param rate 
 */
monthlyPayment : function(principal, year, rate)
{
    var payment;
    var n = 12 * year;
    var r = rate /(12*100);
    var result = Math.pow((1+r),(-n))   // formula to calculate the payment 
    payment = principal*r/(1-result)
    console.log('The Monthy payment due is : ' + payment)
},
/**
 * @description : To convert the degree from celsius to farenheit and vice versa.
 * @param choice 
 */
temperatureConversion : function(choice)
{
    var prompt = require('prompt-sync')()
    if (choice == 1)                          // for celsius to farenheit conversion    
    {
        var degreeCelsius = prompt('Enter the temperature in celsius degree to convert into farernheit :')
        var result1 =((degreeCelsius*(9/5))+32)   // formula to convert from celsius to farenheit 
        console.log('The Temperature value in is : ' +result1+ " farenheit")
    }
    else if(choice == 2)                        // for farenheit to celius conversion 
    {
        var farenheit = prompt('Enter the temperature in farenheit to convert into celsius : ')
        var result2 = ((farenheit-32)*(5/9))  // formula to convert from farenheit to celsius 
        console.log('The temperature value in degree celsius is : ' +result2+ ' degree celsius'   )
    }
    else
    {
        console.log('Please enter the valid input')   // please give the valid input 
    }

    },
    /**
     * @description : Program to calculate square root of a number using epsilon
     * @param c   
     */
    newtonsMethod : function(c)
    {
        if(c>=0)
        {
        var t = c;   
        var epsilon = 1e-15;    // relative error tolerance
        while (Math.abs(t - c/t) > epsilon*t)
         {
            t = (c/t + t) / 2.0;   // formula to calculate the square root of the number 
        }
        console.log(t)
    }
     else 
        {
            console.log(' Please give a non negative number : ')
        }
    },
    /**
     * @description : takes a command­line argument N, asks you to think of a number
between 0 and N­1, where N = 2^n, and always guesses the answer with n
questions.
@param number 
     */
    questionNumber : function(number)
    {
        var prompt =require('prompt-sync')()
        var n = Math.pow(2,number)    // calculate the power of the number with base as 2 
        console.log('Think of a number between 0 and ' +n)
        var low = 0;  // assign vale to low and high
        var high = n;
        var secret = this.question(low,high)  // passing values and calling the function 
        console.log('Your number is '+secret)
    },
    question : function(low ,high)  // function to guess the number 
    {
        var prompt =require('prompt-sync')()
        if ((high - low) == 1) 
        return low;
        else
        var mid =Math.floor(((low + high )/ 2));
        console.log("Is it less than  " , +mid)
        var choice = prompt('Enter the choice in true or false : ')
        if(choice ==='true')    // take input in boolean and check the condition 
        {
        return this.question(low,mid)   // recall the function 
        }
        else if(choice === 'false')
        {
        return this.question(mid,high)
    }
    else
    {
        console.log('Not valid')
    }
},
/**
 * @description : There is 1, 2, 5, 10, 50, 100, 500 and 1000 Rs Notes which can be
returned by Vending Machine. Write a Program to calculate the minimum number
of Notes as well as the Notes to be returned by the Vending Machine as a
Change
@param amount 
 */
    vendingMachine : function(amount)
    {
        var count =0;  // taking count for calculating number of notes 
        choice = 1;
        switch(choice)
        {
            case 1 : if(amount/1000>=1) //if amount is greater than 1000
            {
                    var result = Math.floor(amount/1000)
                    console.log('Number of 1000 rs note are : ' +result)
                    amount = amount -result*1000;
                    count = count + result;
        }
        case 2 : if(amount/500>=1) // if amount is > than 500
        {
                var result1 = Math.floor(amount/500)
                console.log('Number of 500 rs note are : ' +result1)
                amount = amount - result1*500;
                count = count + result1;
    }
    case 3 : if(amount/100>=1)  // if amount is > than 100
    {
            var result2 = Math.floor(amount/100)
            console.log('Number of 100 rs note are : ' +result2)
            amount = amount - result2*100;
            count = count + result2;
}
case 4 : if(amount/50>=1)  // if amount is > 50
{
        var result3 = Math.floor(amount/50)
        console.log('Number of 50 rs note are : ' +result3)
        amount = amount - result3*50;
        count = count + result3;
}
case 5: if(amount/10>=1)  // if amount is > than 10
{
        var result4 = Math.floor(amount/10)
        console.log('Number of 10 rs note are : ' +result4)
        amount = amount - result4*10;
        count = count + result4;
}
case 6: if(amount/5>=1)   // if amount is > than 5
{
        var result5 = Math.floor(amount/5)
        console.log('Number of 5 rs note are : ' +result5)
        amount = amount - result5*5;
        count = count + result5;
}
case 7 : if(amount/2>=1)  // if amount is > 2
{
        var result7 = Math.floor(amount/2)
        console.log('Number of 2 rs note are : ' +result7)
        amount = amount - result7*2;
        count = count + result7;
}
case 8 : if(amount/1>=1) // if amount is > than 1 or equal to 1
{
        var result8 = Math.floor(amount/1)
        console.log('Number of 1 rs note are : ' +result8)
        count = count + result8;
}
    }
    count = parseInt(count)
    console.log('Total notes are ' +count)   // Total number of notes are count which has the number of notes present
    },
    /**
     * @description : Merge sort program to perform sorting of the given user input 
     */
    mergeSort : function(size)
    {
        var prompt=require('prompt-sync')();
        var array=new Array(size);
            for(var i=0;i<size;i++)
            {
                array[i]=prompt("enter elements: "); 
            }
            console.log((array));
           // console.log("before merge arr len "+arr.length);
            this.merge((array));
            //console.log("after merge arr len "+arr.length);
            array.forEach(element =>
                {
                    console.log((element));
                });
    },  
    merge : function(array)
    {
        if(array.length==1)
        {
            return; 
        }
        var m=Math.floor(array.length/2);
        var a1=new Array(m);
        var a2=new Array(array.length-m);
        var i;
        for(i=0;i<a1.length;i++)
        {
            a1[i]=parseInt((array[i]));  
        }
        for(var j=0;j<a2.length;j++,i++)
        {
            a2[j]=parseInt((array[i]));
        }
        this.merge(a1);
        this.merge(a2);
        this.merger(a1,a2,array);
    },
    merger : function(a,b,c)
    {
        var i=0,j=0,k=0;
        while(i<a.length && j<b.length)
        {
            if(a[i]<b[j])
            {
                c[k]=(parseInt(a[i]));
                i++;
                k++;
            }
            else
            {
                c[k]=parseInt((b[j]));
                k++;
                j++;
            }
        }
        while(i<a.length)
        {
            c[k]=parseInt((a[i]));
            k++;
            i++;
        }
        while(j<b.length)
        {
            c[k]=(b[j]);
            k++;
            j++;
        }
    },
    /**
     * @description : To convert the given decimal number to binary value 
     * @param number
     */
    toBinary : function(number) 
    {
if (number == 0)
{
    console.log(0)
}
else{
    var array =[];
    var i =0;
   while(number>0)
    {
        array[i++] = Math.floor(number%2)
        number = Math.floor(number/2)
    }
    console.log("\n Binary of given Number is ")
    console.log(array.reverse())

    // var arr =(array1|array)
}
    },
    /**
     * @description : Binary.java to read an integer as an Input, convert to Binary using toBinary
function and perform the following functions.
i. Swap nibbles and find the new number.
ii. Find the resultant number is the number is a power of 2.
@param number 
     */
    swapNibbles : function(number)
    {
        this.toBinary(number)
        var nibble1, nibble2;
        var flag = 0;
        nibble1 = number & 0x0F                       // and the input with hexadecimal 0x0F
        nibble2 = number & 0xF0                        // and the input with hexadecimal 0xF0
        nibble1 = nibble1 << 4                        // left shift with four bits 
        nibble2 = nibble2 >> 4                       // right shift with 4 bits
       console.log(nibble1|nibble2)               // add both bits in binary to get the result 
        var result = nibble1|nibble2;
        this.toBinary(result)
       for (var i= result; i>=0;i--)         // loop to run the condition for checking the number is a power of 2 
       {
           if(result==Math.pow(2,i))
           {
               flag = 1;
               break;
           }
        }
       if(flag ==1 )
      console.log("Number is a power of  " +(i))
      else
     console.log('Not a power of 2')
        },
        /**
         * @description : To guess the day of the week by taking user input as date , month and year 
         * @param date 
         * @param month
         * @param year
         */
        calender : function(date,month,year)
        {
           // if(!(year % 4 == 0 && year % 100 !== 0 || year % 400 == 0) && !((month == 2) && (date ==29)))
            
                var d,m,y,x;
            var n=Math.floor((14-month)/12);    
            n=parseInt(n);
            y=year-n
            y=parseInt(y)

            x = y + Math.floor((y/4)-Math.floor(y/100) +Math.floor(y/400))
            x=parseInt(x)

            m = ((month +( 12 *n))-2);
            m =parseInt(m)

            d= (date+x+Math.floor((31*m)/12))%7
            d=parseInt(d)


         switch(parseInt(month))
            {
                case 1 : console.log('January')
                break;

                case 2 : console.log('February')
                break;
            
                case 3 : console.log('March')
                break;

                case 4 : console.log('April')
                break;

                case 5 : console.log('May')
                break;

                case 6 : console.log('June')
                break;

                case 7 : console.log('July')
                break;

                case 8 : console.log('August')
                break;

                case 9 : console.log('September')
                break;

                case 10 : console.log('October')
                break;

                case 11 : console.log('November')
                break;

                case 12 : console.log('December')
                break;
            }
            switch(d)
            {
                case 0 : console.log("Sunday")
                break;

                case 1 : console.log('Monday')
                break;

                case 2 : console.log('Tuesday')
                break;

                case 3 : console.log('Wednesday')
                break;

                case 4 : console.log('Thursday')
                break;

                case 5 : console.log('Friday')
                break;

                case 6 : console.log('Saturday')
                break;
            }
        },
        /**
         * @description : BubbleSort program for string inputs 
         * @param size 
         */
        bubbleSortString : function(size)
    {
        var prompt = require('prompt-sync')()
        var array = new Array(size)       // new empty array creation 
        for (var i=0;i<size;i++)
        {
            array[i]= prompt('Enter the String to be sorted : ')   // taking input string from the user and storing 
        }
        console.log('Input array elements are '+array)
        for ( i=0; i<array.length-1; i++)
        {
            for (var j=0; j<array.length-i-1; j++)
            {
                if(array[j] > array[j+1])
                {
                    var swap = (array[j+1])
                    array[j+1] = (array[j])
                    array[j] = swap;
                }
            }
        }
        console.log('Sorted array is '+array);
    },
    /**
     * @description : binary search program for string input 
     * @param size 
     */
    binarySearchString : function(size)
    {
        var prompt = require('prompt-sync')()
        var check =0; 
        var array = new Array(size);                 // array creation for number of elements 
        for(var i = 0; i<size; i++)
    {
        array[i]=prompt('Enter the elements : ');     // take input of elements from the user and store in the array
    }
    array.sort();                                         // sorted array 
   // console.log(array); 
    var low = 0;                                         // assigning high and low index 
    var high = size-1;
    var element = prompt('Enter the element to be searched : ')   // asking for the element to be searched 
    while(low <=  high)
    {
        var midkey = Math.floor((low + high)/2);  // calculation of midkey 
        if(element== array[midkey])                 // if element is present at midkey 
        {
            check = 1;                                // indicate element was found
            break;
        }
        else 
        {
            if(element > array[midkey])            // if element is greater than midkey  
                low = midkey + 1;                      // reassign low 
            else                                           // or 
                high = midkey - 1;                   // reassign high
        }
    }
    if(check == 1)
    console.log('The element was found at index ' + midkey  )
    else
    console.log("The element was not found ")
    return 0;
    },
    /**
     * @description : Insertion Sort method for String 
     * @param size 
     */
    insertionSortString : function(size)
    {
var prompt = require('prompt-sync')()
var array = new Array(size);     // creation of new empty array 
var  i,d,swap;
for (i=0;i<size; i++)
{
    array[i] = prompt('Enter the elements : ')    // input elements storage 
}
console.log(array)
for(i=1; i<=size-1; i++)
{
    d=i;

while(d > 0 && array[d-1] > array[d])
{
    swap = (array[d])
    array[d] = (array[d-1])     // swapping two numbers if greater and running the loop untill d = 0
    array[d-1] = swap;
    d--;
}
}
console.log("Sorted list in ascending order : \n")
    console.log(array);
return 0;
},
    }