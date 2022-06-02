// [10,20,30,40,50]
// k: 30
// search an element using binary search return position of the element

function binSearch(arr, k) {
    let low = 0, high = arr.length - 1;
    while (low <= high) {
        let mid = parseInt((low + high) / 2);

        if (arr[mid] === k) return mid;
        if (arr[mid] < k) low = mid + 1;
        else high = mid - 1;
    }

    return -1;
}

function binSearchRec(arr, k, low, high) {
    if (low > high) return -1;

    let mid = parseInt((low + high) / 2);
    if (arr[mid] === k) return mid;
    if (arr[mid] < k) return binSearchRec(arr, k, mid + 1, high);
    return binSearchRec(arr, k, low, mid - 1);
}


console.log(binSearchRec([10, 20, 30, 40, 50, 60], 50, 0, 5));
console.log(binSearchRec([10, 20, 30, 40, 50, 60], 35, 0, 5));