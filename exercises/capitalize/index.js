// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  //create an array of words
  const words = str.split(" ");
  //map the array while making first letter capital
  return words
    .map(word => word[0].toUpperCase().concat(word.slice(1)))
    .join(" ");

  // return str
  // 	.split(' ')
  // 	.map(word => {
  // 		//make first letter captial & return
  // 		return word[0].toUpperCase().concat(word.slice(1));
  // 	})
  // 	.join(' ');
}
//solution -2
function capitalizeV2(str) {
  var result = str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      result = result.concat(str[i].toUpperCase());
    } else {
      result = result.concat(str[i]);
    }
  }
  return result;
}
console.log(capitalize("look, it is working!"));

module.exports = capitalize;
