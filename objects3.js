// methods
var mobile = {
    'color': 'Black',
    width: 5,
    height: 7,

    call: function (number) {
        console.log("Calling...", number);
    },
    'prop-name': 'Property value'
};
// reflection
// dot
// bracket 
for (var key in mobile) {
    console.log(key, mobile[key]);
}

mobile["call"](); 