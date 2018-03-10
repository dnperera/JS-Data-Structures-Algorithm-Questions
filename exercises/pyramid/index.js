// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
	//Assume no of rows as n
	//calculate the no of columns
	var noOfColumns = n * 2 - 1;
	var middle = Math.floor(noOfColumns / 2);

	//loop through the rows
	for (let row = 0; row < n; row++) {
		//loop through the columns
		var layer = '';
		for (let column = 0; column < noOfColumns; column++) {
			if (middle - row <= column && middle + row >= column) {
				layer += '#';
			} else {
				layer += ' ';
			}
		}
		console.log(layer);
	}
}

function pyramidRecursice(n, rows = 0, layer = '') {
	//base case
	if (n === rows) {
		return;
	}
	//check to see at the end of the row
	if (layer.length === n * 2 - 1) {
		console.log(layer);
		//then move to the next row recursively
		return pyramidRecursice(n, rows + 1);
	}
	//calculate mid point
	const middle = Math.floor((n * 2 - 1) / 2);

	if (middle - rows <= layer.length && middle + rows >= layer.length) {
		layer += '#';
	} else {
		layer += ' ';
	}
	pyramidRecursice(n, rows, layer);
}

// function pyramidRecursive(n) {
// 	var noOfColumns = n * 2 - 1;
// 	var middle = Math.floor(noOfColumns / 2);

// 	function makePyamid(n, rows = 0, layer = '') {
// 		//base case
// 		if (n === rows) {
// 			return;
// 		}
// 		if (layer.length === noOfColumns) {
// 			console.log(layer);
// 			return makePyamid(n, rows + 1);
// 		}

// 		if (middle - rows <= layer.length && middle + rows >= layer.length) {
// 			layer += '#';
// 		} else {
// 			layer += ' ';
// 		}
// 		makePyamid(n, rows, layer);
// 	}
// 	makePyamid(n);
// }

pyramidRecursice(11);

module.exports = pyramid;
