// list
var arr = [1, 2, 3, 4];

var res = [10,20,30].concat(arr);

console.log(res);

// arr.unshift(100);
// console.log(arr);

// arr.unshift(10);
// arr.shift();
// console.log(Array.isArray(arr));
// console.log(Array.isArray(obj));
// input: arr,n find an element from array
// var res = arr.lastIndexOf(6);
// console.log(res);
// var newArr = arr.slice(1, 3);
// console.log(newArr, arr);
// arr.splice(1, 1);
// console.log(arr);
console.log(typeof 10);
console.log(typeof "10"); // string
console.log(typeof "abc");
console.log(typeof {});
console.log(typeof []);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null); // object

// var x = "10.20";
// var n = +x;
// console.log(typeof n, n);

var x = {};
var b = !!x; // true
console.log(b);