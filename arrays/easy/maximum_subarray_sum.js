/**
 * Arrays in JavaScript
 * 
 * Arrays are linear data structures that store elements in contiguous memory locations.
 * Key characteristics:
 * 1. Random access: O(1) time complexity
 * 2. Fixed size in some languages, dynamic in JavaScript
 * 3. Common operations:
 *    - Access: O(1)
 *    - Search: O(n)
 *    - Insert/Delete at end: O(1)
 *    - Insert/Delete at beginning/middle: O(n)
 * 
 * Common array techniques:
 * 1. Two pointers
 * 2. Sliding window
 * 3. Prefix sums
 * 4. Kadane's algorithm (for subarray problems)
 * 
 * This problem demonstrates Kadane's algorithm, which is used to find
 * the maximum sum of a contiguous subarray in O(n) time.
 */

/**
 * Maximum Subarray Sum
 * 
 * Problem Statement:
 * Given an integer array nums, find the contiguous subarray (containing at least one number)
 * which has the largest sum and return its sum.
 * 
 * Input Format:
 * - An array of integers nums
 * 
 * Output Format:
 * - An integer representing the maximum sum of a contiguous subarray
 * 
 * Example 1:
 * Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
 * Output: 6
 * Explanation: The subarray [4,-1,2,1] has the largest sum = 6.
 * 
 * Example 2:
 * Input: nums = [1]
 * Output: 1
 * 
 * Example 3:
 * Input: nums = [5,4,-1,7,8]
 * Output: 23
 * 
 * Constraints:
 * - 1 <= nums.length <= 10^5
 * - -10^4 <= nums[i] <= 10^4
 * 
 * Hints:
 * 1. Think about how to keep track of the current sum and maximum sum
 * 2. Consider what happens when the current sum becomes negative
 * 3. You can solve this in O(n) time and O(1) space
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums) {
    // Your code here
}

// Test cases
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Expected: 6
console.log(maxSubArray([1])); // Expected: 1
console.log(maxSubArray([5,4,-1,7,8])); // Expected: 23 