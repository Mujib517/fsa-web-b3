const arr = [1, 2, 3, 4, 5];
// var res = arr.filter(elem => elem % 2 === 0);
var res = arr.some(elem => elem % 2 === 0);

console.log(res);