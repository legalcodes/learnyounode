// access console arguments
var consoleArgs = process.argv;
// output their sum

var makeSum = function(arr){
		var r = 0;
		for (var i = 0; i < consoleArgs.length; i++){
				var num = arr[i];
				r += num;
		};
		return r;
};

var sum = makeSum(consoleArgs);

console.log(sum);


