// cloning (spread operator)
// shallow cloning X deep cloning
var m1 = {
    width: 5,
    height: 7,
    color: 'Green',
    features: {
        bluetooth: true,
        videoCall: false,
        headPhoneJack: false
    }
};
// var m2 = {
//     width: m1.width,
//     height: m1.height,
//     color: m1.color
// };
// reflection
var m2 = { ...m1, color: 'Red' };

console.log(m2);
console.log(m1.features === m2.features);


const arr = [10, 20, 30];
const arr2 = [40, 50, 60];

const res = [...arr, ...arr2];
console.log(res, arr, arr2);