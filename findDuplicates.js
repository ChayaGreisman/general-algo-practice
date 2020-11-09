
// find duplicates in 2 sorted arrays 


// two pointer method
// O(m+n)
function findDuplicates(arr1,arr2){
    let arr = []
    let pointer1 = 0
    let pointer2 = 0
    while (pointer1<arr1.length && pointer2<arr2.length){ 
      if(arr1[pointer1]===arr2[pointer2]){
        arr.push(arr1[pointer1])
        pointer1++
        pointer2++
      } else if (arr1[pointer1] < arr2[pointer2]){
        pointer1++
      } else {
        pointer2++
      }
    }
    return arr
}

// binary search
// O(N*log M)

function findDuplicates(arr1, arr2) {
    let arr = [];
    
    for (let i=0; i<arr1.length; i++){
      let search = binarySearch(arr2, arr1[i])
      if ( search !== false){
        arr.push(search)
      }
    }
    return arr 
  }
  
  
function binarySearch(arr, val){
    let start = 0, end = arr.length -1;

    while (start<=end){
        let mid = Math.floor((start+end)/2);
        if(arr[mid] === val) return val;
        else if (arr[mid] > val) end = mid-1;
        else start = mid+1;  
    }
    return false
}