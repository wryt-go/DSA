/**
 * Solution for Valid Parentheses using Stack
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

function isValid(s) {
    // Create a stack to keep track of opening brackets
    const stack = [];
    
    // Create a map of closing brackets to their corresponding opening brackets
    const bracketMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    // Iterate through each character in the string
    for (let char of s) {
        // If it's an opening bracket, push to stack
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else {
            // If it's a closing bracket
            // Check if stack is empty or if the last opening bracket doesn't match
            if (stack.length === 0 || stack.pop() !== bracketMap[char]) {
                return false;
            }
        }
    }
    
    // Stack should be empty if all brackets are properly matched
    return stack.length === 0;
}

// Test cases
console.log(isValid("()")); // Expected: true
console.log(isValid("()[]{}")); // Expected: true
console.log(isValid("(]")); // Expected: false
console.log(isValid("([)]")); // Expected: false
console.log(isValid("{[]}")); // Expected: true

/**
 * Explanation:
 * 1. We use a stack to keep track of opening brackets
 * 2. For each character in the string:
 *    - If it's an opening bracket, push it to the stack
 *    - If it's a closing bracket:
 *      * Check if stack is empty (no matching opening bracket)
 *      * Check if the last opening bracket matches the current closing bracket
 * 3. At the end, the stack should be empty if all brackets are properly matched
 * 4. Time complexity is O(n) where n is the length of the string
 * 5. Space complexity is O(n) in worst case when all characters are opening brackets
 */ 