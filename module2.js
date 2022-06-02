var fs = require('fs');

var buffer = fs.readFileSync('about.html');

console.log(buffer.toString());