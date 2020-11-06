
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