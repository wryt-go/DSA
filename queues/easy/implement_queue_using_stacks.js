/**
 * Queues in JavaScript
 * 
 * A queue is a linear data structure that follows the First-In-First-Out (FIFO) principle.
 * Elements are added at the rear (enqueue) and removed from the front (dequeue).
 * 
 * Key characteristics:
 * 1. FIFO (First In, First Out) order
 * 2. Dynamic size
 * 3. Common operations:
 *    - Enqueue: O(1)
 *    - Dequeue: O(1)
 *    - Front/Peek: O(1)
 *    - IsEmpty: O(1)
 *    - Search: O(n)
 * 
 * Common queue applications:
 * 1. Task scheduling
 * 2. Breadth-first search
 * 3. Print job management
 * 4. Message queues
 * 5. Level-order traversal
 * 
 * This problem demonstrates how to implement a queue using two stacks,
 * showing the relationship between different data structures.
 */

/**
 * Implement Queue using Stacks
 * 
 * Problem Statement:
 * Implement a first-in-first-out (FIFO) queue using only two stacks.
 * The implemented queue should support all the functions of a normal queue
 * (push, pop, peek, and empty).
 * 
 * Input Format:
 * - Various queue operations (push, pop, peek, empty)
 * 
 * Output Format:
 * - Results of queue operations
 * 
 * Example 1:
 * Input:
 * ["MyQueue", "push", "push", "peek", "pop", "empty"]
 * [[], [1], [2], [], [], []]
 * Output:
 * [null, null, null, 1, 1, false]
 * 
 * Explanation:
 * MyQueue myQueue = new MyQueue();
 * myQueue.push(1); // queue is: [1]
 * myQueue.push(2); // queue is: [1, 2]
 * myQueue.peek();  // return 1
 * myQueue.pop();   // return 1, queue is [2]
 * myQueue.empty(); // return false
 * 
 * Constraints:
 * - 1 <= x <= 9
 * - At most 100 calls will be made to push, pop, peek, and empty
 * - All the calls to pop and peek are valid
 * 
 * Hints:
 * 1. Use two stacks: one for pushing elements and one for popping
 * 2. When popping, transfer elements from push stack to pop stack if pop stack is empty
 * 3. The front of the queue will be at the top of the pop stack
 */

class MyQueue {
    constructor() {
        // Initialize your data structure here
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        // Your code here
    }

    /**
     * @return {number}
     */
    pop() {
        // Your code here
    }

    /**
     * @return {number}
     */
    peek() {
        // Your code here
    }

    /**
     * @return {boolean}
     */
    empty() {
        // Your code here
    }
}

// Test cases
const queue = new MyQueue();
console.log(queue.push(1)); // null
console.log(queue.push(2)); // null
console.log(queue.peek());  // 1
console.log(queue.pop());   // 1
console.log(queue.empty()); // false 