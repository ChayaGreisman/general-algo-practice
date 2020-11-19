// given sorted array of integers and target averagePair, 
// see if array contains a pair of valus where average equals target

// O(n^2)
function averagePair(arr, target){
    for (let i=0; i<arr.length-1; i++){
        for (let j=1; j<arr.length; j++){
            if ((arr[i]+arr[j])/2 === target) return true;
        }
    }
    return false
}

// O(n) - multiple pointers
function averagePair(arr, num){
  let start = 0
  let end = arr.length-1;
  while(start < end){
    let avg = (arr[start]+arr[end]) / 2 
    if(avg === num) return true;
    else if(avg < num) start++
    else end--
  }
  return false;
}