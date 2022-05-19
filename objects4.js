var m1 = {
    color: 'Black',
    width: 5,
    height: 7,
    call: function (number) {
        console.log("Calling...", number);
    },
};

var m2 = {
    color: 'Black',
    width: 5,
    height: 7,
    call: function (number) {
        console.log("Calling...", number);
    },
};

var m3 = {
    color: 'Black',
    width: 5,
    height: 7,
    call: function (number) {
        console.log("Calling...", number);
    },
};

var m4 = {
    color: 'Green',
    width: 5,
    height: 7,
    call: function (number) {
        console.log("Calling...", number);
    },
};

// value types (number, boolean)
// reference types (objects, arrays)
var x = true;
var y = true;
// console.log(x === y);

// console.log(m1 === m2); // memory location

var mx = m1; // referencing
var z = x; // copies

var my = mx;

my.width = 1000000;

console.log(m1);

var str = "abc";
var str2 = str;
console.log(str === str2);