/**
 * Solution for Fibonacci Number with multiple approaches
 * 
 * Approach 1: Basic Recursion
 * Time Complexity: O(2^n)
 * Space Complexity: O(n)
 * 
 * Approach 2: Memoization (Top-down DP)
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * 
 * Approach 3: Iterative (Bottom-up DP)
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

// Approach 1: Basic Recursion
function fibRecursive(n) {
    // Base cases
    if (n <= 1) return n;
    
    // Recursive case
    return fibRecursive(n - 1) + fibRecursive(n - 2);
}

// Approach 2: Memoization
function fibMemo(n, memo = {}) {
    // Return memoized value if exists
    if (n in memo) return memo[n];
    
    // Base cases
    if (n <= 1) return n;
    
    // Store result in memo
    memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
    return memo[n];
}

// Approach 3: Iterative (Bottom-up)
function fib(n) {
    // Base cases
    if (n <= 1) return n;
    
    // Initialize first two numbers
    let prev = 0;
    let curr = 1;
    
    // Calculate next number iteratively
    for (let i = 2; i <= n; i++) {
        const next = prev + curr;
        prev = curr;
        curr = next;
    }
    
    return curr;
}

// Test cases
console.log("Basic Recursion:");
console.log(fibRecursive(2)); // Expected: 1
console.log(fibRecursive(3)); // Expected: 2
console.log(fibRecursive(4)); // Expected: 3

console.log("\nMemoization:");
console.log(fibMemo(2)); // Expected: 1
console.log(fibMemo(3)); // Expected: 2
console.log(fibMemo(4)); // Expected: 3

console.log("\nIterative:");
console.log(fib(2)); // Expected: 1
console.log(fib(3)); // Expected: 2
console.log(fib(4)); // Expected: 3

/**
 * Explanation:
 * 
 * 1. Basic Recursion:
 *    - Simple but inefficient due to redundant calculations
 *    - Each number is calculated multiple times
 *    - Time complexity is exponential O(2^n)
 * 
 * 2. Memoization (Top-down DP):
 *    - Uses a cache to store previously calculated values
 *    - Avoids redundant calculations
 *    - Time complexity reduces to O(n)
 *    - Space complexity is O(n) for the cache
 * 
 * 3. Iterative (Bottom-up DP):
 *    - Most efficient approach
 *    - Uses constant space
 *    - Time complexity is O(n)
 *    - Space complexity is O(1)
 *    - Avoids recursion stack overhead
 * 
 * The iterative approach is recommended for production use
 * due to its optimal time and space complexity.
 */ 