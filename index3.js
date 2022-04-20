// operators
// artithmatic operators: +,-,*,/,%
// conditional operators: <,>,<=,>=, ==, === (strict euqlity), !=, !==
// Logical operators: &&, ||, !
// bitwise operator
// unary operators: ++, --, pre increment (increment first, assignemnt next), 
// post increment (assignment first, increment next)

// operands
// var a = 10;
// var b = 21;

// console.log(a > 10);
// console.log(++a); //11
// console.log(--b); //20
// var x = a++; //10
// var x = ++a; // 11
// console.log(x);

// console.log(a++); //11
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(b % a);


var age = 30;

// shorthand evaluation
var isYoung = (age >= 20) || (age <= 40);

console.log(isYoung);
/*
A   B   A&B     A|B
F   F   F       F
T   F   F       T
F   T   F       T
T   T   T       T
*/

/*
A   !A  
0   1
1   0
*/

// var x = true;
// console.log(!!x);

// 0000 0001
// 0000 0000
// 0000 0000 0000
var y = 1 << 5; // 2^x

var z = 100000 >> 4;

console.log(z);