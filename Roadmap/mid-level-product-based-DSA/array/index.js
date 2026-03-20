// Given an array of integers, find the two numbers that add up to a target sum. Return their indices.

function twoSum(arr, targetSum) {
    let map = new Map();
    let bruteSum = 0;
    //steps - first check if array is empty or not  a valid array then return valid array
    if (arr.length === 0 || !Array.isArray(arr)) {
        return console.log("Enter a valid array")
    }
    // if array length is grater than 0 then find the targeted sum
    else {
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

        for (let i = 0; i < arr.length; i++) {
            let complement = targetSum - arr[i]
            if (map.has(complement)) {
                return console.log([map.get(complement), i])
            }
            map.set(arr[i], i)
        }
        return console.log("No Pair for with the targeted sum in this array")
    }
}

// twoSum([2, 7, 11, 15],9)

// Check if a string is a valid palindrome, considering only alphanumeric characters and ignoring case.
// Input: "A man, a plan, a canal: Panama"
// Output: true

function checkPalindrome(str) {
    let newA = []
    if (str.length === 0) {
        return console.log("Please enter a valid string")
    } else {
        let strA = str.split("");
        // for (let i = 0; i < strA.length; i++) {
        //     if (isAlphaNumeric(strA[i])) {
        //         newA.push(strA[i])
        //     }
        // }
        let left = 0
        let right = str.length - 1
        while (left < right) {
            // step 1: skip non-alphanumeric from left
            while (left < right && !isAlphaNumeric(str[left])) {
                left++
            }

            // step 2: skip non-alphanumeric from right
            while (left < right && !isAlphaNumeric(str[right])) {
                right--
            }

            // step 3: compare characters at left and right
            if (str[left].toLowerCase() !== str[right].toLowerCase()) {
                return console.log("It is not a palindrome")
            }

            // step 4: move both pointers
            left++
            right--
        }

        return console.log("It is a palindrome")

        function isAlphaNumeric(str) {
            return /^[a-zA-Z0-9]+$/.test(str);
        }
        // let cleaned = newA.join("").toLowerCase()
        // let reversed = cleaned.split("").reverse().join("")
        // if (cleaned === reversed) {
        //     return console.log("It is palindrome")
        // }
        // console.log("Not a Palindrome", newA.join(""))
    }
}
// checkPalindrome("A man, a plan, a canal: Panama")


// Given an array of positive integers and k,
// find maximum sum of any contiguous subarray of size k.

// Input: [2, 1, 5, 1, 3, 2], k = 3
// Output: 9

// brute force
function bruteForceMaxSum(arr, k) {
     let maxSum = null
     if(arr.length <k || !Array.isArray(arr)){
        return console.log("Enter a valid array")
     }
    for (let i = 0; i <= arr.length - k; i++) {
        let currentSum = 0
        for (let j = i; j < i + k; j++) {
            currentSum += arr[j]
        }
        if(maxSum === null){
            maxSum=currentSum
        }else{
            maxSum = Math.max(maxSum, currentSum)
        }
    }
    return console.log(maxSum)
}

// bruteForceMaxSum([2, 1, -5, 8], 3)