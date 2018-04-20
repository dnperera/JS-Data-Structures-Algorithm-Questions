/*
Write a function called totalCaps, which accepts an array of strings and returns the total number of 
capitals in each of the strings. Do not convert the array into a string.

totalCaps(["AwesomE", "ThIngs", "hAppEning", "HerE"]) // 8
totalCaps(["Elie", "Matt", "Tim"]) // 3
totalCaps(["hello", "world"]) // 0
 */
totalCaps = words => {
	var pattern = /[A-Z]/g;
	var totalCaps = 0;
	words.forEach(word => {
		if (word.match(pattern)) {
			totalCaps += word.match(pattern).length;
		}
	});
	return totalCaps;
};

console.log(totalCaps(['AwesomE', 'ThIngs', 'hAppEning', 'HerE']));

