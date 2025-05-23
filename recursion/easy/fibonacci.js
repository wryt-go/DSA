/**
 * Recursion in JavaScript
 * 
 * Recursion is a programming concept where a function calls itself to solve a problem
 * by breaking it down into smaller subproblems.
 * 
 * Key characteristics:
 * 1. Base case(s) to stop recursion
 * 2. Recursive case(s) that call the function with smaller inputs
 * 3. Progress toward the base case
 * 
 * Common recursion patterns:
 * 1. Tree recursion (e.g., Fibonacci)
 * 2. Linear recursion (e.g., factorial)
 * 3. Tail recursion (optimized for space)
 * 4. Multiple recursion (e.g., tree traversals)
 * 
 * This problem demonstrates tree recursion with Fibonacci numbers,
 * showing both the basic recursive approach and optimized solutions.
 */

/**
 * Fibonacci Number
 * 
 * Problem Statement:
 * The Fibonacci numbers, commonly denoted F(n), form a sequence called the Fibonacci sequence,
 * such that each number is the sum of the two preceding ones, starting from 0 and 1.
 * 
 * Input Format:
 * - An integer n
 * 
 * Output Format:
 * - The nth Fibonacci number
 * 
 * Example 1:
 * Input: n = 2
 * Output: 1
 * Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1
 * 
 * Example 2:
 * Input: n = 3
 * Output: 2
 * Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2
 * 
 * Example 3:
 * Input: n = 4
 * Output: 3
 * Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3
 * 
 * Constraints:
 * - 0 <= n <= 30
 * 
 * Hints:
 * 1. Consider the base cases: F(0) = 0 and F(1) = 1
 * 2. For n > 1, F(n) = F(n-1) + F(n-2)
 * 3. Think about optimizing the solution to avoid redundant calculations
 */

/**
 * @param {number} n
 * @return {number}
 */
function fib(n) {
    // Your code here
}

// Test cases
console.log(fib(2)); // Expected: 1
console.log(fib(3)); // Expected: 2
console.log(fib(4)); // Expected: 3 