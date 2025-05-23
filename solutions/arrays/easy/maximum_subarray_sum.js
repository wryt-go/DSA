/**
 * Solution for Maximum Subarray Sum using Kadane's Algorithm
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

function maxSubArray(nums) {
    // Initialize variables to track current and maximum sum
    let currentSum = nums[0];
    let maxSum = nums[0];
    
    // Start from the second element
    for (let i = 1; i < nums.length; i++) {
        // Either extend the current subarray or start a new one
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        // Update the maximum sum if current sum is larger
        maxSum = Math.max(maxSum, currentSum);
    }
    
    return maxSum;
}

// Test cases
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Expected: 6
console.log(maxSubArray([1])); // Expected: 1
console.log(maxSubArray([5,4,-1,7,8])); // Expected: 23

/**
 * Explanation:
 * 1. We use Kadane's algorithm which is an efficient way to find the maximum subarray sum
 * 2. For each element, we have two choices:
 *    - Start a new subarray from the current element
 *    - Extend the existing subarray by adding the current element
 * 3. We keep track of two variables:
 *    - currentSum: maximum sum of subarray ending at current position
 *    - maxSum: maximum sum found so far
 * 4. The algorithm runs in O(n) time as we process each element exactly once
 * 5. Space complexity is O(1) as we only use two variables regardless of input size
 */ 