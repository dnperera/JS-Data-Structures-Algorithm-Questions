// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
function chunk(array, size) {
	//if the size is greater than array  length . just return the array
	if (array.length < size) {
		return [array];
	}

	var chunkedArray = [];
	var index = 0;
	while (array.length > index) {
		let sliced = array.slice(index, index + size);
		chunkedArray.push(sliced);
		index += size;
	}
	return chunkedArray;
}

//

//Solution 2

function chunkV2(array, size) {
	var chunkedArray = [];
	for (let element of array) {
		let lastElement = chunkedArray[chunkedArray.length - 1];
		if (!lastElement || lastElement.length === size) {
			chunkedArray.push([element]);
		} else {
			lastElement.push(element);
		}
	}
	return chunkedArray;
}

//-- Solution 3
function chunkV3(array, size) {
	//if the size is greater than array  length . just return the array
	if (array.length < size) {
		return [array];
	}

	var chunkedArray = [];

	while (array.length > 0) {
		let spliced = array.splice(0, size);
		chunkedArray.push(spliced);
	}
	return chunkedArray;
}
console.log(chunk([1, 2, 3, 4, 5], 2));
module.exports = chunk;
