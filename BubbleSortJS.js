// If given an array of numbers, sort from lowest to greatest

// var array1;
// array1 = [7, 2, 5, 4, 0];

// function bubbleSort(array) {
//     for (var i = 0; i < array.length; i++) {
//         console.log("Count: " + (i + 1));
//         console.log(array);
//         for (var j = 0; j < array.length; j++) {
//             var temp;
//             if (array[j] > array[j + 1]) {
//                 // temp = array[j];
//                 // array[j] = array[j + 1];
//                 // array[j + 1] = temp;
//                 // ALT one liner swap, no temp required
//                 [array[j], array[j + 1]] = [array[j + 1], array[j]];
//             }
//         }
//     }
//     return array;
// }

// console.log(bubbleSort(array1));

// Selection Sort

var array1;
array1 = [7, 2, 5, 4, 0];

function selectionSort(array) {
    for (var i = 0; i < array.length; i++) {
        var min = i;
        console.log("Count: " + (i+1));
        console.log(array);
        for (var j = i + 1; j < array.length; j++) {
            if (array[min] > array[j]) {
                // swap smallest with largest
                min = j;
            }
        }
        if (min !== i) {
            [array[i], array[min]] = [array[min], array[i]];
        }
    }
    return array;
}

console.log(selectionSort(array1));
