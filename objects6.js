// templates
// constructor function
// pascal casing
function Mobile(clr) {
    this.width = 5; // 8 bytes
    this.height = 7; // 8 bytes
    this.color = clr; // 8 bytes
}

Mobile.prototype.PI = 3.14;

Mobile.prototype.call = function () { // 8 bytes
    console.log('Calling....', this.width, this.height);
}

var m1 = new Mobile('Black'); // 24 bytes
var m2 = new Mobile('Red'); // 24 bytes
var m3 = new Mobile('Blue'); // 24 bytes

console.log(m1);

