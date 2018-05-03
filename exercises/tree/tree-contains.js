/*
*** Operations:
tree.addChild(value)
=> child node (new tree)
add child to tree/subtree and return child node (which should be a tree instance)
tree.contains(value)
=> true/false
Return true if value is in tree, false if not
tree.traverseDepthFirst(callback)
=> undefined
Invoke the callback for every node in a depth-first order
tree.traverseBreadthFirst(callback)
=> undefined
Invoke the callback for every node in a breadth-first order
 */

function Tree(value) {
	this.value = value;
	this.children = [];
}

Tree.prototype.addChild = function(value) {
	// contant time
	var treeNode = new Tree(value);
	this.children.push(treeNode);
	return treeNode;
};

Tree.prototype.contains = function(value) {
	// Linear time
	if (this.value === value) {
		return true;
	}

	for (let i = 0; this.children.length > i; i++) {
		if (this.children[i].contains(value)) {
			return true;
		}
	}
	return false;
};

var tree = new Tree(1);
var branch1 = tree.addChild(2);
var branch2 = tree.addChild(3);
var branch3 = tree.addChild(4);
branch1.addChild(5);
branch1.addChild(6);
branch3.addChild(7).addChild(8);

console.log(tree.contains(15));
