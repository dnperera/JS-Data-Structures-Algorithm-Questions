/*
Create a function isAlt that accepts a string as an argument 
and validates whether the vowels (a, e, i, o, u) 
and consonants are in alternate order.

Examples:

isAlt("amazon") // true
isAlt("apple") // false
 */

isAlt = word => {
	var vowels = {
		a: 1,
		e: 1,
		i: 1,
		o: 1,
		u: 1,
	};
	var isInOrder = true;

	for (let i = 0; word.length - 1 > i; i++) {
		if (vowels[word[i]] && vowels[word[i + 1]]) {
			isInOrder = false;
			return;
		}

		if (!vowels[word[i]] && !vowels[word[i + 1]]) {
			isInOrder = false;
			return;
		}
	}
	return isInOrder;
};

console.log(isAlt('pinapple'));
