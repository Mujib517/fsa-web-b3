// functions
// parameters, arguments
// y = mx + c
// no void
// loosely typed lang
function add(a, b) {
    var c = a + b;
    console.log(c);
    return c;
}

add(10, 20);
add("Abc", " def");
add(true, false);
add([1, 2, 3], [4, 5, 6]);
add({}, {});

add(10, 20, 30, 40);
add(10);
add();

