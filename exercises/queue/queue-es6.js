class Queue {
	consturctor() {
		this.front = 0;
		this.back = 0;
		this.storage = {};
	}

	size() {
		return this.storage;
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
}

var queue = new Queue();

console.log(queue.size());

console.log(queue.dequeue());
queue.enqueue('Dayan');
queue.enqueue('Hasini');
queue.enqueue('Dasith');

console.log(queue);
// console.log(queue.dequeue());
// console.log(queue);
