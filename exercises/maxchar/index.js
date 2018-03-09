// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// I - String
// O - return the character repeat most in the string
// Assumtion - Input is not an empty string
//
function maxChar(str) {
	let charObject = {};

	for (let char of str) {
		charObject[char] = charObject[char] + 1 || 1;
	}
	// for (let i = 0; str.length > i; i++) {
	// 	if (charObject[str[i]]) {
	// 		charObject[str[i]]++;
	// 	} else {
	// 		charObject[str[i]] = 1;
	// 	}
	// }
	var maxVal = 0;
	var repeatChar = '';
	for (let key in charObject) {
		if (maxVal < charObject[key]) {
			maxVal = charObject[key];
			repeatChar = key;
		}
	}
	return repeatChar;
}

console.log(maxChar('abcccccccdx'));

module.exports = maxChar;
