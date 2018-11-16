/**
 * There are list of students where each student has at least five scores. we want to output the average of a given student heighest five scores.
 */
const scores = [
  { id: 1, score: 76 },
  { id: 2, score: 86 },
  { id: 3, score: 95 },
  { id: 1, score: 56 },
  { id: 2, score: 65 },
  { id: 1, score: 86 },
  { id: 3, score: 69 },
  { id: 2, score: 99 },
  { id: 1, score: 98 },
  { id: 2, score: 76 },
  { id: 3, score: 86 },
  { id: 1, score: 79 },
  { id: 3, score: 86 },
  { id: 2, score: 58 },
  { id: 1, score: 78 },
  { id: 3, score: 82 },
  { id: 2, score: 82 },
  { id: 3, score: 92 }
];

//First iterate the array and group each student scores into an array
function getHeighestAverage(results) {
  const heighestAvg = {};
  const socresObj = results.reduce((groups, element) => {
    if (element.id in groups) {
      groups[element.id].push(element.score);
    } else {
      groups[element.id] = [element.score];
    }
    return groups;
  }, {});
  console.log(socresObj);
  //calculate high five avg for each student
  for (let id in socresObj) {
    heighestAvg[id] = calculateAverageFive(sortArray(socresObj[id]));
  }
  return heighestAvg;
}

function calculateAverageFive(arr) {
  const highFive = arr.slice(0, 5);
  let socoreAvg = highFive.reduce((avg, value) => {
    avg += value;
    return avg;
  }, 0);
  return Math.floor(socoreAvg / 5);
}
function sortArray(arr) {
  return arr.sort((a, b) => b - a);
}

console.log(getHeighestAverage(scores));
