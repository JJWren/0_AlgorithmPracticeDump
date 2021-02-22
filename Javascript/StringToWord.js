let sentence = "Happy Monday everyone"
let sentence2 = "The fox  jumps, over! the ?  lazy   dog";

// return as array of each word => ["Happy", "Monday", "everyone"]

function stringToWord(string) {
    let tempWord = "";
    let array = [];
    let alphabet = `abcdefghijklmnopqrstuvwxyz-&@'`;

    for (let i=0; i<string.length; i++) {        
        for (let character=0; character<alphabet.length; character++) {
            if (string[i].toLowerCase() == alphabet[character]) {
                tempWord += string[i];
                break;
            }
        }

        if (string[i] == " ") {
            if (string[i-1] == " ") {
                tempWord = "";
            }
            else {
                array.push(tempWord);
                tempWord = "";
            }
        }

        if (i == string.length - 1) {
            array.push(tempWord);
        }
    }

    // code is buggy and is pushing '' into array... temp fix:
    for (let i=0; i<array.length; i++) {
        if (array[i] == '') {
            array.splice(i, 1);
            i--;
        }
    }

    return array;
}

console.log(stringToWord(sentence));
console.log(stringToWord(sentence2));
console.log("--------------------BREAK--------------------");

// reverse the sentence

function reverseSentence(string) {
    let array = stringToWord(string);
    let temp;
    for (let i = 0; i < array.length / 2; i++) {
        temp = array[i];
        array[i] = array[array.length - i - 1];
        array[array.length - i - 1] = temp;
    }
    // console.log(array);
    let newString = "";
    for (let i = 0; i < array.length; i++) {
        newString += array[i];
        // if statement to skip space after last word
        if (i == array.length - 1) {
            continue;
        } else {
            newString += " ";
        }
    }
    return newString;
}

console.log(reverseSentence(sentence));
console.log(reverseSentence(sentence2));