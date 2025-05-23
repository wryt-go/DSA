/**
 * Solution for Binary Search
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */

function binarySearch(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

// Test cases
console.log(binarySearch([-1,0,3,5,9,12], 9)); // Expected: 4
console.log(binarySearch([-1,0,3,5,9,12], 2)); // Expected: -1

/**
 * Explanation:
 * 1. Use two pointers (left and right) to represent the search range.
 * 2. Calculate the middle index and compare with target.
 * 3. If found, return the index. If target is greater, search right half. If less, search left half.
 * 4. Repeat until left > right. If not found, return -1.
 */ 