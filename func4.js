// write a program to calculate electricity bill
/*
    slabs: 
        1 - 50 : 1.5rs
        51- 100: 2.5rs
        101-200: 4rs
        >200:    6rs
    units: 
        50*1.5 = 75
        5=0*2.5= 125
        100*4 = 400
        100*6 = 600
*/
// input & output
function calculateBill(units) {
    var amount = 0;

    if (units > 200) {
        var chargeableUnits = (units - 200);
        var value = chargeableUnits * 6;
        // amount = amount + value;
        amount += value;
        units = units - chargeableUnits;
    }
    if (units > 100) {
        var chargeableUnits = (units - 100);
        var value = chargeableUnits * 4;
        amount += value;
        units = units - chargeableUnits;
    }
    if (units > 50) {
        var chargeableUnits = (units - 50);
        var value = chargeableUnits * 2.5;
        amount += value;
        units = units - chargeableUnits;
    }

    var value = units * 1.5;
    amount += value;

    return amount;
}

var res = calculateBill(200);
console.log(res);