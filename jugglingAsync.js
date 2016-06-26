/*
 You must collect the complete content provided to you by each of the URLs
 and print it to the console (stdout). You don't need to print out the
 length, just the data as a String; one line per URL. The catch is that you
 must print them out in the same order as the URLs are provided to you as
 command-line arguments.
 */

var http = require('http');
var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];


function getURL (url, cb){
		http.get(url, function(res){
				var result = '';
				// on data, store data
				res.on('data', function(chunk){
						result += chunk;
				});

				// on end
				res.on('end', function(){
						// give callback access to result
						cb(null, result);
				});

				res.on('error', function(){
						process.stdout.write('Get request error.');
				});
		});
};

// find first url
getURL(url1, function(err, result){
		if (err)
				process.stdout.write('Error sending first request');
		console.log(result);
		getURL(url2, function(err, result){
				console.log(result);
				getURL(url3, function(err, result){
						console.log(result);
				});
		})
} );
