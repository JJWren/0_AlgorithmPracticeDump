function adjacentElementsProduct(inputArray) {
    var maxValue = inputArray[0];
    for(var i = 0; i < inputArray.length - 1; i++) {
        currValue = inputArray[i] * inputArray[i+1];
        if(currValue > maxValue) {
            maxValue = currValue;
        }
    }
    return maxValue;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));