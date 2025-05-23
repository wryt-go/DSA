/**
 * Sorting in JavaScript
 * 
 * Sorting is the process of arranging data in a particular order (ascending or descending).
 * Efficient sorting is fundamental for optimizing the performance of other algorithms (like search and merge).
 * 
 * Key characteristics:
 * 1. Comparison-based vs non-comparison-based
 * 2. Stable vs unstable
 * 3. In-place vs out-of-place
 * 4. Time and space complexity
 * 
 * Common sorting algorithms:
 * 1. Bubble sort
 * 2. Selection sort
 * 3. Insertion sort
 * 4. Merge sort
 * 5. Quick sort
 * 6. Heap sort
 * 
 * This problem demonstrates bubble sort, a simple comparison-based sorting algorithm.
 */

/**
 * Bubble Sort
 * 
 * Problem Statement:
 * Given an array of integers nums, sort the array in ascending order using bubble sort.
 *
 * Input Format:
 * - An array of integers nums
 *
 * Output Format:
 * - The sorted array (ascending order)
 *
 * Example 1:
 * Input: nums = [5,1,4,2,8]
 * Output: [1,2,4,5,8]
 *
 * Example 2:
 * Input: nums = [3,2,1]
 * Output: [1,2,3]
 *
 * Constraints:
 * - 1 <= nums.length <= 100
 * - -1000 <= nums[i] <= 1000
 *
 * Hints:
 * 1. Repeatedly swap adjacent elements if they are in the wrong order
 * 2. After each pass, the largest element moves to the end
 * 3. Continue until no swaps are needed
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function bubbleSort(nums) {
    // Your code here
}

// Test cases
console.log(bubbleSort([5,1,4,2,8])); // Expected: [1,2,4,5,8]
console.log(bubbleSort([3,2,1])); // Expected: [1,2,3] 