function addAsync(a, b, cb) {
    setTimeout(function () {
        var c = a + b;
        cb(c);
    }, 2000);
}

function subAsync(a, b, cb) {
    setTimeout(function () {
        var c = a - b;
        cb(c);
    }, 2000);
}

function mulAsync(a, b, cb) {
    setTimeout(function () {
        var c = a * b;
        cb(c);
    }, 1000);
}


// sequential 
// country -> states -> cities 
// add -> sub -> mul
// callback hell
addAsync(10, 20, function (res) {
    // execution has finished
    subAsync(res, 10, function (subRes) {
        // sub execution has finished
        mulAsync(subRes, 10, function (finalRes) {
            console.log(finalRes);
        });
    });
});

// parallel
// single threaded
// payment processing -> payment gateway -> 15sec 
// addAsync(10, 20, function (res) {
//     console.log('add', res);
// });

// subAsync(100, 20, function (res) {
//     console.log('sub', res);
// });

// mulAsync(100, 20, function (res) {
//     console.log('mul', res);
// });