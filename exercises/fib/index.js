// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
	const results = [0, 1];

	for (let i = 2; i <= n; i++) {
		let a = results[i - 1];
		let b = results[i - 2];
		results.push(a + b);
	}
	return results[n];
}
//-- Time Complexity - Liner O(n)
module.exports = fib;
