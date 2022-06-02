// module
// commonjs module pattern

const PI = 3.14;
module.exports = PI;

function fn() {

}

module.exports = fn;

var m1 = {

};

module.exports = m1;

class Mobile {
    width = 5;
    height = 7;

    call() {
        console.log("call.......");
    }
}

module.exports = new Mobile();
