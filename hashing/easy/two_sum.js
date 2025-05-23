/**
 * Hashing in JavaScript
 * 
 * Hashing is a technique that maps data of arbitrary size to fixed-size values.
 * It's commonly used for efficient data storage and retrieval.
 * 
 * Key characteristics:
 * 1. Fast average-case lookup (O(1))
 * 2. Space-time tradeoff
 * 3. Collision handling
 * 4. Uniform distribution
 * 
 * Common hashing applications:
 * 1. Hash tables/maps
 * 2. Sets
 * 3. Caching
 * 4. Cryptography
 * 5. Deduplication
 * 
 * This problem demonstrates how to use a hash map to achieve
 * O(n) time complexity for finding pairs of numbers that sum to a target.
 */

/**
 * Two Sum
 * 
 * Problem Statement:
 * Given an array of integers nums and an integer target, return indices of the two numbers
 * such that they add up to target. You may assume that each input would have exactly one
 * solution, and you may not use the same element twice.
 * 
 * Input Format:
 * - An array of integers nums
 * - An integer target
 * 
 * Output Format:
 * - An array of two integers representing the indices of the numbers that sum to target
 * 
 * Example 1:
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1]
 * 
 * Example 2:
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 * 
 * Example 3:
 * Input: nums = [3,3], target = 6
 * Output: [0,1]
 * 
 * Constraints:
 * - 2 <= nums.length <= 10^4
 * - -10^9 <= nums[i] <= 10^9
 * - -10^9 <= target <= 10^9
 * - Only one valid answer exists
 * 
 * Hints:
 * 1. Think about how to use a hash map to store previously seen numbers
 * 2. For each number, check if its complement (target - number) exists in the map
 * 3. Consider the case where the same number appears twice
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    // Your code here
}

// Test cases
console.log(twoSum([2,7,11,15], 9)); // Expected: [0,1]
console.log(twoSum([3,2,4], 6)); // Expected: [1,2]
console.log(twoSum([3,3], 6)); // Expected: [0,1] 