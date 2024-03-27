class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
//Inserting new Nodes into tree.
  insert(val) {
    const newNode = new Node(val);
//If there is no Root, then the New Node is the root.
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
//While loop looks though the tree, to determine where to insert. Breaks loop on ("return this").
      while (true) {
        if (val === current.val) return undefined;
//If the value of the new Node is less than the value of the Root, it will go to the left side of the tree.
        if (val < current.val) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
//If the value of the new Node is greater than the value of the Root, it will go to the right side of the tree.
        } else if (val > current.val) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
}

// const tree = new BinarySearchTree()
// tree.insert(10)
// tree.insert(100)
// tree.insert(3)
// tree.insert(27)
// tree.insert(1)
// console.log(tree)
