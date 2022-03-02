/**
 *
 * First, create a Stack which contains the following methods:
 * - push: add value to top (end) of stack
 * - pop: remove value from top (end) of stack
 *
 * Second, create a Queue which consists of two stacks: stack1 and stack2
 * and contains the following methods:
 * - enqueue: add value to queue
 * - dequeue: remove value from queue
 * Queue methods should follow First In, First Out rule.
 *
 * DO NOT USE NATIVE JS METHODS
 *
 */

class Stack {
  constructor() {
    this.stack = {};
    this.length = 0;
  }

  push(el) {
    this.stack[this.length++] = el;
  }

  pop() {
    if (!this.length) return;
    const el = this.stack[this.length - 1];
    delete this.stack[this.length - 1];
    this.length -= 1;
    return el;
  }
}

// const myStack = new Stack();
// myStack.push(1);
// console.log(myStack.stack[0]);

class Queue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(el) {
    this.stack1.push(el);
  }

  dequeue() {
    if (!this.stack1.length) return;
    // move elements from stack1 to stack2
    while (this.stack1.length) {
      this.stack2.push(this.stack1.pop());
    }
    const el = this.stack2.pop();
    while (this.stack2.length) {
      this.stack1.push(this.stack2.pop());
    }
    return el;
  }
}

module.exports = { Stack, Queue };
