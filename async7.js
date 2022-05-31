function addAsync(a, b) {
    var prms = new Promise(function (res, rej) {
        setTimeout(function () {
            if (a === 0) rej("Invalid input");
            else {
                var c = a + b;
                res(c);
            }
        }, 1000);
    });
    return prms;
}

// async await
// var p = addAsync(10, 20);

// p.then(function (res) {
//     console.log(res);
// });
async function init() {
    try {
        var res = await addAsync(10, 20);
        console.log("res", res);
    } catch (e) {
        console.log(e);
    } finally {
        // clean up
        // file.close();
        console.log('finally');
    }
}

init();