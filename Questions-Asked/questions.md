
https://leetcode.com/problems/roman-to-integer/submissions/
// function convertRomanToDecimal(romanNum){
//   let romanData = {
//     I : 1,
//     V : 5,
//     X : 10,
//     L : 50,
//     C : 100,
//     D : 500,
//     M : 1000
//   }
//   let romanArr = romanNum.split("")
//   let sumNum = 0;
//   let finalSum = 0
//   for (let i = 0; i < romanArr.length; i++) {

//     if(i===0){
//       sumNum = romanData[romanArr[i]]
//     }else if(romanData[romanArr[i-1]] === romanData[romanArr[i]]){
//       sumNum+= romanData[romanArr[i]]

//     }else{
//       finalSum = romanData[romanArr[i]]
//       finalSum -= sumNum
//       sumNum = 0;
//     }
//   }
  
//   return finalSum
// }
// console.log(convertRomanToDecimal("VC"))

function convertRomanToDecimal(romanNum) {
  const romanData = {
    I: 1, V: 5, X: 10, L: 50,
    C: 100, D: 500, M: 1000
  };

  const romanArr = romanNum.split("");
  let total = 0;

  for (let i = 0; i < romanArr.length; i++) {
    const current = romanData[romanArr[i]];
    const next = romanData[romanArr[i + 1]];
    
    if (next && current < next) {
      total -= current;
    } else {
      total += current;
    }
  }

  return total;
}