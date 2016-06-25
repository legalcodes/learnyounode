var fs = require('fs');

var buffer = fs.readFileSync(process.argv[2]).toString();
var lines = buffer.split('\n').length - 1;
console.log(lines);
