class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  push(value) {
    this.data[this.length] = value;
    this.length++;
    return this.length;
  }
  get(index) {
    return this.data[index];
  }

  pop() {
    if (this.length === 0) {
      return null;
    }
    let removeItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return removeItem;
  }
  delete(index) {
    const deletedItem = this.data[index];
    //call method to shift items once delete
    this.shiftItems(index);
    return deletedItem;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

// const family = new MyArray();
// family.push("Dayan");
// family.push("Denith");
// family.push("Hasini");
// console.log(family);
// console.log(family.delete(1));
// console.log(family);
