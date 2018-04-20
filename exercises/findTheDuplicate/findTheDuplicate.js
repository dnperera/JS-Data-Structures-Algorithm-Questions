/*
Write a function called findTheDuplicate which accepts an array of numbers containing a single duplicate. The function returns the number which is a duplicate or undefined if there are no duplicates.

Examples:

findTheDuplicate([1,2,1,4,3,12]) // 1
findTheDuplicate([6,1,9,5,3,4,9]) // 9
findTheDuplicate([2,1,3,4]) // undefined
 */

findTheDuplicate = numbers => {
	var numbersObject = {};
	var duplicate = undefined;
	numbers.forEach(number => {
		if (numbersObject[number]) {
			duplicate = number;
			return;
		} else {
			numbersObject[number] = 1;
		}
	});
	return duplicate;
};
console.log(findTheDuplicate([6, 1, 9, 5, 3, 4, 9]));
// 9
