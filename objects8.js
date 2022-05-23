// object initializers
// constructor function
// class 
// Object.create
// private public
var abstractMobile = {
    call: function () {
        console.log("Calling...");
    }
};

var m1 = Object.create(abstractMobile, {
    // prop descriptor
    pi: {
        value: 3.14,
        enumerable: false,
        writable: false,
        configurable: false
    },
    width: { value: 5, enumerable: true },
    height: { value: 7, enumerable: true },
    color: { value: 'Red', enumerable: true }
});

// // reconfiguration
// Object.defineProperty(m1, 'pi', {
//     value: 4.14
// });
// console.log(m1);

// reflection
// for (var key in m1) {
//     console.log(key);
// }

// giving errors
m1.width = 1000;
console.log(m1);