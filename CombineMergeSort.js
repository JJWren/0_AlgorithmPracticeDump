// Work in Progress
function combineSort(left, right){
    let result = []
    let l = 0;
    let r = 0;
    while (l < left && r < right){
        if (left[l] < right[r]){
            result.push(left[l]);
            l++;
        }
        else{
            result.push(right[r])
            r++
        }
        return result
            .concat(left.slice(l))
            .concat(right.slice(r))
    }
}
console.log(combine([38,27,43,3], [9,82,10]))



function mergeSort(arr){
    if (len <= 1){
        return arr;
    }
    let mid = Math.floor(len/2)
    left = arr.slice(0,mid)
    right = arr.slice(mid)
    return combine(mergeSort(left), mergeSort(right));
}
console.log(mergeSort([38,27,43,3,9,82,10]))
