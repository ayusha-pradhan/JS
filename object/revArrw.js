

arr=[1,2,3,4]
i = 0;
j = arr.length - 1;

    while(i < j)
    {
        
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        
        i++;
        j--;


    }
    

console.log(arr)