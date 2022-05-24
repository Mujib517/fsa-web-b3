'use strict';

var mobile = {
    name: "Mobile",
    print: function () {
        console.log(this.name);
    }
};

var car = {
    name: "Car"
};

var bike = {
    name: "Bike"
};

// context changing
mobile.print.call(car);
mobile.print.apply(car);

mobile.print.call(bike);

var f = mobile.print.bind(car); // fixes the context
f();

var b = mobile.print.bind(bike);
b();
