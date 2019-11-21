var Arr = [3,1,2,4];

for ( i = 0; i < Arr.length; i++)
    for (j = i+1; j < Arr.length; j++)
        if (Arr[i] > Arr[j]) {
          var temp = Arr[i];
          Arr[i] = Arr[j];
          Arr[j] = temp;
        }

console.log(Arr);