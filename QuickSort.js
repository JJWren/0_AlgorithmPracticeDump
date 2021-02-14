let testArray = [8, 7, 4, 2, 10, 1, 12, 3];

function quickSort(arr) {
    // nothing to do
    if (arr.length < 2) {
        return arr;
    }
    // forcing pivot point
    let pivot = arr.length - 1;
    // iterate through array until pivot
    for (var j = 0, i = j - 1; j < pivot; j++) {
        if (arr[j] <= arr[pivot]) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[pivot], arr[i + 1]] = [arr[i + 1], arr[pivot]];
    pivot = i + 1;
    let left = arr.slice(0, pivot);
    let right = arr.slice(pivot);
    return quickSort(left).concat(quickSort(right));
}

console.log(quickSort(testArray, 4));
console.log("---------------BREAK---------------");
console.log(quickSort(testArray, 0));
console.log("---------------BREAK---------------");
console.log(quickSort(testArray, 2));
