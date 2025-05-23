/**
 * Backtracking in JavaScript
 * 
 * Backtracking is an algorithmic technique that considers searching every possible combination
 * in order to solve a computational problem. It builds candidates for the solution incrementally
 * and abandons a candidate ("backtracks") as soon as it determines that the candidate cannot
 * possibly be completed to a valid solution.
 * 
 * Key characteristics:
 * 1. Systematic search through all possible states
 * 2. State space tree exploration
 * 3. Pruning of invalid paths
 * 4. Recursive implementation
 * 
 * Common backtracking applications:
 * 1. Permutations and combinations
 * 2. N-Queens problem
 * 3. Sudoku solver
 * 4. Maze solving
 * 5. Graph coloring
 * 
 * This problem demonstrates backtracking by generating all possible
 * permutations of an array, showing how to build and explore the state space.
 */

/**
 * Permutations
 * 
 * Problem Statement:
 * Given an array nums of distinct integers, return all the possible permutations.
 * You can return the answer in any order.
 * 
 * Input Format:
 * - An array of distinct integers nums
 * 
 * Output Format:
 * - An array of arrays containing all possible permutations
 * 
 * Example 1:
 * Input: nums = [1,2,3]
 * Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 * 
 * Example 2:
 * Input: nums = [0,1]
 * Output: [[0,1],[1,0]]
 * 
 * Example 3:
 * Input: nums = [1]
 * Output: [[1]]
 * 
 * Constraints:
 * - 1 <= nums.length <= 6
 * - -10 <= nums[i] <= 10
 * - All the integers of nums are unique
 * 
 * Hints:
 * 1. Think about how to build permutations incrementally
 * 2. Consider using a visited array to track used numbers
 * 3. Use backtracking to explore all possibilities
 * 4. Remember to undo changes when backtracking
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function permute(nums) {
    // Your code here
}

// Test cases
console.log(permute([1,2,3])); // Expected: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
console.log(permute([0,1])); // Expected: [[0,1],[1,0]]
console.log(permute([1])); // Expected: [[1]] 