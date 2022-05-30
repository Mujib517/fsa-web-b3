// sync tasks (no delay): groceries
// async tasks (delays): ms 1 sec 
// function add(a, b) {
//     a++;
//     b++;
//     var c = a + b;
//     return c;
// }

// var res = add(10, 20);
// console.log(res);
// select * from products;
// handle async tasks: callbacks
// restaurant
function addAsync(a, b, cb) {
    console.log("line 14");
    setTimeout(function () {
        console.log("line 15");
        a++;
        b++;
        var c = a + b;
        console.log("line 20");
        cb(c);
    }, 2000);
    console.log("line 23");
}

// entity 1
function phoneNumber(res) {
    console.log("Task finished", res);
}
addAsync(10, 20, phoneNumber);
