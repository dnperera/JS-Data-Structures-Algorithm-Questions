// --- Directions
// Implement a 'peek' method in this Queue class.
// Peek should return the last element (the next
// one to be returned) from the queue *without*
// removing it.

class Queue {
	constructor() {
		this.back = 0;
		this.front = 0;
		this.data = {};
	}

	add(record) {
		this.data[this.back++] = record;
		return this.back;
	}

	remove() {
		if (Object.keys(this.data).length > 0) {
			let temp = this.data[this.front];
			delete this.data[this.front];
			this.front++;
			return temp;
		}
		return undefined;
	}

	peek() {
		return this.data[this.front];
	}
}

module.exports = Queue;
