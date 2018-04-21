/*
Write a function called threeOddNumbers, 
which accepts an array of numbers and returns true 
if any three consecutive numbers sum to an odd number.

threeOddNumbers([1,2,3,4,5]) // true
threeOddNumbers([0,-2,4,1,9,12,4,1,0]) // true
threeOddNumbers([5,2,1]) // false
threeOddNumbers([1,2,3,3,2]) // false
 */

threeOddNumbers = numbers => {
	for (let i = 0; numbers.length - 2 > i; i++) {
		if (isOdd(numbers[i] + numbers[i + 1] + numbers[i + 2])) {
			return true;
		}
	}
	return false;
};

isOdd = number => number % 2 !== 0;

console.log(threeOddNumbers([5, 2, 1]));
