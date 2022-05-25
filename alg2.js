/*
    arr: [1,1,2,3,4,5,5,5,6,7,9,9,100,100];
    floor(5): 5 LogN
    ceil(5): 7  LogN
    frequency: (ceil-floor+1) O(1)
    naive/brute force:

    O(LogN)+O(LogN)+1 = O(2LogN) = O(LogN)

    Given a sorted array find an element
    var arr = [10,20,30,40,50]
    k: 35, low=0, high = 4
    mid: 2

    low = mid+1 = 3
    high: 4
    mid: 3

    high = 3
    low = 3
    mid: 3

    low = 4
    high = 3

    1/2 1/4 1/8 1/16

    O(LogN)
    2^100 2^100 100
*/

function binSearch(arr, k) {
    var low = 0, high = arr.length - 1;
    var mid = parseInt((low + high) / 2);
    while (low <= high) {
        var mid = parseInt((low + high) / 2);
        if (arr[mid] === k) return true;
        if (arr[mid] > k) {
            // left
            high = mid - 1;
        } else {
            // right
            low = mid + 1;
        }
    }

    return false;
}

// tracing
// leetcode
/*
  arr: 10, 20, 30, 40, 50 
  low   high    low<=high  mid  
  0     4           t       2

*/
console.log(binSearch([], 50));
console.log(binSearch([50], 50));
console.log(binSearch([10, 20, 30, 40, 50], 50));
console.log(binSearch([10, 20, 30, 40, 50], 35));
