function addAsync(a, b) {
    var p = new Promise(function (res, rej) {
        setTimeout(function () {
            if (a === 0) rej("Invalid input");
            else {
                var c = a + b;
                res(c);
            }
        }, 2000);
    });

    return p;
}

function subAsync(a, b) {
    var p = new Promise(function (res, rej) {
        setTimeout(function () {
            var c = a - b;
            res(c);
        }, 2000);
    });

    return p;
}

function mulAsync(a, b) {
    var p = new Promise(function (res, rej) {
        setTimeout(function () {
            var c = a * b;
            res(c);
        }, 1000);
    });

    return p;
}

// parallel
// independent
// sequentially 

// addAsync(10, 20).then(function (res) {
//     console.log('add', res);
// });

// subAsync(10, 20).then(function (res) {
//     console.log('sub', res);
// });

// mulAsync(10, 20).then(function (res) {
//     console.log('mul', res);
// });
// pending, resolved, rejected
// promise caches result
// promise gives you only one value
var prms = addAsync(10, 20);

console.log(prms); // pending

prms
    .then(function (res) {
        console.log(prms);
    })
    .catch(function (err) {
        console.log(prms);
    });

prms
    .then(function (res) {
        console.log("result ", res);
    })
    .catch(function (err) {
        console.log(prms);
    });