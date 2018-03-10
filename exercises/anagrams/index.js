// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False
//
function anagrams(stringA, stringB) {
	//clean the string
	var lettersA = stringA.replace(/[^\w]/g, '').toLowerCase();
	var lettersB = stringB.replace(/[^\w]/g, '').toLowerCase();
	//check filtered string length
	if (lettersA.length !== lettersB.length) {
		return false;
	}
	//map character objects form the strings
	var charMapA = characterMap(lettersA);
	var charMapB = characterMap(lettersB);

	//check both objecs are deep equl
	for (let key in charMapA) {
		if (charMapA[key] !== charMapB[key]) {
			return false;
			break;
		}
	}
	return true;
}

//Map the clearn string to an object
function characterMap(string) {
	var charMap = {};
	for (let char of string) {
		if (charMap[char]) {
			charMap[char]++;
		} else {
			charMap[char] = 1;
		}
	}
	return charMap;
}

//Solution - 2 using Req Expressions & arrays
function anagramsV2(stringA, stringB) {
	return cleanString(stringA) === cleanString(stringB);
}

function cleanString(string) {
	var letters = /[A-Z0-9]/gi; // Reg Expression

	return string
		.match(letters)

		.sort(function(a, b) {
			return a > b;
		})
		.join('')
		.toLowerCase();
}
console.log(anagramsV2('RAIL! SAFETY!', 'fairy tales'));

module.exports = anagrams;
