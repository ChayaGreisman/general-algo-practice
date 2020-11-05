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