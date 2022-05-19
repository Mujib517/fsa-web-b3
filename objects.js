// nodejs
// running a program
// variables
// data types
// functions
// operators
// conditional stmts
// loops
// strings
// arrays
// objects
// encapsulation
// object literals or object initializer
// var name = "Abc";
// var age = 20;
// var dob = "01-01-1999";
// var branch = "CSE";
// var fee = 50000;
// real word entity
// object as a dictionary

var x = 100; // 64 bit or 8 bytes

var account = {
    id: 12234555, // 8 bytes
    ifsc: 'SCBL0002022', // 8 bytes
    amount: 5000,

    withDraw: function () { },
    deposit: function () { }
};

var person = {
    name: "Abc",
    age: 20,
    dob: "01-01-1999",
    fee: 50000,
    branch: "CSE",

    payFee: function (amount) {
        console.log("Fee paid", amount);
    }
};




