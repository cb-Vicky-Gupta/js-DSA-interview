// Reverse a String (Manual Method Only)
let stri = "ram"
// console.log(stri.split("").reverse().join(""))
let arr = stri.split("");
// console.log(stri.length)
let start = 0, end = arr.length - 1
while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]]
    start++;
    end--;
}

let reversed = arr.join('')
// console.log(reversed)
// Check if a String is a Palindrome

function isPalindrome(word) {
    let reverseWord = word.split("").reverse().join("")
    if (reverseWord === word) {
        console.log("Yes")
        return
    } else {
        console.log("No")
        return;
    }
}

// isPalindrome("racecario")

// Count Frequency of Each Character
function countFrequency(word) {
    let freq = {};
    //method 1
    // for(let char of word){
    //     if(freq[char]){
    //         freq[char]++
    //     }else{
    //         freq[char] = 1;
    //     }
    // }
    //method 2 
    for (let char of word) {
        freq[char] = (freq[char] || 0) + 1
    }

    // console.log(freq)
    return freq
}

// countFrequency("banana")

//  Find the Most Frequent Character in a String
function mostFrequent(word) {
    const obj = countFrequency(word)
    let maxChar = "";
    let maxCount = 0;
    for (let key in obj) {
        if (obj[key] > maxCount) {
            maxChar = key;
            maxCount = obj[key]
        }
    }
    console.log({ maxChar, maxCount })
    return;
}

// mostFrequent("success")

//  Check if Two Strings Are Anagrams (Without Sorting)

function checkAnagram(word1, word2) {
    // method 1 
    // if(word1.split("").sort().join("") === word2.split("").sort().join("")){
    //     console.log("Yes")
    //     return
    // }
    // console.log("No");
    // return;

    // method 2
    if (word1.length !== word2.length) {
        console.log("Not a anagram word")
        return
    }
    let obj1 = countFrequency(word1)
    let obj2 = countFrequency(word2)
    for (let key in obj1) {
        if (obj1[key] !== obj2[key]) {
            console.log("Not an anagram");
            return;
        }
    }

    console.log("Yes, it is an anagram");

}
// checkAnagram("listen", "silent")
// Find the First Non-Repeating Character
function firstNonRepeat(word) {
    const freq = {}
    for (let ch of word) {
        freq[ch] = (freq[ch] || 0) + 1
    }
    for (let ch of word) {
        if (freq[ch] === 1) {
            console.log("First non-repeating characher is " + ch)
            return
        }
    }
    console.log("No non-repeating character in this given word.")
}

// firstNonRepeat("aabcbcddeeff")
//  Remove All Duplicate Characters (Keep First Occurrence)
function removeDuplicates(word) {
    // method 1
    // const freq = {}
    // for (let ch of word) {
    //     freq[ch] = (freq[ch] || 0) + 1
    // }
    // let newWord = ""
    // for(let ch in freq){
    //     newWord+=ch
    // }
    // console.log(newWord)

    // method 2
    let newWord = new Set(word.split(""))
    let result = ""
    for (let ch of newWord) {
        result += ch
    }
    console.log(result)
    return;
}
// removeDuplicates("programming")

// Check if a String Contains Only Alphabets (No Regex)

function onlyAlphabets(str) {
    for (let ch of str) {
        let code = ch.charCodeAt(0);
        if (
            !(code >= 65 && code <= 90) &&
            !(code >= 97 && code <= 122)
        ) {
            console.log("It consists alphabet with other type alos")
            return
        }
    }
    console.log("It consists only alphabet.")
    return true;
}
// onlyAlphabets("HelloWord1")

// Reverse Only the Words in a Sentence
function reverseSentence(stringGroup) {
    let strArray = stringGroup.split(" ")
    let start = 0;
    let end = strArray.length - 1;
    while (start < end) {
        [strArray[start], strArray[end]] = [strArray[end], strArray[start]]
        start++;
        end--;
    }
    console.log(strArray.join(" "))
}
// reverseSentence("I love coding")

// Find the Longest Word in a Sentence

function longestWord(stringGroup) {
    let strArray = stringGroup.split(" ")
    let longest = 0;
    let word = ""
    for (let w of strArray) {
        w.length > longest;
        longest = w.length;
        word = w
    }

    console.log({ longest, word })
}
// longestWord("coding is beautiful")

//  Count the Number of Words (Manually Without split)

function countWords(str) {
    let count = 0;
    let inWord = false;

    for (let ch of str) {
        if (ch !== " " && !inWord) {
            count++;
            inWord = true;
        } else if (ch === " ") {
            inWord = false;
        }
    }
    console.log(count)
    return;
}

// countWords("  hi   there  world ")

// Find All Substrings of a String (No Built-ins)
function findSubstrings(str) {
    let result = [];
    for (let i = 0; i < str.length; i++) {
        let temp = ""
        for (let j = i; j < str.length; j++) {
            temp += str[j];
            result.push(temp)
        }
    }
    console.log(result)
    return
}

// findSubstrings("aba")
// Compress a String (Basic Run-Length Encoding)

function compressString(word){
   const wordF =  countFrequency(word)
   let finalWord = ""
   for(let w in wordF){
    finalWord+= w +wordF[w]
   }
   console.log(finalWord)
}
compressString("aaabbccccd")