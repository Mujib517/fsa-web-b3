// given a sorted array return index of the element
// ex: [10,20,30,40,50]  k: 40 true, k:35 false
// tracing
// O(N)
function linearSearch(arr, k) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === k) return i;
    }
    return false;
}
/*
    arr: 10, 20, 30, 40, 50
    k: 35
    i   i < 5   body
    0   true    10 === 35   
    1   true    20 ===35
    2   true    30 === 35
    3   true    40 === 35
    4   true    50 === 35
    5   false
*/





var arr = [10, 20, 30, 40, 50];
var res = linearSearch(arr, 30);
console.log(res);

