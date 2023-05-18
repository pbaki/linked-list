class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.nextNode = newNode;
      this.tail = newNode;
    }
  }
  prepend(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.nextNode = this.head;
      this.head = newNode;
    }
  }

  size() {
    let counter = 0;
    let currentNode = this.head;
    while (currentNode !== null) {
      counter++;
      currentNode = currentNode.nextNode;
    }

    return counter;
  }
  head() {
    return this.head;
  }

  tail() {
    return this.tail;
  }
  at(index) {
    if (index < 0 || index >= this.size()) {
      throw new Error("Index out of bounds");
    }

    let count = 0;
    let currentNode = this.head;

    while (count < index) {
      currentNode = currentNode.nextNode;
      count++;
    }

    return currentNode;
  }

  pop() {
    if (!this.head) {
      throw new Error("List is empty");
    }

    let currentNode = this.head;
    let previousNode = null;

    while (currentNode.nextNode !== null) {
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
    }

    if (previousNode) {
      previousNode.nextNode = null;
      this.tail = previousNode;
    } else {
      this.head = null;
      this.tail = null;
    }

    return currentNode.value;
  }

  contains(value) {
    let currentNode = this.head;

    while (currentNode !== null) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.nextNode;
    }

    return false;
  }

  find(value) {
    let index = 0;
    let currentNode = this.head;

    while (currentNode !== null) {
      if (currentNode.value === value) {
        return index;
      }
      currentNode = currentNode.nextNode;
      index++;
    }

    return null;
  }

  toString() {
    let currentNode = this.head;
    let string = "";

    while (currentNode !== null) {
      string += `(${currentNode.value}) -> `;
      currentNode = currentNode.nextNode;
    }

    string += "null";
    return string;
  }
}
class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

let mylist = new LinkedList();
mylist.append(1);
mylist.append(2);
mylist.prepend(6);
mylist.prepend(7);
console.log(mylist);
console.log(mylist.size());
console.log(mylist.head);
console.log(mylist.tail);
console.log(mylist.at(2));
console.log(mylist.toString());
console.log(mylist.pop());
console.log(mylist.contains(1));
console.log(mylist.find(6));
