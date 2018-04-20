/*
A clerk works at a movie theater where each ticket costs $25. 
There is a line of people waiting to buy tickets, and each one 
has a single $100, $50, or $25 bill. The clerk wants to sell a 
ticket to every person in the line. For each input, can she sell a 
ticket to everyone and give change if she starts with no money and has 
to go through the line in order? If so, your function should return "YES." 
If not, it should return "NO."

Write a function called canSellTickets based on the above scenario. 
Note that for any person in line, the clerk does not know the values of 
all future bills. The clerk simply tries to make change using whatever 
she has at the time and favors getting rid of larger bills first.

canSellTickets([]); // "YES"
canSellTickets([25]); // "YES"
canSellTickets([50]); // "NO"
canSellTickets([100]); // "NO"
canSellTickets([25, 50]); // "YES"
canSellTickets([25, 100]); // "NO"
canSellTickets([25, 25, 25, 25, 50, 100]); // "YES"
canSellTickets([25, 25, 50, 100]); // "YES"
canSellTickets([25, 25, 25, 100]); // "YES"
canSellTickets([25, 50, 50, 25]); // "NO"
canSellTickets([25, 50, 25, 100, 25, 25, 25, 50, 50, 100]); // "YES"
canSellTickets([25, 50, 25, 100, 25, 25, 25, 50, 100, 100]); // "NO"
 */
canSellTickets = line => {
	if (line.length === 0) {
		return 'YES';
	}
	if (line[0] !== 25) {
		return 'NO';
	}

	var billsObject = {
		'25': 0,
		'50': 0,
		'100': 0,
	};

	var status = 'YES';

	line.forEach(bill => {
		billsObject[bill] ? billsObject[bill]++ : (billsObject[bill] = 1);
		let changedToGiven = bill - 25;

		if (changedToGiven === 25) {
			if (billsObject[changedToGiven] === 0) {
				status = 'NO';
				return;
			} else {
				billsObject[changedToGiven]--;
			}
		}
		if (changedToGiven === 75) {
			if (billsObject[50] > 0) {
				billsObject[50]--;
				if (billsObject[25] > 0) {
					billsObject[25]--;
				} else {
					status = 'NO';
				}
			} else {
				if (billsObject[25] >= 3) {
					billsObject[25] -= 3;
				} else {
					status = 'NO';
				}
			}
		}
	});
	return status;
};

console.log(canSellTickets([25, 50, 25, 100, 25, 25, 25, 50, 100, 100])); // "NO");
