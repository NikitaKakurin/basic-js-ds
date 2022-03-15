const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor(){
    this.value=null;
    this.next=null;
  }

  getUnderlyingList() {
    return this; 
  }

  enqueue( value ) {
    let node = this
    if(!node.value){
      node.value = value;
      return;
    }
    while(node.next){
      node = node.next
    }
    node.next=new Queue();
    node.next.value = value;
  }

  dequeue() {
    let v = this.value;
    this.value = this.next.value;
    this.next = this.next.next;
    return v;
  }
}

module.exports = {
  Queue
};
