// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'
//
//
//Recursive Solution
function steps(n, row = 0, stair = '') {
	if (n === row) {
		return;
	}

	if (stair.length === n) {
		console.log(stair);
		steps(n, row + 1);
		return;
	}
	// if (stair.length <= row) {
	// 	stair += '#';
	// } else {
	// 	stair += ' ';
	// }
	const newStep = stair.length <= row ? '#' : ' ';
	steps(n, row, stair + newStep);
}

//Iterative solution
function stepsV2(n) {
	//Outter loop 0 - n ( iterate through rows)
	for (let i = 0; i < n; i++) {
		//declare empty variable
		let stair = '';
		//Inner loop 0-n (iterate throw columns)
		for (let j = 0; j < n; j++) {
			if (j <= i) {
				stair += '#';
			} else {
				stair += ' ';
			}
		}
		console.log(stair);
	}
}

// function steps(n) {
// 	//define the outer loop which add '#' for each strep
// 	var steps = '',
// 		spaces = '';

// 	for (let i = 0; i < n; i++) {
// 		steps += '#';
// 		spaces = '';
// 		for (let j = i + 1; j < n; j++) {
// 			spaces += ' ';
// 		}
// 		console.log(steps + spaces);
// 	}
// }
steps(10);

module.exports = steps;
