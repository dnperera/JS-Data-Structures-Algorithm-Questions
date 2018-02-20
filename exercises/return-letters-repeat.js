/*
# Write a method that takes in a string and returns the number of
# letters that appear more than once in the string. You may assume
# the string contains only lowercase letters. Count the number of
# letters that repeat, not the number of times they repeat in the
# string.
#
# Difficulty: hard.
 */

//I - String with lowercase letters
//O - count of the no of letters that repeat

function numberOfRepeats( string ) {
 //create an empty object 
 //Then assign all the charactors as key.
 var charObject ={};
 var noOfRepeats =0;
 for( var i=0; string.length > i; i++ ) {
 	if(charObject[string[i]]) {
 		charObject[string[i]] ++;
 	} else {
 		charObject[string[i]] = 1;
 	}
 }
 //check all the values greater than 1 and increase the counter;
 Object.values(charObject).forEach( function( value ) {
 	if(value >1){
 		noOfRepeats ++;
 	}
 });
 return noOfRepeats;
}


console.log(numberOfRepeats("abcde"));
