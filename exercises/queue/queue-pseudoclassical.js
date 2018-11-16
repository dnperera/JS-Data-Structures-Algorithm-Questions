const Queue = function() {
  this.front = 0;
  this.back = 0;
  this.storage = {};
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};
Queue.prototype.enqueue = function(value) {
  this.storage[this.back++] = value;
  return this.back;
};

Queue.prototype.dequeue = function() {
  if (this.size() > 0) {
    let temp = this.storage[this.front];
    delete this.storage[this.front];
    this.front++;
    return temp;
  }
  return undefined;
};

Queue.prototype.peek = function() {
  return this.storage[this.front];
};

module.exports = Queue;
