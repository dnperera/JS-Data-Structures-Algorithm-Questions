/*
Write a function called beggars that accepts an array and a number. The function should return an array with the sum of what each beggar brings home, assuming they all take regular turns, from the first to the last.

For example: [1,2,3,4,5] for 2 beggars will return a result of [9,6], as the first one takes [1,3,5], the second collects [2,4].

The same array with 3 beggars would have in turn have produced a better out come for the second beggar: [5,7,3], as they will respectively take [1,4], [2,5] and [3].

Not all beggars have to take the same amount of "offers", meaning that the length of the array is not necessarily a multiple of n; length can be even shorter, in which case the last beggars will of course take nothing (0).
 
 beggars([1,2,3,4,5],1) // [15]
 beggars([1,2,3,4,5],2) // [9,6]
 beggars([1,2,3,4,5],3) // [5,7,3]
 beggars([1,2,3,4,5],6) // [1,2,3,4,5,0]
 beggars([1,2,3,4,5],0) // []

 */
const beggars = (offers, noOfBeggars) => {
  const totals = [];
  //run the turns for beggars
  for (let i = 0; noOfBeggars > i; i++) {
    let sum = 0;
    //iterate the collection array for each begger with respective turn
    for (let j = i; offers.length > j; ) {
      sum += offers[j];
      j += noOfBeggars;
    }
    totals.push(sum);
  }
  return totals;
};
// beggars = (offers, noOfBeggars) => {
// 	var totals = [];

// 	for (let i = 0; noOfBeggars > i; i++) {
// 		let totalCollected = 0;
// 		for (let j = i; offers.length > j; ) {
// 			if (offers[j]) {
// 				totalCollected += offers[j];
// 			}
// 			j += noOfBeggars;
// 		}
// 		totals.push(totalCollected);
// 	}
// 	return totals;
// };

console.log(beggars([1, 2, 3, 4, 5], 1)); // [15]
console.log(beggars([1, 2, 3, 4, 5], 2)); // [9,6]
console.log(beggars([1, 2, 3, 4, 5], 3)); // [5,7,3]
console.log(beggars([1, 2, 3, 4, 5], 6)); // [1,2,3,4,5,0]
console.log(beggars([1, 2, 3, 4, 5], 0)); // []
