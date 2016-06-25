var fs = require('fs');
var path = process.argv[2];
var ext = process.argv[3];

fs.readdir(path, function(err, list){
		var newList = list.filter(function(name){
				var tuple = name.split('.');
				if (tuple[1] === ext){
						console.log(name);
						return true;
				}
		});

});
