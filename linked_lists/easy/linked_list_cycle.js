/**
 * Linked Lists in JavaScript
 * 
 * A linked list is a linear data structure where elements are stored in nodes,
 * and each node points to the next node in the sequence.
 * 
 * Key characteristics:
 * 1. Dynamic size
 * 2. Non-contiguous memory allocation
 * 3. Common operations:
 *    - Access: O(n)
 *    - Search: O(n)
 *    - Insert/Delete at beginning: O(1)
 *    - Insert/Delete at end: O(n)
 *    - Insert/Delete at middle: O(n)
 * 
 * Common linked list techniques:
 * 1. Two pointers (fast and slow)
 * 2. Dummy nodes
 * 3. Reversing linked lists
 * 4. Merging linked lists
 * 
 * This problem demonstrates the two-pointer technique (Floyd's Cycle-Finding Algorithm),
 * which is used to detect cycles in a linked list in O(n) time and O(1) space.
 */

/**
 * Linked List Cycle Detection
 * 
 * Problem Statement:
 * Given head, the head of a linked list, determine if the linked list has a cycle in it.
 * A cycle exists if there is some node in the list that can be reached again by continuously
 * following the next pointer.
 * 
 * Input Format:
 * - A linked list head node
 * 
 * Output Format:
 * - Boolean: true if there is a cycle, false otherwise
 * 
 * Example 1:
 * Input: head = [3,2,0,-4], pos = 1
 * Output: true
 * Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
 * 
 * Example 2:
 * Input: head = [1,2], pos = 0
 * Output: true
 * Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
 * 
 * Example 3:
 * Input: head = [1], pos = -1
 * Output: false
 * Explanation: There is no cycle in the linked list.
 * 
 * Constraints:
 * - The number of nodes in the list is in the range [0, 10^4]
 * - -10^5 <= Node.val <= 10^5
 * - pos is -1 or a valid index in the linked list
 * 
 * Hints:
 * 1. Consider using two pointers moving at different speeds
 * 2. If there's a cycle, the faster pointer will eventually catch up to the slower pointer
 * 3. If there's no cycle, the faster pointer will reach the end of the list
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
function hasCycle(head) {
    // Your code here
}

// Helper function to create a linked list with a cycle
function createLinkedListWithCycle(values, pos) {
    if (values.length === 0) return null;
    
    const nodes = values.map(val => new ListNode(val));
    for (let i = 0; i < nodes.length - 1; i++) {
        nodes[i].next = nodes[i + 1];
    }
    
    if (pos !== -1) {
        nodes[nodes.length - 1].next = nodes[pos];
    }
    
    return nodes[0];
}

// Test cases
const test1 = createLinkedListWithCycle([3,2,0,-4], 1);
console.log(hasCycle(test1)); // Expected: true

const test2 = createLinkedListWithCycle([1,2], 0);
console.log(hasCycle(test2)); // Expected: true

const test3 = createLinkedListWithCycle([1], -1);
console.log(hasCycle(test3)); // Expected: false 