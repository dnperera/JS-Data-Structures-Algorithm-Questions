// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
	//define an array with Vowels
	var vowelsArray = ['a', 'e', 'i', 'o', 'u'];

	//make the string to lower case
	str = str.toLowerCase();
	//define the counter
	var counter = 0;
	//loop throw the string
	for (let i = 0; i < str.length; i++) {
		if (vowelsArray.indexOf(str[i]) >= 0) {
			counter++;
		}
	}
	return counter;
}
console.log(vowels('Why do you ask?'));
module.exports = vowels;
