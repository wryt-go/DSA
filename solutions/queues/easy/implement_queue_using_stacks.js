/**
 * Solution for Implementing Queue using Stacks
 * Time Complexity:
 * - Push: O(1)
 * - Pop: Amortized O(1)
 * - Peek: Amortized O(1)
 * - Empty: O(1)
 * Space Complexity: O(n)
 */

class MyQueue {
    constructor() {
        // Initialize two stacks
        this.pushStack = [];  // Stack for push operations
        this.popStack = [];   // Stack for pop/peek operations
    }

    /**
     * Push element to the back of queue
     * @param {number} x
     * @return {void}
     */
    push(x) {
        // Simply push to pushStack
        this.pushStack.push(x);
    }

    /**
     * Removes the element from in front of queue and returns that element
     * @return {number}
     */
    pop() {
        // If popStack is empty, transfer elements from pushStack
        if (this.popStack.length === 0) {
            this._transferElements();
        }
        // Pop from popStack
        return this.popStack.pop();
    }

    /**
     * Get the front element
     * @return {number}
     */
    peek() {
        // If popStack is empty, transfer elements from pushStack
        if (this.popStack.length === 0) {
            this._transferElements();
        }
        // Return top element of popStack without removing it
        return this.popStack[this.popStack.length - 1];
    }

    /**
     * Returns whether the queue is empty
     * @return {boolean}
     */
    empty() {
        // Queue is empty if both stacks are empty
        return this.pushStack.length === 0 && this.popStack.length === 0;
    }

    /**
     * Helper method to transfer elements from pushStack to popStack
     * @private
     */
    _transferElements() {
        // Transfer all elements from pushStack to popStack
        while (this.pushStack.length > 0) {
            this.popStack.push(this.pushStack.pop());
        }
    }
}

// Test cases
const queue = new MyQueue();
console.log(queue.push(1)); // null
console.log(queue.push(2)); // null
console.log(queue.peek());  // 1
console.log(queue.pop());   // 1
console.log(queue.empty()); // false

/**
 * Explanation:
 * 1. We use two stacks to implement a queue:
 *    - pushStack: for push operations
 *    - popStack: for pop/peek operations
 * 2. Push operation:
 *    - Simply push to pushStack (O(1))
 * 3. Pop/Peek operations:
 *    - If popStack is empty, transfer all elements from pushStack to popStack
 *    - Then perform the operation on popStack
 * 4. The transfer operation is O(n) but is amortized to O(1) because:
 *    - Each element is pushed and popped at most twice
 *    - Once in pushStack and once in popStack
 * 5. Space complexity is O(n) to store all elements
 */ 