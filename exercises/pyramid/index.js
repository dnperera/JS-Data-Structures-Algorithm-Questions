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

pyramid(11);

module.exports = pyramid;
