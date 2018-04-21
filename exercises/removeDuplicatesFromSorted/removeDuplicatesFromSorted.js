/*
Given a sorted array of numbers, return the length of the subarray formed 
by allowing each number to appear at most two times.

removeDuplicatesFromSorted([1, 1, 1, 2, 2, 3]); // 5
removeDuplicatesFromSorted([2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5]); // 8
removeDuplicatesFromSorted([4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]); // 2
removeDuplicatesFromSorted([1, 2, 3, 4, 5, 6]); // 6
removeDuplicatesFromSorted([]); // 0
 */

removeDuplicatesFromSorted = numbers => {
	var occuranceObj = {};
	var results = [];

	for (let i = 0; numbers.length > i; i++) {
		if (occuranceObj[numbers[i]]) {
			occuranceObj[numbers[i]]++;
			if (occuranceObj[numbers[i]] <= 2) {
				results.push(numbers[i]);
			}
		} else {
			occuranceObj[numbers[i]] = 1;
			results.push(numbers[i]);
		}
	}
	return results.length;
};
console.log(removeDuplicatesFromSorted([2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5]));
// 8
