/*
Given a string of words, your goal is to find the highest scoring word 
in the string. a is worth 1 point, b is worth 2 points, c is worth 3 points, and so on, all the way up until z, which is worth 26 points. You can assume that strings will consist only of lowercase letters and spaces.

In the event that two words have the same score, return the word that 
appears first in the string.

highestScoringWord("a b c d e f"); // "f"
highestScoringWord("hello world"); // "world"
highestScoringWord("go ahead make my day"); // "my"
highestScoringWord("there is no place like home"); // "there"
highestScoringWord("aaaaaa bbb cc f"); // "aaaaaa"
highestScoringWord("bbb cc f aaaaaa"); // "bbb"
highestScoringWord("this sentence has two highest scoring words"); // "sentence"

Credit - https://www.codewars.com/kata/highest-scoring-word
 */

highestScoringWord = words => {
	//create object with alphabet as key
	var alphabet = {};
	for (let i = 0; 26 > i; i++) {
		alphabet[String.fromCharCode(97 + i)] = i + 1;
	}

	//split the word into an array
	var wordArray = words.split(' ');

	var heighValue = 0;
	var heighValueWord = '';
	wordArray.forEach(word => {
		var currentWordValue = getTotalCharValue(word, alphabet);
		if (heighValue < currentWordValue) {
			heighValue = currentWordValue;
			heighValueWord = word;
		}
	});
	return heighValueWord;
};

getTotalCharValue = (word, alphabet) => {
	var totalValue = 0;
	for (let i = 0; word.length > i; i++) {
		totalValue += alphabet[word[i]];
	}
	return totalValue;
};
