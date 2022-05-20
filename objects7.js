// class 
// ES6
// inherit
// initializer
// construction
// class
// advanced Object.create
class AbstractMobile {

    constructor() {
        console.log("Super constructor");
    }

    msg() {
        console.log("Message");
    }

    dateTime() {

    }

}

class Mobile extends AbstractMobile {
    constructor(color) {
        super();
        this.width = 5;
        this.height = 7;
        // instance variable
        this.color = color;
        console.log("Child Constructor");
    }
    call() {
        console.log("calling...");
    }

    // method overriding
    // method hiding
    msg() {
        console.log("new msg function");
        super.msg();
    }

    toString() {
        console.log(this);
    }
}

var m1 = new Mobile('Black');
m1.toString();
// m1.adkfjfadkfjkd();