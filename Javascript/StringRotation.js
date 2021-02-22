//Rotate a string
//Given a string and a number, rotate the word by that number
//Examples:

//1
// var str = "Hello world!"
// function rotateString(str, 3)
//Should return -> "ld!Hello wor"

//2
// var secondstr = "React"
// function rotateString(secondstr, 2)
//Should return -> "ctRea"

//3
// var third = "Rotate this"
// function rotateString(third, 7)
//Should return -> "te thisRota"

// function rotateString(string, int) {
//     let array = [];
//     let rotatedString = "";
//     for (let i = 0; i< string.length; i++) {
//         array.push(string[i]);
//     }
//     for(let i = 0; i < int; i++) {
//         let rotatedString = array.pop();
//         array.unshift(rotatedString);
//     }
//     for (let i = 0; i< array.length; i++) {
//         rotatedString += array[i];
//     }
//     return rotatedString;
// }

// var str = "Hello world!";
// console.log(rotateString(str, 3));

// var secondstr = "React";
// console.log(rotateString(secondstr, 2));

// var third = "Rotate this";
// console.log(rotateString(third, 7));

// Not allowed to use shift/unshift
function rotateString(string, int) {
    let array = [];
    let secondArray = [];
    let rotatedString = "";
    for (let i = 0; i < string.length; i++) {
        array.push(string[i]);
    }
    for(let i = 0; i < int; i++) {
        let rotatedString = array.pop();
        secondArray.push(rotatedString);
    }
    for (let i = 0; i < (secondArray.length)/2; i++) {
        array[i], array[array.length - i - 1] = array[array.length - i - 1], array[i];
    }
    for (let i = 0; i < secondArray.length; i++) {
        rotatedString += secondArray[i];
    }
    for (let i = 0; i < array.length; i++) {
        rotatedString += array[i];
    }
    return rotatedString;
}

var str = "Hello world!";
console.log(rotateString(str, 3));

var secondstr = "React";
console.log(rotateString(secondstr, 2));

var third = "Rotate this";
console.log(rotateString(third, 7));

// less loops
// function rotateString(string, int) {
//     let rotatedString = "";

//     for (let i = string.length - int; i < string.length; i++) {
//         rotatedString += string[i];
//     }

//     for (let i = 0; i < string.length - i; i++) {
//         rotatedString += string[i];
//     }

//     return rotatedString;
// }

// var str = "Hello world!";
// console.log(rotateString(str, 3));

// var secondstr = "React";
// console.log(rotateString(secondstr, 2));

// var third = "Rotate this";
// console.log(rotateString(third, 7));
