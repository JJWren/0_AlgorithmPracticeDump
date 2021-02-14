function balancePoint(arr) {
    if (arr.length < 3) {
        console.log("FALSE");
        return false;
    }

    for (var i = 1; i < arr.length; i++) {
        var sumLeft = 0;
        var sumRight = 0;

        // check left
        for (var j = 0; j <= i; j++) {
            sumLeft += arr[j];
        }

        // check right
        for (var k = i + 1; k < arr.length; k++) {
            sumRight += arr[k];
        }

        // compare left to right
        if (sumLeft == sumRight) {
            console.log("TRUE");
            return true;
        }
    }
    // left cannot possibly equal right
    console.log("FALSE");
    return false;
}

balancePoint([2]);
balancePoint([2, 2]);
balancePoint([1, 2, 3, 4, 10]);
balancePoint([1, 2, 3, 4, 9]);

// ----------------------------------------------------------------

function balanceIndex(arr, index) {
    if (arr.length < 3) {
        console.log("FALSE");
        return -1;
    }

    var sumLeft = 0;
    var sumRight = 0;

    // check left
    for (var j = 0; j < index; j++) {
        sumLeft += arr[j];
    }

    // check right
    for (var k = index + 1; k < arr.length; k++) {
        sumRight += arr[k];
    }

    // compare left to right
    if (sumLeft == sumRight) {
        console.log("TRUE");
        return true;
    }

    // there is no balance if we make it back outside the first for loop
    console.log("FALSE");
    return -1;
}

balanceIndex([2], 0);
balanceIndex([2, 2], 1);
balanceIndex([1, 2, 3, 0, 3, 2, 1], 3);
balanceIndex([1, 2, 3, 0, 3, 2, 1], 2);
