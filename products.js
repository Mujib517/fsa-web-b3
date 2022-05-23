var p1 = {
    id: 'abc-dewf-12xy-12334',
    brand: 'Apple',
    model: 'Iphone 13',
    price: 700,
    inStock: true,
    stock: 5,
    reviews: [{
        name: 'Abc',
        subject: 'Good Product',
        review: '...................',
        date: new Date(),
        ratings: 4
    },
    {
        name: 'Xyz',
        subject: 'Excellent Product',
        review: '...................',
        date: new Date(),
        ratings: 5
    }]
};

var p2 = {
    brand: 'Samsung',
    model: 'Galaxy S22',
    price: 1000,
    inStock: false
};

var p3 = {
    brand: 'Samsung',
    model: 'Galaxy S21 Ultra',
    price: 1300,
    inStock: true
};

var products = [p1, p2, p3];

if (p1.stock < 10) {
    var res = "only " + p1.stock + " left";
    console.log(res);
}