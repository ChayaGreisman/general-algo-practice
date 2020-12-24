//recursion

function power(base, exponent){
    if(exponent === 0) return 1;
    return base * power(base,exponent-1);
}

function factorial(num){
    if (num === 0) return 1
    return num * factorial(num-1)
}

 function productOfArray(arr) {
    if(arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}



function recursiveRange(x){
   if (x === 0 ) return 0;
   return x + recursiveRange(x-1);
}

function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}