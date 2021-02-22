// Merge Sort
// Big O  => O(n*Log n)
// Set result varible for the combined array
// set to iterator starting at 0
// start looping until the length of both iterators
// Set a condition if one is less than the other push it into results
// else push the other
// start looping both iterators to add the remaining values
//return result arr

function merge(arr1, arr2) {
    let result = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] > arr2[j]) {
            result.push(arr2[j]);
            j++;
        } else {
            result.push(arr1[i]);
            i++;
        }
    }
    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }
    return result;
}

// set base case
// set a variable to the midpoint
// set a left variable to recursively split the array for the left side
// do the same for the right side
// return a call of the merge to combine left and right after reaching base case

function supaSlice(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = supaSlice(arr.slice(0, mid));
    let right = supaSlice(arr.slice(mid));
    return merge(left, right);
}

console.log(supaSlice([5, 3, 4, 2, 2, 5, 1, 3]));
