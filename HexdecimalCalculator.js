function hex2dec(hexStr) {
    // if 0 return 0; otherwise, do the function
    if (hexStr == "0") {
        return 0;
    } else {
        // empty array decimal values
        let decArr = [];
        // break up string; convert to each value to dec using maxPower; add each value to decTotal
        let decTotal = 0;
        for (let i=0;i<hexStr.length;i++) {
            // powerCount keeps track of the hexadecimal digit as we move through the hexadecimal string
            let powerCount = hexStr.length - 1 - i;
            // maxPower starts at the highest possible power for given string and moves down as we move through string
            let maxPower = 16**powerCount;
            if (hexStr[i] =="F") {
                decArr.push(maxPower * 15);
                decTotal += decArr[i];
            }
            else if (hexStr[i] =="E") {
                decArr.push(maxPower * 14);
                decTotal += decArr[i];
            }
            else if (hexStr[i] =="D") {
                decArr.push(maxPower * 13);
                decTotal += decArr[i];
            }
            else if (hexStr[i] =="C") {
                decArr.push(maxPower * 12);
                decTotal += decArr[i];
            }
            else if (hexStr[i] =="B") {
                decArr.push(maxPower * 11);
                decTotal += decArr[i];
            }
            else if (hexStr[i] =="A") {
                decArr.push(maxPower * 10);
                decTotal += decArr[i];
            }
            else {
                decArr.push(maxPower * parseInt(hexStr[i], 10));
                decTotal += decArr[i];
            }
            // powerCount and maxPower are set at beginning of loop
        };
        // log and return value
        console.log(decTotal);
        return decTotal;
    }
}

hex2dec("F");
hex2dec("10");
hex2dec("FF");
hex2dec("100");
hex2dec("FAB");