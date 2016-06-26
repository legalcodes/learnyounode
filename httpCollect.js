/* Write a program that performs an HTTP GET request to a URL provided to you
as the first command-line argument.

 Collect all data from the server (not just the first "data" event) and then write two lines to the console (stdout).

		The first line you write should just be an integer representing the number
of characters received from the server.

 The second line should contain the
complete String of characters sent by the server.
*/

var http = require('http');
var url = process.argv[2];

http.get(url, function(res){
		var count = 0;
		var str = '';
		res.on('data', function(data){
				var charCount = data.length;
				count += charCount;
				str += data;
		});

		res.on('end', function(){
				process.stdout.write(count + '\n' + str + '\n');
		});

		res.on('error', function(){
				process.stdout.write('');
		});
});
