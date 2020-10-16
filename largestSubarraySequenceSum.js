// Given an array of integers find a sequence with the largest sum.
// If the array is all negative integers, just return zero.


function largestSubarraySum(arr){
    let currentSum = 0
    let maxSum = 0

    for(let i=0; i<arr.length; i++){
        let currentNum = arr[i]

        currentSum = Math.max((currentSum+currentNum), 0)

        maxSum = Math.max(currentSum, maxSum)
    }
    return maxSum
}
 
// let arr = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4]
// largestSubarraySum(arr) 
// 16
// The largest subarray in this example is [5, 3, -7, 4, 5, 6], and its sum is 5 + 3 - 7 + 4 + 5 + 6 = 16
// If array was [-3,-5,-7] (all negative),  would return 0



// 👇 another way, returns largest sum regardless of negative sum

function maxSum(arr){
    let currentSum = 0
    let maxSum = arr[0]
    arr.forEach((i) => {
      currentSum = Math.max(i, currentSum + i)
      maxSum = Math.max(maxSum, currentSum)
    })
    return maxSum
}