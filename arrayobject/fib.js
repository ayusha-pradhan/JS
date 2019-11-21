var fib = function fib(result,len){
    if(result.length >= len){
        return result;
    }
    result.push(result[result.length -2] + result[result.length-1]);
    return fib(result,len);
}

console.log(fib([0,1],15));