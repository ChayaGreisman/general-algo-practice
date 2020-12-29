function averagePair(arr, target){
    for (let i=0; i<arr.length-1; i++){
        for (let j=1; j<arr.length; j++){
            if ((arr[i]+arr[j])/2 === target) return true;
        }
    }
    return false
}
