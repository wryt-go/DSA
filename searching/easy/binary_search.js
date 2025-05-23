/**
 * Searching in JavaScript
 * 
 * Searching is the process of finding a particular value or condition within a data structure.
 * Efficient searching is crucial for performance in many algorithms and applications.
 * 
 * Key characteristics:
 * 1. Linear search: O(n) time, works on unsorted data
 * 2. Binary search: O(log n) time, requires sorted data
 * 3. Divide and conquer approach
 * 
 * Common searching applications:
 * 1. Database lookups
 * 2. Dictionary/word search
 * 3. Range queries
 * 4. Finding min/max
 * 
 * This problem demonstrates binary search, a classic algorithm for searching in sorted arrays.
 */

/**
 * Binary Search
 * 
 * Problem Statement:
 * Given a sorted array of integers nums and an integer target, return the index of target if it is present in nums. Otherwise, return -1.
 * 
 * Input Format:
 * - An array of integers nums (sorted in ascending order)
 * - An integer target
 * 
 * Output Format:
 * - The index of target in nums, or -1 if not found
 * 
 * Example 1:
 * Input: nums = [-1,0,3,5,9,12], target = 9
 * Output: 4
 * 
 * Example 2:
 * Input: nums = [-1,0,3,5,9,12], target = 2
 * Output: -1
 * 
 * Constraints:
 * - 1 <= nums.length <= 10^4
 * - -10^4 < nums[i], target < 10^4
 * - All values of nums are unique
 * - nums is sorted in ascending order
 *
 * Hints:
 * 1. Use two pointers (left and right) to represent the search range
 * 2. Calculate the middle index and compare with target
 * 3. Adjust the search range based on comparison
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function binarySearch(nums, target) {
    // Your code here
}

// Test cases
console.log(binarySearch([-1,0,3,5,9,12], 9)); // Expected: 4
console.log(binarySearch([-1,0,3,5,9,12], 2)); // Expected: -1 