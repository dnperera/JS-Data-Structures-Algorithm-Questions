// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

//I - Input is a number
//O - Reversed version of the number.
function reverseInt(n) {
	//convert the numbet to  a string
	let numString = n.toString();
	return (
		parseInt(
			numString
				.split('')
				.reverse()
				.join('')
		) * Math.sign(n)
	);
}

console.log(reverseInt(-900));
// function reverseInt(n) {
// 	//if the value of the number less than 10
// 	if( Math.abs(n)<= 9){
// 		return n;
// 	}

// 	var numberArray = n.toString().split('');
// 	var sign ='';

// 	if(numberArray[0] === '-'){
// 		sign = numberArray.shift();
// 	}

// 	return parseInt(sign.concat(numberArray.reverse().join('')));
// }

module.exports = reverseInt;
