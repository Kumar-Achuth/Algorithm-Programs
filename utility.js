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
    swap = (array[d])
    array[d] = (array[d-1])
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
    var check = 0;word
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
    newtonsMethod : function(c)
    {
        if(c>=0)
        {
        var t = c;   
        var epsilon = 1e-15;    // relative error tolerance
        while (Math.abs(t - c/t) > epsilon*t)
         {
            t = (c/t + t) / 2.0;
        }
        console.log(t)
    }
     else 
        {
            console.log(' Please give a non negative number : ')
        }
    },
    questionNumber : function(first ,number)
    {
        var prompt =require('prompt-sync')()
        var n = Math.pow(2,number)
        console.log('Think of a value between ' + first + 'and ' + n-1 )
        var low = first;
        var high = n-1;
        question(low,high)
    },
        
    question : function(low ,high)
    {
        if ((high - low) == 1) 
        return low;
        else
        var mid = Math.floor(low + (high - low) / 2);
        console.log("Is it less than  " , +mid)
        var choice = prompt('Enter the choice in true or false : ')
        if(Boolean.choice=='true')
        return this.question(low,mid)
        else
        return this.question(mid,high)
        
    },
    vendingMachine : function(amount)
    {
        var count =0;
        choice = 1;
        switch(choice)
        {
            case 1 : if(amount/1000>=1)
            {
                    var result = Math.floor(amount/1000)
                    console.log('Number of 1000 rs note are : ' +result)
                    amount = amount -result*1000;
                    count = count + result;
        }
        case 2 : if(amount/500>=1)
        {
                var result1 = Math.floor(amount/500)
                console.log('Number of 500 rs note are : ' +result1)
                amount = amount - result1*500;
                count = count + result1;
    }
    case 3 : if(amount/100>=1)
    {
            var result2 = Math.floor(amount/100)
            console.log('Number of 100 rs note are : ' +result2)
            amount = amount - result2*100;
            count = count + result2;
}
case 4 : if(amount/50>=1)
{
        var result3 = Math.floor(amount/50)
        console.log('Number of 50 rs note are : ' +result3)
        amount = amount - result3*50;
        count = count + result3;
}
case 5: if(amount/10>=1)
{
        var result4 = Math.floor(amount/10)
        console.log('Number of 10 rs note are : ' +result4)
        amount = amount - result4*10;
        count = count + result4;
}
case 6: if(amount/5>=1)
{
        var result5 = Math.floor(amount/5)
        console.log('Number of 5 rs note are : ' +result5)
        amount = amount - result5*5;
        count = count + result5;
}
case 7 : if(amount/2>=1)
{
        var result7 = Math.floor(amount/2)
        console.log('Number of 2 rs note are : ' +result7)
        amount = amount - result7*2;
        count = count + result7;
}
case 8 : if(amount/1>=1)
{
        var result8 = Math.floor(amount/1)
        console.log('Number of 1 rs note are : ' +result8)
        count = count + result8;
}
    }
    count = parseInt(count)
    console.log('Total notes are ' +count)
    },
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
            
                    console.log(parseInt(element));
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
            a1[i]=parseInt(arr[i]);
            
        }
        for(var j=0;j<a2.length;j++,i++)
        {
            a2[j]=parseInt(array[i]);
            
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
                c[k]=parseInt(a[i]);
                i++;
                k++;
            }
            else
            {
                c[k]=parseInt(b[j]);
                k++;
                j++;
            }
        }
        while(i<a.length)
        {
            c[k]=parseInt(a[i]);
            k++;
            i++;
        }
        while(j<b.length)
        {
            c[k]=parseInt(b[j]);
            k++;
            j++;
        }
    },
    toBinary : function(number) 
    {
if (number == 0)
{
    console.log(0)
}
else{
    var array =[],i;
    for(i=0; number>0;i++ )
    {
        array[i] = Math.floor(number%2)
        number = Math.floor(number/2)
    }
    console.log("\n Binary of given Number is ")
    //for(i=array.length-1; i>=0; i--)
    console.log(array.toString())
    return 0
}
    },
    swapNibbles : function(number)
    {
        var temp1, temp2;
        var flag = 0;
        temp1 = number & 0x0F
        temp2 = number & 0xF0
        temp1 = temp1 << 4
        temp2 = temp2 >> 4
        var number1= (temp1|temp2)
        console.log(number1)
       for (var i= number1; i>=0;i--)
       {
           if(number1==Math.pow(2,i))
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
        calender : function(date,month,year)
        {
            var d,m,y,x;
            y=year-Math.ceil(((14-month))/12)
            x = y + Math.ceil((y/4)-y/100 +y/400)
            m = month + 12 *Math.ceil((14-month)/12)-2
            d= (date+x+31*Math.ceil((m/12)))%7

            switch(m)
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
    }