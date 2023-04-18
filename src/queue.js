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
	constructor() {
		this.list = null;
	}
	getUnderlyingList() {
		return this.list;
	}

	enqueue(value) {
		if (!this.list) {
			this.list = new ListNode(value);
			console.log(this.list)
		} else {

			let node = this.list;

			while (node.next) {
				node = node.next;
			}
			node.next = new ListNode(value)
		}
	}

	dequeue() {
		let first = this.list.value;
		console.log (first)
		this.list = this.list.next;
console.log (this.list)
		return first;
	}

}

module.exports = {
	Queue
};


const queue = new Queue();
 
  queue.enqueue(15); 
   queue.dequeue(3); 
//   queue.enqueue(3); 
// 
//   queue.getUnderlyingList() 
