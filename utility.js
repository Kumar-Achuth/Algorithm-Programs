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
if(str1 == str2)   // compare both the strings after the execution and check if they are equal
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
    /**
     * @description : program to find the prime numbers in between 0 and 1000 in the prescribed range 
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
            Maximum = Minimum;
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
    primePalindrome : function(Minimum1,Maximum1)
    {
        if(Maximum1<Minimum1) // if the maximum < minimum, swap
        {
            var swap = Maximum1;
            Maximum1 = Minimum1;
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
         if((Minimum1.toString().split('').sort().join('').trim()))
         console.log('The anagramic prime palindrome numbers are : '+Minimum1)
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
    binarySearch : function(size)
    {
        var prompt = require('prompt-sync')()
        var check =0; 
        var array = new Array(size);
        for(var i = 0; i<size; i++)
    {
        array[i]=prompt('Enter the elements : ');     // take input of elements from the user and store in the array
    }
    array.sort();
   // console.log(array); 
    var low = 0;
    var high = size-1;
    var element = prompt('Enter the element to be searched : ')
    while(low <=  high)
    {
        var midkey = Math.floor((low + high)/2);
        if(element== array[midkey])
        {
            check = 1;
            break;
        }
        else 
        {
            if(element > array[midkey])
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

    bubbleSort : function(size)
    {
        var prompt = require('prompt-sync')()
        var array = new Array(size)
        for (var i=0;i<size;i++)
        {
            array[i]= prompt('Enter the elements to be stored : ')
        }
        console.log('Input array elements are '+array)
        for ( i=0; i<array.length-1; i++)
        {
            for (var j=0; j<array.length-i-1; j++)
            {
                if(array[j] > array[j+1])
                {
                    var swap = parseInt(array[j+1])
                    array[j+1] = parseInt(array[j])
                    array[j] = swap;
                }
            }
        }
        console.log('Sorted array is '+array);
    },
    insertionSort : function(size)
    {
var prompt = require('prompt-sync')()
var array = new Array(size);
var  i,d,swap;
for (i=0;i<size; i++)
{
    array[i] = prompt('Enter the elements : ')
}
console.log(array)
for(i=1; i<=size-1; i++)
{
    d=i;

while(d > 0 && array[d-1] > array[d])
{
    swap = parseInt(array[d])
    array[d] = parseInt(array[d-1])
    array[d-1] = swap;
    d--;
}
}
console.log("Sorted list in ascending order : \n")
    console.log(array);
return 0;
},
binaryWords : function(array,word)
{
    array = array.sort();
    console.log(array); 
    var low = 0;
    var check = 0;
    var high = array.length-1;
    while(low <=  high)
    {
        var midkey = Math.floor((low + high)/2);
        if(word== array[midkey])
        {
            check = 1;
            break;
        }
        else 
        {
            if(word > array[midkey])
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
monthlyPayment : function(principal, year, rate)
{
    var payment;
    var n = 12 * year;
    var r = rate /(12*100);
    var result = Math.pow((1+r),(-n))
    payment = principal*r/(1-result)
    console.log('The Monthy payment due is : ' + payment)
},
temperatureConversion : function(choice)
{
    var prompt = require('prompt-sync')()
    if (choice == 1)
    {
        var degreeCelsius = prompt('Enter the temperature in celsius degree to convert into farernheit :')
        var result1 =((degreeCelsius*(9/5))+32)
        console.log('The Temperature value in farenheit is : ' +result1)
    }
    else if(choice == 2)
    {
        var farenheit = prompt('Enter the temperature in farenheit to convert into celsius : ')
        var result2 = ((farenheit-32)*(5/9))
        console.log('The temperature value in degree celsius is : '+result2)
    }
    else
    {
        console.log('Please enter the valid input')
    }

    },
}