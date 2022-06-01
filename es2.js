// shorthand prop notation
// object destructering
// array destruct


// const width = 5;
// const height = 7;
// const color = 'Black';

// const mobile = {
//     width,
//     height,
//     color
// };


var m1 = {
    width: 5,
    height: 7,
    color: 'Red'
};

// var width = m1.width;
// var height = m1.height;
// var color = m1.color;

var { width, height, color } = m1;

console.log(width, height, color);

const arr = [10, 20, 30, 40];

var first = arr[0];
var second = arr[1];

const [first, second, third] = arr;

console.log(first, second);

// console.log(arr[0], arr[1], arr[2], arr[3]);