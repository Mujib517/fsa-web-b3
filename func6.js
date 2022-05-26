// two paradigms
// iterative
// recursive: resursion
/*
    4! = 4*3!
       = 4*3*2!
       = 4*3*2*1!
       = 4*3*2*1*0!
*/
/*
    print 1 to n
*/
// function print(n) {
//     for (var i = 1; i <= n; i++) {
//         console.log(i);
//     }
// }

function printRec(n) {
    if (n === 0) return;

    printRec(n - 1);
    console.log(n);
}

// printRec(10);