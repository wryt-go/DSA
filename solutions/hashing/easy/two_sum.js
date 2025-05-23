/**
 * Solution for Two Sum with multiple approaches
 * 
 * Approach 1: Hash Map (One-pass)
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * 
 * Approach 2: Two Pointers (requires sorting)
 * Time Complexity: O(n log n)
 * Space Complexity: O(n)
 * 
 * Approach 3: Brute Force
 * Time Complexity: O(n²)
 * Space Complexity: O(1)
 */

// Approach 1: Hash Map (One-pass)
function twoSum(nums, target) {
    const numMap = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        // If complement exists in map, we found our pair
        if (numMap.has(complement)) {
            return [numMap.get(complement), i];
        }
        
        // Store current number and its index
        numMap.set(nums[i], i);
    }
    
    // No solution found (should not happen according to problem constraints)
    return [];
}

// Approach 2: Two Pointers (requires sorting)
function twoSumTwoPointers(nums, target) {
    // Create array of [number, index] pairs
    const numsWithIndices = nums.map((num, index) => [num, index]);
    
    // Sort by number
    numsWithIndices.sort((a, b) => a[0] - b[0]);
    
    let left = 0;
    let right = nums.length - 1;
    
    while (left < right) {
        const sum = numsWithIndices[left][0] + numsWithIndices[right][0];
        
        if (sum === target) {
            return [numsWithIndices[left][1], numsWithIndices[right][1]];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    
    return [];
}

// Approach 3: Brute Force
function twoSumBruteForce(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}

// Test cases
console.log("Hash Map Approach:");
console.log(twoSum([2,7,11,15], 9)); // Expected: [0,1]
console.log(twoSum([3,2,4], 6)); // Expected: [1,2]
console.log(twoSum([3,3], 6)); // Expected: [0,1]

console.log("\nTwo Pointers Approach:");
console.log(twoSumTwoPointers([2,7,11,15], 9)); // Expected: [0,1]
console.log(twoSumTwoPointers([3,2,4], 6)); // Expected: [1,2]
console.log(twoSumTwoPointers([3,3], 6)); // Expected: [0,1]

console.log("\nBrute Force Approach:");
console.log(twoSumBruteForce([2,7,11,15], 9)); // Expected: [0,1]
console.log(twoSumBruteForce([3,2,4], 6)); // Expected: [1,2]
console.log(twoSumBruteForce([3,3], 6)); // Expected: [0,1]

/**
 * Explanation:
 * 
 * 1. Hash Map Approach (Recommended):
 *    - Uses a hash map to store numbers and their indices
 *    - For each number, checks if its complement exists in the map
 *    - Time complexity: O(n) - single pass through array
 *    - Space complexity: O(n) - storing numbers in map
 *    - Most efficient solution for this problem
 * 
 * 2. Two Pointers Approach:
 *    - Requires sorting the array first
 *    - Uses two pointers to find the pair
 *    - Time complexity: O(n log n) due to sorting
 *    - Space complexity: O(n) for storing indices
 *    - Useful when you need to find multiple pairs or when array is already sorted
 * 
 * 3. Brute Force Approach:
 *    - Checks all possible pairs
 *    - Time complexity: O(n²)
 *    - Space complexity: O(1)
 *    - Simple but inefficient
 *    - Good for understanding the problem
 * 
 * The hash map approach is recommended because:
 * - It's the most efficient solution
 * - It handles all edge cases
 * - It's easy to understand and implement
 * - It doesn't modify the input array
 */ 