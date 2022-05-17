// camel casing
// lowercase letter
// words separated by an uppercase letter
// calculate_aggregate
// agg = (marksSecured/totalMarks)*100
// var marks = [80, 70, 60, 55, 66, 87];
// 80 + 70 + 60 + 55 + 66 + 87 
// SRP

// entity 1
function calculateAggregate(marks) {
    var totalMarks = 600;
    var marksSecured = 0;

    for (var i = 0; i < marks.length; i++) {
        marksSecured = marksSecured + marks[i];
    }

    var agg = (marksSecured / totalMarks) * 100;
    return agg;
}

// entity 2
var res = calculateAggregate([80, 70, 60, 55, 66, 87]);
console.log(res);
