// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
	//Create letters only array for both strings using regular expressions
	var letters = /[A-Z0-9]/gi; // Reg Expression
	var stringAArray = stringA.match(letters);
	var stringBArray = stringB.match(letters);
	//Sort both array alphabetically
	stringAArray.sort(function(a, b) {
		return a > b;
	});
	stringBArray.sort(function(a, b) {
		return a > b;
	});

	//now join both array back to the string. check both equal
	return stringAArray.join('').toLowerCase() === stringBArray.join('').toLowerCase();
}
console.log(anagrams('Hi there', 'Bye there'));
module.exports = anagrams;
