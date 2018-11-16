// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

//Implement Memoization
function memoize(fn) {
  const cacheResults = {};
  return function(...args) {
    const argString = args.toString();
    if (cacheResults[argString]) {
      return cacheResults[argString];
    }
    let results = fn.apply(this, args);
    cacheResults[argString] = results;
    return results;
  };
}
//fibonacci recursive
function fibRecursive(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

// function memoize(fn) {
// 	const cache = {};

// 	return function(...args) {
// 		if (cache[args]) {
// 			return cache[args];
// 		}

// 		const result = fn.apply(this, args);
// 		cache[args] = result;
// 		return result;
// 	};
// }

// function fib(n) {
//   if (n < 2) {
//     return n;
//   }
//   return fib(n - 1) + fib(n - 2);
// }

const fib = memoize(fibRecursive);
// console.time("Recursive");
// console.log(fib(50));
// console.timeEnd("Recursive");
module.exports = fib;
