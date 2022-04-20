// function
// everything is a value, 2 categories: truthy and falsy
// falsy: false, 0, "", undefined, null, NaN
// java: data & methods, state&behavior, void

// fn() ;

// function fn() {
//     console.log("hello world");
//     console.log("................");
// }
// // var str = '10';
// // var z = +str;
// // console.log(typeof z, z);

// var x = fn();
// console.log(x);
function add(a, b) {
    var c = a + b;
    console.log(c);
    return c;
}

add({},true);

// function sub(a, b) {
//     return a - b;
// }

// console.log(add(10, 20));
// console.log(add("abc", "def"));
// console.log(add(true, true));