function encodeString(string) {
    let count = 1;
    newString = "";
    for (let i = 0; i < string.length; i++) {
        if (string[i] === string[i + 1]) {
            count += 1;
        } else {
            newString += string[i];
            newString += count;
            count = 1;
        }
    }
    
    return newString;
}

let rString = "aaabbbbcc";
let eRString = encodeString(rString);
console.log(eRString);


function decodeString(eString) {
    let currChar = "";
    let number = "";
    let dString = "";
    for (let i = 0; i < eString.length; i++) {
        // this checks if 'currChar' is a number and adjusts 'number' for multdigit numbers
        // while string[i] IS a number...
        while (!isNaN(eString[i])) {
            number += eString[i];
            i++;
        }
        // this will put the 'currChar' in 'dString' for the total value of 'number'
        // ie: 'a5' will put 'aaaaa' into dString
        while (number > 0) {
            dString += currChar;
            number--;
        }
        // reset values of number and character
        number = "";
        currChar = eString[i];
    }
    return dString;
}

console.log(decodeString(eRString));
let anotherone = "a15b1c10";
console.log(decodeString(anotherone));
let anotheroneone = "a0";
console.log(decodeString(anotheroneone));