var array = [1, 2, 3, 6, 5];

    var sum = array.reduce(function(a, b){return a + b;}, 0);
    document.write("The Sum of array is:"+ sum  );
    
    var product = array.reduce(function(a, b){return a * b;}, 1);
    document.write("\n The Product of array is:"+ product);

    let highest = Math.max(...array);
    document.write("\n The highest number in the array is:"+ highest);

    let i = array.indexOf(Math.max(...array));
    document.write("\n The index of highest number of array is:"+ i);

    let lowest = Math.min(...array);
    document.write("\n The lowest number in the array is:"+ lowest);

    let l = array.indexOf(Math.min(...array));
    document.write("\n The index of lowest number of array is:"+ l);