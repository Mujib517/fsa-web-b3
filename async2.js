// error, success
// callee
function addAsync(a, b, cb) {
    setTimeout(() => {
        if (a === 0) {
            cb(null, "Invalid Input");
        } else {
            var c = a + b;
            cb(c);
        }
    }, 2000);
}


// caller
addAsync(0, 20, function callback(res, err) {
    if (err) {
        console.log(err);
    } else {
        console.log(res);
    }
});