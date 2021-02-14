// Create a function dec2BinStr(value) that converts a number into a string representing that number in binary notation. For this challenge, do not use the (very convenient) toString function. For example, given the value 35, the function should return "0b100011".

function d2B(int) {
    if (int === 0) {
        return "0b0";
    }

    binaryArray = [];
    while (int > 0) {
        // value will be 1 or 0
        value = int % 2;
        // unshift places value at beginning string
        binaryArray.unshift(value);
        // floor rounds down
        int = Math.floor(int / 2);
    }
    // need to combine array into singular piece of info
    var string = "0b" + binaryArray.join("");
    return console.log(string);
}

// expect 0b100011
d2B(35);
