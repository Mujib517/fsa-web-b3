// variables
// memory location RAM, temporary
// slowest
// assignment 
// declaration
// initialization
// var x = 10;

// data types
var age = 20; // number
var name = "Joseph"; // string
var isActive = true; // boolean
var gpa = 6.76; // double, number
var marks = [10, 20, 30, 50]; // array, object
var x; // undefined
var obj = {}; // object
var calculate = function () { }
// number, boolean, string, object, undefined, function
// two fundamentals: save data & operate data
// typeof 

// operators
// arithmatic operators: +, - , * , /, %, ++, --
// conditional operators: <, >, <=, >=, ==, !=, ===, !==
// logical operators: &&, ||, !
// bitwise operators: &, |, ^, <<, >>
// assignment operator =

// var b = 20;
// a++; // a  = a+1; overwritten
// var c = a++;
// var c = ++a;
// strict equality
// var a = 10; //  number
// var x = 10; // string
// CMD + /
// CTRL + /


// var age = 20; // 010101

// // shorthand evaluation
// const isAdult = age >= 18 && age <= 40;
// const isYoung = age >= 20 || age <= 40;

// var isActive = true;
// console.log(!isActive);

var x = 10; // 0000 1010
// 0000 0000
// 0001 0000
// 0010 0000
// 2^x
var res = x >> 4 // 2^10

// +, -
// 2+2+2
// 2*2*2
// 10/2
console.log(res);

/*
A   B   A&B
0   0   0
0   1   0
1   0   0
1   1   1

A   !A
0   1
1   0

A   B   A|B
0   0   0
0   1   1
1   0   1
1   1   1
*/
