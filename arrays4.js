const arr = [1, 2, 3, 4, 5];
// map
// filter
// reduce
function sum(prev, current) {
    return prev + current;
}

const res = arr.reduce(sum);

console.log(res);