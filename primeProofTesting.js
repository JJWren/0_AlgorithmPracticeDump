// The following function will console.log all prime values from 0 to 10000

function printPrimesUntil(maxNum){
    let primeList = [];
    let count = 0;
    // 1 is not a prime number, start at 2
    for(let n = 2; n < maxNum; n++) {
        let x = 2;
        while(x <= n) {
            if(x == n) {
                primeList.push(n);
                count++
            };
            if(n % x == 0) {
                break;
            };
            x++;
        };
    };
    console.log(`\nHere is a list of prime numbers up to ${maxNum}:\n`, primeList);
    console.log(`There are ${count} total prime numbers in that list!\n`)
    return primeList;
};

printPrimesUntil(20000);