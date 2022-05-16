// while loop
var marks = [80, 70, 60, 55, 66, 87];
// aggregate = (marksSecured/TotalMarks) * 100
// var i = 0;
// while (i < arr.length) {
//     console.log(arr[i]); // arr[0], arr[1], arr[2]
//     i++;
// }
var marksSecured = 0;
var totalMarks = 600;
for (var i = 0; i < marks.length; i++) {
    // marksSecured = marksSecured + marks[i];
    marksSecured += marks[i];
}

var aggregate = (marksSecured / totalMarks) * 100;
console.log(aggregate);