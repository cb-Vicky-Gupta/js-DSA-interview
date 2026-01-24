// Print Numbers from 1 to N
// solution 1
//  method 1
let num = 10;
for (let i = 1; i <= num; i++) {
    // console.log(i)
}

// method 2
function printNum(n) {
    if (typeof n !== "number" || n < 1) {
        console.log("Please enter valid number")
        return;
    }
    for (let i = 1; i <= n; i++) {
        console.log(i)
    }
    return
}
// printNum(5)
function printNumInline(n) {
    let result = ''
    if (typeof n !== "number" || n < 1) {
        console.log("Please enter valid number")
        return;
    }
    for (let i = 1; i <= n; i++) {
        result += i + " "

    }
    console.log(result)
}
// printNumInline(5)

// question - 2
// Print Numbers from N to 1 without changing the loop condition of above question
//Solution - 2
function printNTo1(n) {
    let result = ''
    while (n > 0) {
        result += n + ' '
        n--;
    }
    console.log(result)
}
// printNTo1(5)

// question : Print All Even Numbers from 1 to N
// solution
function printNEven(n) {
    let result = ""
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            result += i + ' '
        }
    }
    console.log(result)
}
// printNEven(10)
//questions : Sum of First N Natural Numbers
function printNaturalSum(n) {
    let result = 0n;
    for (let i = 1n; i <= n; i++) {
        result += i
    }
    console.log(result)
}
// printNaturalSum(100)

// questions : Product (Factorial) of N
// solution
const factorialN = (n) => {
    let fact = 1n;
    while (n > 1) {
        fact *= n;
        n--;
    }
    return fact;
}

let result = factorialN(5n)
// console.log(result)

//question : Sum of All Even Numbers up to N
const sumEvenNumbers = (n) => {
    let sumE = 0n;
    while (n > 0) {
        if (n % 2n === 0n) {
            sumE += n;
        }
        n--;
    }
    return sumE;
}
// let sumN = sumEvenNumbers(10n)
// console.log(sumN)
//question : Print Squares of Numbers from 1 to N
const sumSquareNumbers = (n) => {
    let i = 1;
    let result = ''
    while (i <= n) {
        // console.log(i*i)
        result += (i * i) + ' '
        i++;
    }
    return result
}
let squares = sumSquareNumbers(5)
//question :Print all numbers divisible by 3 and 5 up to N
// const checkNumDivideBy3 = (num)=>{
//     if(num%3 === 0){
//         return true
//     }
//     return false;
// }
// let sumOfAllDigit = (n)=>{
//     let sum = 0;
//     if(typeof n !== "number" || isNaN(n)){
//         console.log("Enter a correct number")
//         return
//     }else{
//         let num = Math.abs(n);
//         while(num>0){
//             sum += num%10;
//             num = Math.floor(num/10);
//         }
//     }
//     return sum
// }

const printNumBy3and5 = (n) => {
    let result = ''
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result += i + ' ';
        }
    }
    return result
}
let numDividedBy5and3 = printNumBy3and5(30)
// console.log(numDividedBy5and3)

//questions : Find the sum of all odd numbers up to N

const sumOddNumbers = (n) => {
    let sumOdd = 0n;
    while (n > 0n) {
        if (n % 2n !== 0n) {
            sumOdd += n;
        }
        n--;
    }
    return sumOdd;
}
let oddOne = sumOddNumbers(10n)
// console.log(oddOne)

// question : Print the cubes of numbers from 1 to N

const sumCubeNumbers = (n) => {
    let i = 1;
    let result = ''
    while (i <= n) {
        // console.log(i*i)
        result += (i * i * i) + ' '
        i++;
    }
    return result
}
let cubeSum = sumCubeNumbers(5)
// console.log(cubeSum)

// question : Print only the numbers that are both even and perfect squares
const checkSquare = (n) => {
    if (n % 2 === 0 && Number.isInteger(Math.sqrt(n)))
        return true
}
const squareAndEven = (n) => {
let result = ""
for (let i = 1; i <= n; i++) {
    if(checkSquare(i)){
        result += i + " "
    }
}
return result
}

console.log(squareAndEven(20))