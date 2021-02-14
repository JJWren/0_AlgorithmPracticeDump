let testArray = [8, 7, 4, 2, 10, 1, 12, 3];

function partitionArray(array, pivot) {
    console.log("Orginal Pivot Value:" + array[pivot]);
    // iterate through array
    for (let i = 0; i < array.length; i++) {
        // debugging - check value of current index
        console.log("Current Index Iteration: " + i);
        console.log("Current Index Value: " + array[i]);
        console.log("Current Pivot Value: " + array[pivot]);
        console.log(array);
        // compare index value to pivot value
        if (array[i] < array[pivot]) {
            // check position of index relative to pivot
            if (i > pivot) {
                // this stores the value of the item we are removing
                let temp = array[i];
                // at that position in array, remove item from array
                array.splice(i, 1);
                // must subtract 1 from i bc values shift down after removal of curr index
                i--;
                // put item to the left of pivot
                array.splice(pivot, 0, temp);
                // add one to pivot and index to adjust for value moving to left
                pivot += 1;
                i++;
                // debugging
                console.log("\tMoved through the 'if':");
                console.log("Current Index Value: " + array[i]);
                console.log("Current Pivot Value: " + array[pivot]);
                console.log("\t" + array);
            }
        }
        // compare index value to pivot value
        else {
            // check position of index relative to pivot
            if (i < pivot) {
                // this stores the value of the item we are removing
                let temp = array[i];
                // at that position in array, remove item from array
                array.splice(i, 1);
                // subtract one from index to account for curr index being removed
                i--;
                // also, subtract one from pivot to adjust for value being moved from the left
                pivot -= 1;
                // put item to far right of pivot
                array.splice(pivot + 1, 0, temp);
                // debugging
                console.log("\tMoved through the 'else':");
                console.log("Current Index Value: " + array[i]);
                console.log("Current Pivot Value: " + array[pivot]);
                console.log("\t" + array);
            }
        }
        // break up debugging logs
        console.log("\n");
    }
    return array;
}

console.log(partitionArray(testArray, 4));
console.log("---------------BREAK---------------");
console.log(partitionArray(testArray, 0));
console.log("---------------BREAK---------------");
console.log(partitionArray(testArray, 2));
