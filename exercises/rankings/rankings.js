/*
Given an array of unique numbers, 
return a new array of rankings of the original array. 
For example, if your input array is [10, 5, 20], 
the output should be [2, 3, 1], since 10 is the second largest number, 
5 is the third largest, and 20 is the largest.

rankings([10, 5, 20]); // [2, 3, 1]
rankings([6, 8, 1, 12, 4, 3, 9]); // [4, 3, 7, 1, 5, 6, 2]
rankings([100]); // [1]
rankings([4, 2, 3, 1]); // [1, 3, 2, 4]
 */

rankings = numbers => {
	//get deep copy of the sorted array
	var sortedArray = [...numbers].sort((a, b) => b - a);
	var rankingArray = [];
	numbers.forEach(number => {
		rankingArray.push(sortedArray.indexOf(number) + 1);
	});
	return rankingArray;
};
console.log(rankings([6, 8, 1, 12, 4, 3, 9])); // [4, 3, 7, 1, 5, 6, 2]

