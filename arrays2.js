// transform [2,4,6,8,10]
// parseInt
// 13L
function transform(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * 2;
    }
    console.log(arr);
}

const arr = [1, 2, 3, 4, 5];

function times2(elem, index) {
    console.log(index);
    return elem * 2;
}

function times3(elem) {
    return elem * 3;
}

// higher order function
const res = arr.map(times2);


const res2 = arr.map((elem,index) => elem * 3);
const res3 = arr.map(elem => elem / 2);

console.log(res);

// transform(arr);

