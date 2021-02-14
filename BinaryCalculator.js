//Convert from Binary to Decimal
//1100110
//1000100
//11100011010
//There are 10 types of people, those who understand binary, and those who don't
//11011
//The answer to life, the universe, and everything is...101010
//1100110011
//1011101
//10111111111
//Did you ever play on a Nintendo 1000000?

function bin2dec(binaryStr) {
    // if 0 return 0; otherwise, do the function
    if (binaryStr == "0") {
        return 0;
    } else {
        // empty array decimal values
        let decArr = [];
        // break up string; convert to each value to dec using maxPower; add each value to decTotal
        let decTotal = 0;
        for (let i=0;i<binaryStr.length;i++) {
            // powerCount keeps track of the binary digit as we move through the binary string
            let powerCount = binaryStr.length - 1 - i;
            // maxPower starts at the highest possible power for given string and moves down as we move through string
            let maxPower = 2**powerCount;
            if (binaryStr[i] =="1") {
                let temp = parseInt(binaryStr[i], 10)
                decArr.push(maxPower * temp);
                console.log(`decArr after a value has been pushed: ${decArr}`);
                decTotal += decArr[i];
            } else {
                decArr.push(0);
            }
            // powerCount and maxPower are set at beginning of loop
        };
        // log and return value
        console.log(decTotal);
        return decTotal;
    }
}

bin2dec("1100110");
console.log("##########BREAK1##########")
bin2dec("1000100");
console.log("##########BREAK2##########")
bin2dec("11100011010");
console.log("##########BREAK3##########")
bin2dec("10");
console.log("##########BREAK4##########")
bin2dec("11011");
console.log("##########BREAK5##########")
bin2dec("101010");
console.log("##########BREAK6##########")
bin2dec("1100110011");
console.log("##########BREAK7##########")
bin2dec("1011101");
console.log("##########BREAK8##########")
bin2dec("10111111111");
console.log("##########BREAK9##########")
bin2dec("1000000");

//Convert decimal to binary
//34
//60
//23
//102
//632
//205
//95
//84

// function dec2bin(decimal) {
//     if (decimal == 0) {
//         return 0;
//     } else {

//     }
// }