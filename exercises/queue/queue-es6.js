class Queue {
	constructor() {
		this.front = 0;
		this.back = 0;
		this.storage = {};
	}

	size() {
		return Object.keys(this.storage).length;
	}

	enqueue(value) {
		this.storage[this.back++] = value;
		return this.back;
	}

	dequeue() {
		if (this.size() > 0) {
			let temp = this.storage[this.front];
			delete this.storage[this.front];
			this.front++;
			return temp;
		}
		return undefined;
	}

	peek() {
		return this.storage[this.front];
	}
}


