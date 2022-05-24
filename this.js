// this: refers to current object
// this: context

'use strict';
/*
    1. In a function this refres to global object (browser: window, nodeJs: global)
    2. In method this refers to the object itself in strict & sloppy mode.
    3. Extracted method's this refers to global object

    4. strict mode function's this refers to undefined
    5. strict mode: extracted methods' this refers to undefined
    6. Inner function refers to global in sloppy mode
    7. Inner function refers to undefined in strict mode
*/
// function fn() {
//     console.log(this); // global
// }

// fn();

var m1 = {
    width: 5,
    print: function () {
        function f1() {
            console.log(this.width);
        }

        f1();
    }
};

m1.print();

// var f = m1.print;
// f();