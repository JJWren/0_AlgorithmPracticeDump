// Makes each function easier to read on console.
var start = "start", // Makes each function easier to read on console.
    end = "end"; // phrase to type into readability() function to console.log end of program statement

function readability(input) {
    console.log(
        "----------------------------------------------------------------------------------------------------"
    );
    console.log(
        "****************************************************************************************************"
    );
    console.log(
        "----------------------------------------------------------------------------------------------------"
    );
    if (input == "start") {
        console.log("Start of Program");
    } else if (input == "end") {
        console.log("End of Program");
    } else if (input !== "start" && input !== "end") {
        // simple check for people entering other variables `end` or nothing at all into the function
        console.log("Next Function");
    }
    console.log(
        "----------------------------------------------------------------------------------------------------"
    );
    return 0;
}

function title(input) {
    console.log("TITLE: " + input);
}

// Sigma - Implement function sigma(num) that, given a number, returns the sum of all positive integers up to the given number (inclusive).  Ex: sigma(3) = 6 (or 1+2+3); sigma(5) = 15 (or 1+2+3+4+5).

readability(start);

title("Factorial");
function sigma(num) {
    var i = 0, // start at 1 because we only want positive integers
        j = 0; // starts at 0 because we want a clean start
    while (i <= num) {
        // iterates through i until argument (num) is reached
        j += i; // j adds value of i to itself
        i++; // i increase by 1 to continue loop upwards
    }
    return j; // returns j back to a variable or log
}
var a = sigma(3),
    b = sigma(5);
console.log(a, b);

readability();

// Factorial - Write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to the given number (inclusive).  For example, factorial(3) = 6 (or 1*2*3); factorial(5) = 120 (or 1*2*3*4*5).

title("Factorial");
function factorial(num) {
    var i = 1, // start at 1 with this because factorials start at 1
        j = 1; // must start at 1 and not 0, otherwise entire operation is multiplied by 0... which is 0
    while (i <= num) {
        j *= i;
        i++;
    }
    return j;
}
var c = factorial(3),
    d = factorial(5);
console.log(c, d);

readability();

// Fibonacci - Create a function to generate Fibonacci numbers.  In this famous mathematical sequence, each number is the sum of the previous two, starting with values 0 and 1.  Your function should accept one argument, an index into the sequence (where 0 corresponds to the initial value, 4 corresponds to the value four later, etc).  Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), fibonacci(3) = 2 (fib(1) + fib(2)3, or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8).  Do this without using recursion first.  If you don't know what a recursion is yet, don't worry as we'll be introducing this concept in Part 2 of this assignment.

title("Fibonacci");
function fibonacci(num) {
    var i,
        first = 0,
        second = 1,
        fibVal = 0;
    if (num == 0) {
        return 0;
    } else if (num == 1) {
        return 1;
    } else {
        for (i = 2; i <= num; i++) {
            fibVal = first + second; // We start `i` at 2 bc fibVal(0) = 0, fibVal(1) = 1, fibVal(2) = 1 [0 + 1], etc...
            first = second; // first becomes second bc we move pairs up by 1... [0,1], [1,1], [1,2], [2,3], etc...
            second = fibVal; // second becomes fibVal same reason as last, it has to move up as a set. The next number in the set is the sum of the last 2.
        }
    }
    return fibVal;
}
var e = fibonacci(8); // Replace number with whatever positive integer to get the Fibonacci value for that sequence.
console.log(e);

readability();

// Array: Second-to-Last: Return the second-to-last element of an array. Given [42, true, 4, "Liam", 7], return "Liam".  If array is too short, return null.

title("Second-to-Last");
function secondToNONE(arr) {
    if (arr.length >= 2) {
        return arr[arr.length - 2];
    } else {
        return null;
    }
}
var array1 = [42, true, 4, "Liam", 7], // function should return "Liam"
    array2 = [10]; // function should return null
console.log("Test1: " + secondToNONE(array1));
console.log("Test2: " + secondToNONE(array2));

readability();

// Array: Nth-to-Last: Return the element that is N-from-array's-end.  Given ([5,2,3,6,4,9,7],3), return 4.  If the array is too short, return null.

title("Nth-to-Last");
function nthToLast(arr, num) {
    if (arr.length - num >= 0) {
        return arr[arr.length - num];
    } else {
        return null;
    }
}
var array3 = [5, 2, 6, 4, 9, 7];
var positionFromLast = 3;
console.log(nthToLast(array3, 3));
readability();

// Array: Second-Largest: Return the second-largest element of an array. Given [42,1,4,3.14,7], return 7.  If the array is too short, return null.

title("Second-Largest");

function almostLargest(arr) {
    var largest = arr[0],
        secondLargest = -Infinity; // I have no idea wth to set this too... kill me now. I can't set to 0 bc what if an array had a negative?! AGGGHHHHHH!!!!!
    if (arr.length > 1) {
        // Array can't be smaller than 2... "2nd largest" and all that...
        for (var i = 0; i < arr.length; i++) {
            // Just like finding the max of an array
            if (largest < arr[i]) {
                largest = arr[i];
            }
            if (arr[i] !== largest && arr[i] > secondLargest) {
                // This parses out duplicates like 42 and 42 and makes sures secondLargest is not bigger than largest
                secondLargest = arr[i];
            }
        }
    } else {
        return null;
    }
    return secondLargest;
}
var array4 = [42, 1, 4, 3.14, 7];
console.log(almostLargest(array4));

readability();

// Double Trouble: Create a function that changes a given array to list each existing element twice, retaining original order.  Convert [4, "Ulysses", 42, false] to [4,4, "Ulysses", "Ulysses", 42, 42, false, false].

title("Double Trouble");
function dupeGlitch(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(arr[i], arr[i]); // apparently .push is not a single use item. This took me forever to realize.
    }
    arr = newArr;
    return arr;
}
console.log(dupeGlitch([4, "Ulysses", 42, false]));

readability(end);
