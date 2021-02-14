function insertionSort(array) {
    for (var i = 1; i < array.length; i++) {
        var temp = array[i];
        for (var j = i - 1; j >= 0 && array[j] > temp; j--) {
            array[j + 1] = array[j];
        }
        array[j + 1] = temp;
    }
    return array;
}

array1 = [4, 3, 2, 10, 12, 1, 5, 6];
console.log(insertionSort(array1));
