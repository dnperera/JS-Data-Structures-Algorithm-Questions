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
		a: true,
		e: true,
		i: true,
		o: true,
		u: true,
	};
	var wordArray = word.split('');
	var tailPointer = word.length - 1;
	var headPointer = 0;

	while (headPointer < word.length) {
		if (vowelObject[wordArray[headPointer].toLowerCase()] && headPointer <= tailPointer) {
			for (let i = tailPointer; i > 0; i--) {
				if (vowelObject[wordArray[i].toLowerCase()]) {
					let temp = wordArray[headPointer];
					wordArray[headPointer] = wordArray[i];
					wordArray[i] = temp;
					tailPointer = i - 1;
					break;
				}
			}
		}
		headPointer++;
	}
	return wordArray.join('');
};

console.log(reverseVowels('why try, shy fly?')); // "why try, shy fly?"

