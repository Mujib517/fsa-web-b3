var arr = [10, 20, 30, 40, 50, 60, 70];
// 0 to 6
// scalar variable: one value
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// loop invariant
// multiplication table
 
/*
    i
    0
    1
    2
    3
    4
    5
    6
*/
// for (var i = 0; i < arr.length; ++i) {
//     var elem = arr[i];
//     console.log(elem);
// }
// 1 to 100
// for (var i = 1; ; i++) {
//     console.log(i);
//     if (i === 100) {
//         break;
//     }
// }

// print all even numbers till 100
// initialization
// condition
// body
// inc/dec

// increment/decrement
// condition
// body
for (var i = 1; i <= 100; i++) {
    if (i % 2 !== 0) continue;
    console.log(i);
}

// for (var i = 0; i < 10; i++) {
//     if (i === 5) break;
//     for (var j = 0; j < 10; j++) {
//         if (j === 5) break;
//         console.log(i, j);
//     }
// }