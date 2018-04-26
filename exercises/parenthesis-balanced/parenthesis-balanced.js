/*
3. Given a string, determine if the parenthesis in the string are balanced.
Ex: balancedParens( 'sqrt(5*(3+8)/(4-2))' ) => true
Ex: balancedParens( 'Math.min(5,(6-3))(' ) => false
 */

// I - String
// O - true or false

const balancedParens = str => {
	// create an object with keys as open and closing parenthesis
	const parenthesis = {
		'(': 0,
		')': 0,
	};
	// loop through the srting to find all matching parenthesis
	let length = str.length;
	for (let i = 0; i < length; i++) {
		if (parenthesis.hasOwnProperty(str[i])) {
			parenthesis[str[i]]++;
		}
	}
	//check both parenthesis object properties has got same values
	return parenthesis['('] === parenthesis[')'];
};

console.log(balancedParens('Mat)(h.min(5,(6-3))('));

