/**
 * Stacks in JavaScript
 * 
 * A stack is a linear data structure that follows the Last-In-First-Out (LIFO) principle.
 * Elements are added and removed from the same end, called the top of the stack.
 * 
 * Key characteristics:
 * 1. LIFO (Last In, First Out) order
 * 2. Dynamic size
 * 3. Common operations:
 *    - Push: O(1)
 *    - Pop: O(1)
 *    - Peek/Top: O(1)
 *    - IsEmpty: O(1)
 *    - Search: O(n)
 * 
 * Common stack applications:
 * 1. Function call management
 * 2. Expression evaluation
 * 3. Parentheses matching
 * 4. Undo operations
 * 5. Browser history
 * 
 * This problem demonstrates how to use a stack to validate
 * matching parentheses in O(n) time and O(n) space.
 */

/**
 * Valid Parentheses
 * 
 * Problem Statement:
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
 * determine if the input string is valid.
 * 
 * An input string is valid if:
 * 1. Open brackets must be closed by the same type of brackets.
 * 2. Open brackets must be closed in the correct order.
 * 3. Every close bracket has a corresponding open bracket of the same type.
 * 
 * Input Format:
 * - A string s containing only parentheses characters
 * 
 * Output Format:
 * - Boolean: true if the string is valid, false otherwise
 * 
 * Example 1:
 * Input: s = "()"
 * Output: true
 * 
 * Example 2:
 * Input: s = "()[]{}"
 * Output: true
 * 
 * Example 3:
 * Input: s = "(]"
 * Output: false
 * 
 * Example 4:
 * Input: s = "([)]"
 * Output: false
 * 
 * Example 5:
 * Input: s = "{[]}"
 * Output: true
 * 
 * Constraints:
 * - 1 <= s.length <= 10^4
 * - s consists of parentheses only '()[]{}'
 * 
 * Hints:
 * 1. Use a stack to keep track of opening brackets
 * 2. When you encounter a closing bracket, check if it matches the last opening bracket
 * 3. The stack should be empty at the end for a valid string
 */

/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
    // Your code here
}

// Test cases
console.log(isValid("()")); // Expected: true
console.log(isValid("()[]{}")); // Expected: true
console.log(isValid("(]")); // Expected: false
console.log(isValid("([)]")); // Expected: false
console.log(isValid("{[]}")); // Expected: true 