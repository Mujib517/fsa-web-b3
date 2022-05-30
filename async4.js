// promises: resolved, rejected
// token
// Promise: Pending, Resolved, Rejected
function addAsync(a, b) {
    var p = new Promise(function (res, rej) {
        setTimeout(function () {
            if (a === 0) {
                rej("Invalid Input");
            } else {
                var c = a + b;
                res(c);
            }
        }, 2000);
    });

    return p;
}

var res = addAsync(10, 20);

res
    .then(function (res) {
        console.log(res);
    })
    .catch(function (err) {
        console.log(err);
    });