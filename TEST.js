function decryptPassword(s) {
    // Write your code here
    let sArr = [];
    let decodedStr = "";
    for(let i=0; i<s.length; i++) {
        sArr.push(s[i]);
    }
    for(let i=sArr.length-1; i>=0; i--) {
        if(sArr[i] == "0") {
            sArr[i] = sArr[0];
            sArr.shift();
            i--;
        } else if(sArr[i] == "*") {
            let temp = sArr[i-1];
            sArr[i-1] = sArr[i-2];
            sArr[i-2] = temp;
            sArr.splice(i, 1);
        }
    }
    for(let i=0; i<sArr.length; i++) {
        decodedStr += sArr[i];
    }
    return decodedStr;
}

console.log(decryptPassword("43Ah*ck0rr0nk"));