// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
// 	return str.split('')
// 	.reverse()
// 	.join('');
// }
//using HOF 
function reverse(str) {
	return str.split('')
	.reduce((reversedStr ,str) =>str.concat(reversedStr),'');
}
//ES6 loop solution
// function reverse(str) {
// 	var reversedStr ="";
// 	for( let character of str){
// 		reversedStr = character + reversedStr;
// 	}
// 	return reversedStr;
// }


// Solution with traditional for loop

// function reverse(str) {
// 	var reversedStr ="";
// 	for( let i=0; str.length > i; i++) {
// 		reversedStr = str[i] + reversedStr;
// 	}
// 	return reversedStr;
// }
console.log(reverse('apple'));
module.exports = reverse;
