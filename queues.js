class Node {
  constructor(groupSize, next = null) {
    this.groupSize = groupSize;
    this.next = next;
  }
}

class Queue {
  constructor(limit = 5) {
    this.front = null;
    this.back = null;
    this.length = 0;
    this.limit = limit;
    this.waitingTime = 0;
  }

  isFull = () => this.length === this.limit;

  isEmpty = () => this.length === 0;

  peek = () =>
    this.isEmpty() ? `You can ride no time to wait!` : this.waitingTime;

  addNode = (groupSize) => {
    const newNode = new Node(groupSize);
    if (this.isEmpty()) {
      this.front = newNode;
    } else {
      this.back.next = newNode;
    }
    this.back = newNode;

    this.length++;
    this.waitingTime += groupSize * 30;
  };

  enqueue = (groupSize) => {
    if (this.isFull()) {
      console.log(`the line is full. come back after ${this.waitingTime}`);
    } else {
      let peopleNum = groupSize;
      while (peopleNum > 12);
      {
        // add a node of group size 12
        peopleNum -= 12;
      }
      this.addNode(peopleNum);
    }
  };

  dequeue = () => {
    if (this.isEmpty()) {
      console.log("Queue is empty, no one to ride!");
    } else {
      const removed = this.front;
      if (this.length === 1) {
        this.front = null;
        this.back = null;
      } else {
        this.front = removed.next;
      }
      this.length--;
      this.waitingTime -= removed.groupSize * 0.1;
      return removed.groupSize;
    }
  };
}

const disney = new Queue(5);
disney.enqueue(6);
console.log(disney.peek());
disney.enqueue(12);
console.log(disney.peek());
disney.enqueue(16);
console.log(disney.peek());
disney.enqueue(40);

// console.log(disney.dequeue());
// console.log(disney.dequeue());
// console.log(disney.peek());
