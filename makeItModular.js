var fs = require('fs');

module.exports = function(path, ext, cb){
		fs.readdir(path, function(err, data){
				if (err)
						return cb(err);
				var newFiles = data.filter(function(name){
						if (name.split('.')[1] === ext){
								return true;
						}
				});
				cb(null, newFiles);
		});
};


/*

  The callback function must be called using the idiomatic node(err, data)
  convention. This convention stipulates that unless there's an error, the
  first argument passed to the callback will be null, and the second will be
  your data. In this exercise, the data will be your filtered list of files,
  as an Array. If you receive an error, e.g. from your call to
  fs.readdir(), the callback must be called with the error, and only the
  error, as the first argument.

  You must not print directly to the console from your module file, only
  from your original program.

  In the case of an error bubbling up to your original program file, simply
  check for it and print an informative message to the console.

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
