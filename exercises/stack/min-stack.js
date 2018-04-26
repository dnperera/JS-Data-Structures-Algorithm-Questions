/*
  Implement a MinStack that has a min method 
  which will return the minimum value in the stack in constant time.

 */
const Stack = require('./index'); //require stack class

class minStack {
	constructor(capacity) {
		this.data = {};
		this.capacity = capacity;
		this.count = 0;
		this.minValueStack = new Stack(capacity);
	}

	push(record) {
		if (this.count < this.capacity) {
			if (this.minValueStack.peek() < record) {
				this.minValueStack.push(this.minValueStack.peek());
			} else {
				this.minValueStack.push(record);
			}
			this.data[this.count++] = record;
			return this.count;
		} else {
			return 'Stack reached the max capacity.Please remove item before adding!!!';
		}
	}
	pop() {
		if (this.count > 0) {
			this.minValueStack.pop();
			let temp = this.data[--this.count];
			delete this.data[this.count];
			return temp;
		}
		return undefined;
	}

	peek() {
		return this.data[this.count - 1];
	}

	min() {
		// return the min value of the stack
		return this.minValueStack.peek();
	}

	count() {
		return this.count;
	}
}

// var minSt = new minStack(6);
// minSt.push(4);
// minSt.push(10);
// minSt.push(2);
// minSt.push(120);
// minSt.push(5);
// console.log(minSt);
// console.log(minSt.pop());
// console.log(minSt.pop());
// console.log(minSt.pop());
// console.log(minSt.min());
// console.log(minSt);
module.exports = minStack;
