// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

// class Queue {
// 	constructor() {
// 		this.data = [];
// 	}

// 	add(record) {
// 		this.data.unshift(record);
// 	}

// 	remove() {
// 		return this.data.pop();
// 	}
// }
class Queue {
  constructor() {
    this.front = 0;
    this.back = 0;
    this.data = {};
  }
  size() {
    return Object.keys(this.data).length;
  }
  enqueue(value) {
    this.data[this.back] = value;
    this.back++;
    return this.back;
  }
  dequeue() {
    if (this.size() === 0) {
      return null;
    }
    let removedItem = this.data[this.front];
    delete this.data[this.front];
    this.front++;
    return removedItem;
  }
  peek() {
    return this.data[this.front];
  }
}
module.exports = Queue;
