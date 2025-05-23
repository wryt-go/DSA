/**
 * Solution for Permutations using Backtracking
 * Time Complexity: O(n!)
 * Space Complexity: O(n)
 * 
 * Note: The time complexity is O(n!) because there are n! permutations
 * of n distinct elements. The space complexity is O(n) for the recursion stack
 * and the visited array.
 */

function permute(nums) {
    const result = [];
    const visited = new Array(nums.length).fill(false);
    const current = [];
    
    function backtrack() {
        // Base case: if current permutation is complete
        if (current.length === nums.length) {
            result.push([...current]);
            return;
        }
        
        // Try each number as the next element
        for (let i = 0; i < nums.length; i++) {
            // Skip if number is already used
            if (visited[i]) continue;
            
            // Choose
            visited[i] = true;
            current.push(nums[i]);
            
            // Explore
            backtrack();
            
            // Unchoose (backtrack)
            visited[i] = false;
            current.pop();
        }
    }
    
    backtrack();
    return result;
}

// Alternative solution using array swapping
function permuteSwap(nums) {
    const result = [];
    
    function backtrack(start) {
        // Base case: if we've reached the end of the array
        if (start === nums.length) {
            result.push([...nums]);
            return;
        }
        
        // Try each number as the next element
        for (let i = start; i < nums.length; i++) {
            // Swap elements
            [nums[start], nums[i]] = [nums[i], nums[start]];
            
            // Explore
            backtrack(start + 1);
            
            // Swap back (backtrack)
            [nums[start], nums[i]] = [nums[i], nums[start]];
        }
    }
    
    backtrack(0);
    return result;
}

// Test cases
console.log("Using visited array:");
console.log(permute([1,2,3])); // Expected: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
console.log(permute([0,1])); // Expected: [[0,1],[1,0]]
console.log(permute([1])); // Expected: [[1]]

console.log("\nUsing array swapping:");
console.log(permuteSwap([1,2,3])); // Expected: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
console.log(permuteSwap([0,1])); // Expected: [[0,1],[1,0]]
console.log(permuteSwap([1])); // Expected: [[1]]

/**
 * Explanation:
 * 
 * 1. First Approach (Using visited array):
 *    - Uses a visited array to track which numbers have been used
 *    - Builds permutations incrementally by adding one number at a time
 *    - Backtracks by marking numbers as unvisited and removing them from current permutation
 *    - More intuitive but uses extra space for the visited array
 * 
 * 2. Second Approach (Using array swapping):
 *    - Modifies the array in-place by swapping elements
 *    - More space-efficient as it doesn't need a visited array
 *    - Can be harder to understand but is more elegant
 *    - Maintains the original array structure through backtracking
 * 
 * Both approaches:
 * - Use backtracking to explore all possible permutations
 * - Have the same time complexity of O(n!)
 * - Generate the same results
 * - Follow the same general pattern:
 *   1. Choose a number
 *   2. Explore with that choice
 *   3. Unchoose (backtrack)
 * 
 * The choice between approaches depends on:
 * - Whether you need to preserve the original array
 * - Space constraints
 * - Code readability preferences
 */ 