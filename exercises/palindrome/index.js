// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  // return (
  //   str ===
  //   str
  //     .split("")
  //     .reverse()
  //     .join("")
  // );
  let length = str.length;
  return str.split("").every((char, index) => {
    return char === str[length - index - 1];
  });
}

// Second solution using HOF
// function palindrome(str) {
// 	return str.split('')
// 	.every((char ,index)=>{
// 		return char === str[str.length - index -1];
// 	})
// }

console.log(palindrome("abba"));
module.exports = palindrome;
