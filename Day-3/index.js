// Print Right-Angled Star Triangle
const printRight = (n) => {
    for (let i = 1; i <= n; i++) {
        let result = ''
        for (let j = 1; j <= i; j++) {
            result += "*"
        }
        console.log(result)
    }
}
// printRight(5)
//Print Inverted Right-Angled Triangle
//Print Pyramid Pattern
const printPyramid = (n) => {
    // print n-1 space 
    // odd stars like 1, 3 ,5 => i= 0 and i*2+1 star
    for (let i = 0; i < n; i++) {
        let result = ''
        for (let space = 0; space < n - i - 1; space++) {
            result += ' '
        }
        for (let j = 0; j < i * 2 + 1; j++) {
            result += "*"
        }
        console.log(result)
    }
}
// printPyramid(5)
//Print Inverted Pyramid Pattern
//Print Hollow Square Pattern
const hollowSquare = (n) => {
    for (let i = 0; i < n; i++) {
        // i = 0 & n  => n star rest i = 0 and i = n 
        let result = '';
        for (let j = 0; j < n; j++) {
            if (i === 0 || i === n - 1) {
                result += "*"
            } else {
                if (j === 0 || j === n - 1) {
                    result += "*"
                } else {
                    result += " "
                }
            }
        }
        console.log(result)
    }
}
// hollowSquare(5)
//Print Hollow Pyramid Pattern
const printHollowPyramid = (n) => {
    // print n-1 space 
    // odd stars like 1, 3 ,5 => i= 0 and i*2+1 star
    for (let i = 0; i < n; i++) {
        let result = ''
        for (let space = 0; space < n - i - 1; space++) {
            result += ' '
        }
        for (let j = 0; j < i * 2 + 1; j++) {
            if (j === 0 || j === i * 2 || i === n - 1) {
                result += "*"
            }
            else {
                result += " "
            }

        }
        console.log(result)
    }
}
printHollowPyramid(5)
// Print Alternating Binary Triangle
const alternateBinary = (n) => {
    for (let i = 1; i <= n; i++) {
        let flag = i % 2 === 0 ? 0 : 1
        let result = ''
        for (let j = 1; j <= i; j++) {
            result += flag
            flag = flag === 1 ? 0 : 1
        }
        console.log(result)
    }
}
alternateBinary(5)
//Print Hollow Inverted Pyramid
//Print Butterfly Pattern
//Print Diamond Pattern
//Print Hourglass Pattern
//Print Hollow Diamond Pattern
//Print Rhombus Pattern
// Print Multiplication Table (Single and Upto N)