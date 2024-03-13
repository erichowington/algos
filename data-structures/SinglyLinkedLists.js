class Node {
  constructor(randomVal) {
    this.val = randomVal;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(newVal) {
    const newNode = new Node(newVal);

    // If theres no head, run the line of code.(bang operator "!")

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}

const list = new SinglyLinkedList();
list.push("A");
list.push("B");
list.push("C");
console.log(list);

// SinglyLinkedList {
//     head: Node { val: 'A', next: Node { val: 'B', next: [Node] } },
//     tail: Node { val: 'C', next: null },
//     length: 3
//   }
