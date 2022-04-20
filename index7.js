// only one thing SRP
// small
// java: method overloading
function add(a, b) {
    if (typeof a === 'function') {
        a = a();
    }
    if (typeof b === 'function') {
        b = b();
    }
    if (Array.isArray(a)) {
        
    }
    var c = a + b;
    console.log(c);
}

add(10, 20);
add("abc ", "def");
add(true, false);

function f1() {
    return 500;
}

function f2() {
    return 600;
}
// functional programming
add(f1, f2); // 1100

add([1, 2, 3, 4], [5, 6, 7, 8]);

add(100, f1);
add(200, f2);
add(f1, 100);


