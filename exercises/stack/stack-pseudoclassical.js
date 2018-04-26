const Stack = function(capacity) {
	this.data = {};
	this.capacity = capacity || Infinity;
	this.count = 0;
};

Stack.prototype.push = function(record) {
	if (this.count < this.capacity) {
		this.data[this.count++] = record;
		return this.count;
	} else {
		return 'Stack is reaching max size . Please remove the item before adding';
	}
};

Stack.prototype.pop = function() {
	if (this.count > 0) {
		let temp = this.data[--this.count];
		delete this.data[this.count];
		return temp;
	} else {
		return undefined;
	}
};

Stack.prototype.peek = function() {
	return this.data[this.count - 1];
};

const s = new Stack(5);
s.push('Dayan');
s.push('Hasini');
s.push('Denith');
s.push('Dasith');

//console.log(s.contains('Denith'));
console.log(s);
module.exports = Stack;
