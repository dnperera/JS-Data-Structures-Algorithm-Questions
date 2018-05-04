var factorialN = n => {
	if (n === 1) {
		return n;
	}
	return n * factorialN(n - 1);
};

//memoization with closure
const memoize = func => {
	const cache = {};
	return (...args) => {
		if (args in cache) {
			console.log('Return chached results ...' + args);

			return cache[args];
		} else {
			console.log('Return newly calculated results ...' + args);
			let results = func.apply(this, args);
			cache[args] = results;
			return results;
		}
	};
};

factorialN = memoize(factorialN);

// var results;
console.time('factorialN');

results = factorialN(9);

console.timeEnd('factorialN');

console.time('factorialN');
factorialN(12);
console.timeEnd('factorialN');

