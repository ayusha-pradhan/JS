
var rem, temp, final = 0;
var number = prompt("Enter a number");

temp = number;
while(number>0)
    {
		rem = number%10;
		
		final = final*10+rem;
        number = parseInt(number/10);
    }
        
if(final==temp)
	{
		alert("The given number is Palindrome");
	}
else
    {
	    alert("The given number is not palindrome");
	}
	