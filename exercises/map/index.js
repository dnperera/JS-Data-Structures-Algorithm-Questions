class MyMap {
  constructor() {
    this.collection = {};
    this.length = 0;
  }

  set(key, value) {
    this.collection[key] = value;
    this.length++;
    return this.length;
  }
  has(key) {
    return key in this.collection;
  }

  get(key) {
    return key in this.collection ? this.collection[key] : null;
  }

  delete(key) {
    let deletedItem = null;
    if (key in this.collection) {
      deletedItem = this.collection[key];
      delete this.collection[key];
      this.length--;
    }
    return deletedItem;
  }

  values() {
    return Object.values(this.collection);
  }
}

//const family = new MyMap();
//use ES6 map Object
// const family = new Map();
// family.set("mother", "Hasini");
// family.set("father", "Dayan");
// family.set("elderchild", "Denith");
// family.set("youngchild", "Dasith");
// const grandP = {};
// family.set(grandP, { grandm: "soma" });
// console.log(family);
// console.log(family.get("father"));
// console.log("---------------------");
// console.log(family.values());

var Person = (function() {
  // make properies private using closure
  function Person(name) {
    this.getName = function() {
      return name;
    };
  }

  return Person;
})();

var p = new Person("Dasith");

console.log(p.getName());
console.log(p.name);
