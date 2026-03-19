// Given an array of integers, find the two numbers that add up to a target sum. Return their indices.

function twoSum(arr, targetSum){
    let map = new Map();
    let bruteSum = 0;
    //steps - first check if array is empty or not  a valid array then return valid array
    if(arr.length === 0 || !Array.isArray(arr) ){
        return console.log("Enter a valid array")
    }
    // if array length is grater than 0 then find the targeted sum
    else{
     // brute force 
    //  for(let i= 0; i<arr.length-1; i++){
    //     for(j=i+1; j<arr.length; j++){
    //         if(arr[i]+arr[j] === targetSum){
    //             return console.log({number1 : arr[i], index1 : i, number2 : arr[j], index2 : j})
    //         }
    //     }
    //  }
    //  return console.log("No Pair for with the targeted sum in this array")

     // optimize solution 

     for(let i=0; i<arr.length; i++){
        let complement = targetSum-arr[i]
        if(map.has(complement)){
            return console.log([map.get(complement), i])
        }
        map.set(arr[i], i)
     }
     return console.log("No Pair for with the targeted sum in this array")
    }
}

twoSum([2, 7, 11, 15],9)
