// given a number return whether a number is prime
// constraints:
/*
    0 < n <= 10^9
*/
// def: number which is divisible by exactly 2 numbers 1 & itself
// n: 1 & n
// example: 2,3, 5, 7, 11, 13, 17
// 4: 1, 2, 4
// 16: 1, 2, 4, 8 , 16
// 9: 1, 3, 9
/*
    12

    12%0

    count: 6
    1,2, 3, 4,5,6,7,8,9,10,11,12

    n: 7

    1 2 3 4 5 6 7

    factors: 2

    n: 9
*/
// O(N)
// O(LogN)
// O(N^2) 
// O(N^3)
// O(sqrt(N))
// 1ms
// 10000 : 10000
// 10^9: 10^9
// naive
/*
    3 : 1 , 3
    5: 1, 5 
    6: 1, 2, 3 6 (1 to 2)
    7: 1 7 (1 to 2)
    8: 1 2 4 8 (1 to 2)
    12 1 2 3 4 6 12  (1 to 3)
    16: 1 2 4 8 16 (1 to 4)
    

    O(N/2) = O(N)
    O(sqrt(N))

    100 -> 100
    100 -> 10
*/
function isPrime(n) {
    if (n <= 1) return false;
    var upper = Math.sqrt(n);
    for (var i = 2; i <= upper; i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

var res = isPrime(10);
console.log(res);
console.log(isPrime(3));
console.log(isPrime(5));
console.log(isPrime(9));
console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(0));