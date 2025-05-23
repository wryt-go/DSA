/**
 * Solution for Linked List Cycle Detection using Floyd's Cycle-Finding Algorithm
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

function hasCycle(head) {
    // If list is empty or has only one node, no cycle
    if (!head || !head.next) return false;
    
    // Initialize two pointers
    let slow = head;
    let fast = head;
    
    // Move pointers until they meet or fast reaches end
    while (fast && fast.next) {
        slow = slow.next;        // Move slow pointer by 1
        fast = fast.next.next;   // Move fast pointer by 2
        
        // If pointers meet, cycle exists
        if (slow === fast) return true;
    }
    
    // If fast reaches end, no cycle
    return false;
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

/**
 * Explanation:
 * 1. We use Floyd's Cycle-Finding Algorithm (also known as the "tortoise and hare" algorithm)
 * 2. The algorithm uses two pointers:
 *    - slow: moves one step at a time
 *    - fast: moves two steps at a time
 * 3. If there's a cycle, the fast pointer will eventually catch up to the slow pointer
 * 4. If there's no cycle, the fast pointer will reach the end of the list
 * 5. Time complexity is O(n) where n is the number of nodes
 * 6. Space complexity is O(1) as we only use two pointers
 */ 