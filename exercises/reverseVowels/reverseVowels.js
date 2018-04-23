/*
Write a function which will reverse the vowels in a string. 
Any characters which are not vowels should remain in their 
original position. You should not consider "y" to be a vowel.

reverseVowels("Hello!"); // "Holle!" 
reverseVowels("Tomatoes"); // "Temotaos" 
reverseVowels("Reverse Vowels In A String"); // "RivArsI Vewols en e Streng"
reverseVowels("aeiou"); // "uoiea"
reverseVowels("why try, shy fly?"); // "why try, shy fly?"
 */

reverseVowels = word => {
	var vowelObject = {
		a: 1,
		e: 1,
		i: 1,
		o: 1,
		u: 1,
	};
	var wordArray = word.split('');
	var reversedArray = new Array(word.length);
	var tailPointer = word.length - 1;

	for (let i = 0; wordArray.length > i; i++) {
		if (vowelObject[wordArray[i]]) {
			for (let j = tailPointer; j > 0; j--) {
				if (vowelObject[wordArray[j]]) {
					let temp = wordArray[i];
					reversedArray[i] = wordArray[j];
					reversedArray[j] = temp;
					tailPointer = j;
					break;
				}
			}
		} else {
			reversedArray[i] = wordArray[i];
		}
	}
	return reversedArray.join('');
};

console.log(reverseVowels('Reverse Vowels In A String'));
// "RivArsI Vewols en e Streng"
