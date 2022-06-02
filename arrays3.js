const arr = [1, 2, 3, 4, 5];
// filter elements even elements

// function filter(arr) {
//     var res = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) res.push(arr[i]);
//     }

//     return res;
// }

function isEven(elem) {
    return elem % 2 === 0;
}

function isOdd(elem) {
    return elem % 2 !== 0;
}

var res = arr.filter(isOdd);

console.log(res);