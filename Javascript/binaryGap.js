// A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.
// Write a function that determines the binary gap of a given decimal integer N:
function binaryGap(N) {
    let binaryOfN = N.toString(2), countOfZero = 0, maxGap = 0;
    for (let i=0; i<binaryOfN.length; i++) {
        if (binaryOfN[i] == '1') {
            countOfZero = 0;
            if (binaryOfN[i+1] == '0') {
                for (let j=i+1; j<binaryOfN.length; j++) {
                    if (binaryOfN[j] !== '1') {
                        countOfZero++;
                    } else {
                        if (countOfZero > maxGap) {
                            maxGap = countOfZero
                        }
                        i += countOfZero;
                        break;
                    }
                }
            }
        }
    }
    return maxGap;
}

console.log(binaryGap(1041));
console.log(binaryGap(15));
console.log(binaryGap(65));
console.log(binaryGap(32));