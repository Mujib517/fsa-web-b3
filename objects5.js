function fn(a, b) {
    a.width = 100;
}
var x = 10;
var y = 20;

var o1 = { width: 10, height: 20 };
var o2 = { width: 10, height: 20 };


var o3 = o1;

o3 === o1

x === y;

fn(o1, o2); // value types