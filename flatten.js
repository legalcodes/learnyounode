var nums = [
		[1,2],
		[3,4],
		[5,6],
		7
];

// make a function to flatten a nested arr into a shallow array


var flatten = function(arr, results) {
		var results = results || [];
		for (var i = 0; i < arr.length; i++) {
				if ( Array.isArray(arr[i]) ) {
						flatten(arr[i], results);
				}
				else {
						results.push(arr[i]);
				}
		}
		return results;
};

console.log('Results: ', flatten(nums));





/* 

var flatten = function(arr){
		var results = [];

		var recurse = function(elem){ // 1
				// check to see if element is array
				if (Array.isArray(elem)){
						// loop over array
						for (var i = 0; i < elem.length; i++){
								// recurse on each element
								var subElem = elem[i];
								recurse(subElem);
						}
				}
				else {
						// else add num to results  results = [1];
						results.push(elem);
				}
		};
		// invoke subroutine
		recurse(arr);

		// return results
		return results;
};
*/

