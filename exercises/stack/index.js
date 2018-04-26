// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Stack {
	constructor(capacity) {
		this.capacity = capacity || Infinity;
		this.data = {};
		this.count = 0;
	}

	push(record) {
		if (this.count < this.capacity) {
			this.data[this.count++] = record;
			return this.count;
		}
		return 'Max capacity already reached. Remove element before adding new element';
	}

	pop() {
		if (this.count > 0) {
			let temp = this.data[--this.count];
			delete this.data[this.count];
			return temp;
		}
		return undefined;
	}

	peek() {
		return this.data[this.count - 1];
	}

	//Create a contains method to check if a value is in the stack:
	//Time Complexity - Linear
	contains(record) {
		const holdingStack = new Stack();
		let temp = '';
		let isRecordFound = false;

		//pop each value of the current stack and push to holding stack untill given value find
		while (this.peek()) {
			temp = this.pop();
			holdingStack.push(temp);
			if (temp === record) {
				isRecordFound = true;
				break;
			}
		}

		//push values back to the original stack
		while (holdingStack.peek()) {
			this.push(holdingStack.pop());
		}

		return isRecordFound;
	}

	count() {
		return this.count;
	}
}

//const s = new Stack(5);
//s.push(4);
// s.push('Hasini');
// s.push('Denith');
// s.push('Dasith');
// console.log(s.contains('Denith'));
// console.log(s);
module.exports = Stack;
