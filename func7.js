// given an array return min element
/*
    arr: [20,8,5,10,-1,-6,10]
    min: -6

    sorting: [-6,-1,5,8,10,10,20]
    O(NLogN) > O(N)
    O(N^2)

    min: -6
    O(N)
*/
function findMin(arr) {
    var minSoFar = Number.MAX_SAFE_INTEGER;// index range out of exception

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < minSoFar) {
            minSoFar = arr[i];
        }
    }

    return minSoFar;
}

// console.log(findMin([20, 8, 5, 10, -1, -6, 10]));
// console.log(findMin([]));
// state mgmt
function minRec(arr, i, minSoFar) {
    if (i === arr.length) {
        return minSoFar;
    }
    // base 
    if (arr[i] < minSoFar) {
        minSoFar = arr[i];
    }
    return minRec(arr, i + 1, minSoFar);
}

var res = minRec([20, 8, 5, 10, -1, -6, 10], 0, Number.MAX_SAFE_INTEGER);
console.log(res);