var num = prompt("Enter a value");
var rem, sum = 0;

while(num > 0)
{
  rem = num % 10;
  sum = sum * 10 +rem;
  num = parseInt(num / 10);
}
alert(sum);
console.log(sum);