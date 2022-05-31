function addAsync(a, b) {
    var p = new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (a === 0) reject("Invalid input");
            else {
                var c = a + b;
                resolve(c);
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

// addAsync(10, 20)
//     .then(function (res) {
//         // add execution has finished
//         subAsync(res, 10)
//             .then(function (subRes) {
//                 mulAsync(subRes, 10)
//                     .then(function (finalRes) {
//                         console.log(finalRes);
//                     });
//             });
//     });

// addAsync(0, 20)
//     .then(function (res) {
//         return subAsync(res, 10);
//     })
//     .then(function (subRes) {
//         return mulAsync(subRes, 10);
//     })
//     .then(function (finalRes) {
//         console.log("Final Res", finalRes);
//         return finalRes;
//     })
//     .then(function (val) {
//         console.log(val);
//     })
//     .catch(function (err) {
//         console.log(err);
//     });

var p1 = addAsync(10, 20);
var p2 = subAsync(20, 10);
var p3 = mulAsync(10, 20);

// parallel
// Promise.all([p1, p3, p2])
//     .then(function (res) {
//         console.log(res, 'res');
//     });

Promise.any([p1, p2, p3])
    .then(function (res) {
        console.log(res);
    });
