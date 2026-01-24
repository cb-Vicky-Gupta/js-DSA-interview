// 1. Find the Maximum of Three Numbers
function max3(num1, num2, num3){
    let maxNum = num1
    if(num2 >= num3 && num2>= num3){
        console.log(num2)
    }
    else if(num3 >= num1 && num3>= num2){
        console.log(num3)
    }else{
        console.log(num1)
    }
}
// max3(1,2,3)
// 2. check if a Number is Positive, Negative, or Zero
function checkNegPos(num){
if(num>0) console.log("Positive")
if(num <0) console.log("Negative")
if(num===0){
    console.log("Zero")
}
}
// checkNegPos(0)
// 3. Calculate Electricity Bill

// 4. Check if a Character is a Vowel or Consonant
function checkCharacter(char){
    let vowels = ["a","e","i","o","u"]
    if(vowels.includes(char.toLowerCase())){
        console.log("Character is Vowel")
    }else{
        console.log("Character is Consonant")
    }
}
checkCharacter('i')

//5. Check if a Year is a Leap Year
// uppercase = 65-90   let code = ch.charCodeAt(0);
//numbers = 48-59
// lowerCase = 97-122
