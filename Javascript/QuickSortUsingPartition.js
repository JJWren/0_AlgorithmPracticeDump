let testArray = [8, 7, 4, 2, 10, 1, 12, 3];

// Pull partitionArray in for use in QuickSort
function partitionArray(array, pivot) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] < array[pivot]) {
            if (i > pivot) {
                let temp = array[i];
                array.splice(i, 1);
                i--;
                array.splice(pivot, 0, temp);
                pivot += 1;
                i++;
            }
        }
        else {
            if (i < pivot) {
                let temp = array[i];
                array.splice(i, 1);
                i--;
                pivot -= 1;
                array.splice(pivot + 1, 0, temp);
            }
        }
    }
    return array;
}

function quickSort(array) {
    for(let i = 0; i < array.length; i++){
        partitionArray(array, i);
    }
    array.forEach((e, i) => {
        if(array[i + 1] < e){
            quickSort(array);
        }
    });
    return array;
}

console.log(quickSort(testArray, 4));
console.log("---------------BREAK---------------");
console.log(quickSort(testArray, 0));
console.log("---------------BREAK---------------");
console.log(quickSort(testArray, 2));