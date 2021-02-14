// Given a string of words (with spaces, tabs and linefeeds), returns an array of words. Given "Life is not a drill!" return ["Life", "is", "not", "a", "drill!"].

// Create a function that, given a string of words (with spaces), returns new string with words in reverse sequence. Given "This is a test", return "test a is This".

// ###########################################################################################################################################

var string1 = "Life is not a drill!";

function stringToWord(string) {
    var array = [""];
    for (var i = 0; i < string.length; i++) {
        if (string[i] !== " ") {
            array[array.length - 1] += string[i];
        } else {
            array.push("");
        }
    }
    return array;
}

var returnedArray = stringToWord(string1);
console.log(returnedArray);

// ###########################################################################################################################################

var string2 = "This is a test";

function reverseString(string) {
    var stringAsArray = stringToWord(string);
    // console.log(stringAsArray);
    var temp;
    for (var i = 0; i <= stringAsArray.length / 2; i++) {
        temp = stringAsArray[i];
        stringAsArray[i] = stringAsArray[stringAsArray.length - i - 1];
        stringAsArray[stringAsArray.length - i - 1] = temp;
    }
    // console.log(stringAsArray);
    var newString = "";
    for (var i = 0; i < stringAsArray.length; i++) {
        newString += stringAsArray[i];
        // if statement to skip space after last word
        if (i == stringAsArray.length - 1) {
            continue;
        } else {
            newString += " ";
        }
    }
    return newString;
}

console.log(reverseString(string2));
