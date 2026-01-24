// Reverse a String (Manual Method Only)
let stri = "ram"
console.log(stri.split("").reverse().join(""))
let arr = stri.split("");
console.log(stri.length)
let start = 0, end = arr.length - 1
while(start<end){
    [arr[start], arr[end]] = [arr[end], arr[start]]
    start++;
    end--;
}

let reversed = arr.join('')
console.log(reversed)
