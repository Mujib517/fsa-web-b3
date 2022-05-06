var marks = [80, 50, 45, 50, 55, 40];
// calculate aggregate
// aggregate = (marksSecured/totalMarks) * 100
// print grade Distinction, FirstClass, SecondClass, ThridClass
// >=70, <70 && >=60, <60 && >=50,<50 && =>40, Failed
var marksSecured = marks[0] + marks[1] + marks[2]
    + marks[3] + marks[4] + marks[5];
var totalMarks = 6 * 100;

var aggregate = (marksSecured / totalMarks) * 100;
console.log(aggregate);
// conditional statement
// if else if ladder
if (aggregate >= 70) {
    console.log("Distinction");
}
else if (aggregate < 70 && aggregate >= 60) {
    console.log("First class");
}
else if (aggregate < 60 && aggregate >= 50) {
    console.log("Second class");
}
else if (aggregate < 50 && aggregate >= 40) {
    console.log("Third class");
}
else {
    console.log("Failed");
}