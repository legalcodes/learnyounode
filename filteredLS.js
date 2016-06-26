var fs = require('fs');
var path = process.argv[2];
var ext = process.argv[3];
var filterExt = require('./makeItModular.js');

filterExt(path, ext, function(error, list){
		if (error)
				console.log('There was an error filtering by file extension');
		list.forEach(function(name){
				console.log(name);
		});
});



/*
fs.readdir(path, function(err, list){
		var newList = list.filter(function(name){
				var tuple = name.split('.');
				if (tuple[1] === ext){
						console.log(name);
						return true;
				}
		});
});
*/
