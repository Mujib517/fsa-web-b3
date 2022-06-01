// function addAsync(a, b, cb) {
//     setTimeout(function () {
//         var c = a + b;
//         cb(c);
//     }, 2000);
// }

// addAsync(10, 20, res => console.log(res));
'use strict';

var m1 = {
    width: 5,
    height: 7,
    call: function () {
        // IIFE
        (() => {
            console.log(this);
        })();
    }
};

m1.call();
