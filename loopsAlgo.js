// Print out all odd numbers from 1 to 20
// The expected output will be 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
console.log("Print out odds 1-20");
function printOdds() {
    for (var i = 1; i <= 20; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}
printOdds();

console.log(" ");
console.log("----------------------------------------");
console.log(" ");

// Sum numbers from 1 to 5, printing out the current number and sum so far at each step of the way
// The expected output will be: Num: 1, Sum: 1, Num: 2, Sum: 3, Num: 3, Sum: 6, Num: 4, Sum: 10, Num: 5, Sum: 15
console.log("Sum and Print 1-5");
function sumOfNumbers() {
    var sum = 0;

    for (var num = 1; num <= 5; num++) {
        sum = sum + num;

        console.log("num is currently: " + num);
        console.log("sum is currently: " + sum);
        console.log("----------------------------------------");
    }
}
sumOfNumbers();
