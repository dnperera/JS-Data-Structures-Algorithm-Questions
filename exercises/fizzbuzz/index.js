// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

//I - Number
//O - console log the number from 1 - n .
//	For multiples of three print as "fizz"
//	For multiples of five print as "buzz"
//	For multiples of three & five print as "fizzbuzz"
function fizzBuzz(n) {
	for (let i = 1; n >= i; i++) {
		//if the number multiple of 3 and 5
		if (i % 3 === 0 && i % 5 === 0) {
			console.log('fizzbuzz');
			continue;
		}
		//if the number multiple of 3
		if (i % 3 === 0) {
			console.log('fizz');
			continue;
		}
		//if the number multiple of 5
		if (i % 5 === 0) {
			console.log('buzz');
			continue;
		}
		//for all other numbers
		console.log(i);
	}
}

//ES 6 version

function fizzBuzzES6(n) {
	for (let i = 1; i <= n; i++) {
		i % 15 === 0
			? console.log('fizzbuzz')
			: i % 5 === 0
				? console.log('buzz')
				: i % 3 === 0 ? console.log('fizz') : console.log(i);
	}
}

fizzBuzzES6(20);

module.exports = fizzBuzz;
