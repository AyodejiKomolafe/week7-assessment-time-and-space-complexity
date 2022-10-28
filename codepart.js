let array = [1, 2, 3, -2];

let value = false;

for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
        if (array[i] + array[j] === 0 ) {
            value = true;
            break;
        }
    }
}

console.log(value);

// time complexity: O(n^2)
//space complexity: O(1)



function hasUniqueChars(words) {
    let obj = [];
    for(let i = 0; i < words.length; i++){
        let ch = words[i];
        if (obj[ch]) return false;
        obj[ch] = true;
    }
    return true;
}
console.log(hasUniqueChars("monday"))

// time complexity: O(n)
//space complexity: O(1)

function pangram(string) {
    let str = string.toLowerCase();
    let alphabet ="abcdefghijklmnopqrstuvwxyz".split("");

    for(let i = 0; i < alphabet.length; i++){
        if(str.indexOf(alphabet[i]) < 0){
            return false;
        }
    }
    return true
}

console.log(pangram("The quick brown fox jumps over the lazy dog!"))

//time complexity: O(n)
//space complexity: O(1)

function findLongestWord(str) {
    let newStr = str.split(" ")
    let longestWord = 0;
    for(let i = 0; i < newStr.length; i++){
        if(newStr[i].length > longestWord){
        longestWord = newStr[i].length
        }
    }
    return longestWord;
  }
  console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

//time complexity: O(n^2)
//space complexity: O(1)