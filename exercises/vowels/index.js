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
		if (vowelsArray.includes(str[i])) {
			counter++;
		}
	}
	return counter;
}

//Solution -2
function vowelsV2(str) {
	//using Reg expression find all vowels in the string
	const vowelsArray = str.match(/[aeiou]/gi);
	return vowelsArray ? vowelsArray.length : 0;
}

console.log(vowelsV2('Why?'));
module.exports = vowels;
