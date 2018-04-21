/*

Given an array of numbers (not necessarily unique values), your goal is to measure how close the array is to being sorted by counting the number of inversions it has. An inversion occurs when two numbers in the array are out of order.

Implement a function called numInversions which counts the number of inversions in the array.

numInversions([]); // 0
numInversions([5]); // 0
numInversions([1,2]); // 0
numInversions([2,1]); // 1
numInversions([1,2,3]); // 0
numInversions([1,3,2]); // 1
numInversions([3,1,2]); // 2
numInversions([3,2,1]); // 3
numInversions([5,3,4,1,2]); // 8
numInversions([1,1,1,1]); // 0
numInversions([2,2,1,1]); // 4
numInversions([3,3,3,2,2,1]); // 11
numInversions([8, 6, 6, 1, 1, 1, 3, 4, 2]); // 22

 */

numInversions = numbers => {
	var noOfInversions = 0;
	var isSorted = false;

	while (!isSorted) {
		isSorted = true;
		let temp = '';
		for (let i = 0; numbers.length - 1 > i; i++) {
			if (numbers[i] > numbers[i + 1]) {
				temp = numbers[i + 1];
				numbers[i + 1] = numbers[i];
				numbers[i] = temp;
				isSorted = false;
				noOfInversions++;
			}
		}
	}
	return noOfInversions;
};

console.log(numInversions([3, 3, 3, 2, 2, 1])); // 22
