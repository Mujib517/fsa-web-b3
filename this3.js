var obj = {
    0: 10,
    1: 20,
    2: 30,
    3: 40,
    4: 50,
    length: 5,
};

// var res = [].slice.call(obj, 1, 2);

var fn = [].slice.bind(obj);
var res = fn(0, 3);
console.log(res);


// run time polymorphism
// var arr = [10, 20, 30, 40, 50];
// var newArr = arr.slice(0, 2);
// console.log(newArr);