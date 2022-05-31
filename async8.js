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

// IIFE: immedidately invoked function expr
// design pattern
// sync, async (callbacks,promises, async await)
// async: timers, file, db, events, web service calls
(async function () {
    try {
        const addRes = await addAsync(10, 20);
        const subRes = await subAsync(addRes, 10);
        const finalRes = await mulAsync(subRes, 10);

        console.log(finalRes);
    } catch (e) {
        console.log(e);
    }
})();




