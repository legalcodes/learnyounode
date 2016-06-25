var fs = require('fs');

var buffer = fs.readFile(process.argv[2], 'utf8', function(error, data){
		if (error) { return error; } else {
				// count \n characters'
				var lines = data.split('\n').length - 1;
				console.log(lines);
		}
});

// var lines = buffer.split('\n').length - 1;
// console.log(lines);
