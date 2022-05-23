'use strict'; // es5
// behavior strict mode 
// sloppy
// production: bug
// mobile
// var m1 = Object.create({}, {
//     // prop descriptor
//     pi: {
//         value: 3.14,
//         enumerable: false,
//         writable: false,
//         configurable: false
//     },
//     width: { value: 5, writable: false, enumerable: true },
//     height: { value: 7, enumerable: true },
//     color: { value: 'Red', enumerable: true }
// });

// var x = 100;
// console.log(x);
function fn(a, b) {
    console.log(a + b);
}

fn(10, 20);