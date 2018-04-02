/*
Harmless Ransom Note 
find  given note can be made out of the given magazine text.
 */

function harmlessRansomNote(noteText, magazineText) {
	//First split both note and magazine note into word arrays

	var noteArray = noteText.split(' ');
	var magazineArray = magazineText.split(' ');
	var magazineObject = {};

	//then create magazine Hash object for words in that array
	magazineArray.forEach(word => {
		if (!magazineObject[word]) {
			magazineObject[word] = 0;
		}
		magazineObject[word]++;
	});
	//then loop throuh the note array and check each word exist on the magazine hash

	var noteIsPossible = true;
	noteArray.forEach(word => {
		if (magazineObject[word]) {
			magazineObject[word]--;
			if (magazineObject[word] < 0) {
				noteIsPossible = false;
			}
		} else {
			noteIsPossible = false;
		}
	});
	return noteIsPossible;
}
console.log(
	harmlessRansomNote(
		'this is a secret note for you from a secret admirer',
		'puerto rico is a place of great wonder and excitement it has many secret waterfall locatoins that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited'
	)
);
