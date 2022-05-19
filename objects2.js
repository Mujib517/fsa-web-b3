// contacts book
// design question
var arr = [1, 2, 3, 4];
var names = ["abc", "xyz"];
var contact1 = {
    firstName: 'Abc',
    lastName: 'Xyz',
    phoneNumber: [{
        number: '+01-123-456-7890',
        type: 'Primary'
    }, {
        number: '91-123-456-7890',
        type: 'Office'
    }],
    email: ['abc@gmail.com', 'abc@company.com'],
    address: {
        hNo: '1-123',
        city: 'Hyderabad',
        zip: 500008,
        locality: 'Tolichowki'
    },
};

var contact2 = {
    firstName: 'Abc2',
    lastName: 'Xyz2',
    phoneNumber: [{
        number: '+01-123-456-7891',
        type: 'Primary'
    }, {
        number: '91-123-456-7891',
        type: 'Office'
    }],
    email: ['abc@gmail.com', 'abc@company.com'],
    address: {
        hNo: '1-123',
        city: 'Banglore',
        zip: 500008,
        locality: 'Electronic City'
    },
};

var phoneBook = [contact1, contact2];


// operations
// tell me the contact from banglore

function findByCity(city) {
    for (var i = 0; i < phoneBook.length; i++) {
        if (phoneBook[i].address.city === city) {
            console.log(phoneBook[i].firstName, phoneBook[i].lastName);
        }
    }
}

findByCity('Hyderabad');
findByCity('Banglore');