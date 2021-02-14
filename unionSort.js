// Efficiently combine two already-sorted arrays into a new sorted array containing the multiset union. Example: given [1,2,2,2,7] and [2,2,6,6,7], return [1,2,2,2,6,6,7].

function unionSort(arr1, arr2) {
    var i = 0,
        j = 0,
        newArr = [];

    while (i < arr1.length || j < arr2.length) {
        if (arr1[i] == arr2[j]) {
            newArr.push(arr1[i]);
            i++;
            j++;
        } else if (arr1[i] < arr2[j]) {
            newArr.push(arr1[i]);
            i++;
        } else {
            newArr.push(arr2[j]);
            j++;
        }
    }
    while (arr1[i]) {
        newArr.push(arr1[i]);
        i++;
    }
    while (arr2[j]) {
        newArr.push(arr2[j]);
        j++;
    }
    return newArr;
}

console.log(unionSort([1, 2, 2, 2, 7, 7, 7], [2, 2, 6, 6, 7, 8]));
console.log(unionSort([1, 2, 2, 3, 4, 7, 7, 7], [2, 2, 6, 6, 7, 8]));
// console.log(unionSort([1, 2, 2, 2, 7, 7, 7, 8, 8], [2, 2, 6, 6, 7, 8]));
