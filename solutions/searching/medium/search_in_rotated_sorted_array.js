/**
 * Solution for Search in Rotated Sorted Array
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */

function searchInRotatedSortedArray(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) return mid;
        // Left half is sorted
        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else { // Right half is sorted
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return -1;
}

// Test cases
console.log(searchInRotatedSortedArray([4,5,6,7,0,1,2], 0)); // Expected: 4
console.log(searchInRotatedSortedArray([4,5,6,7,0,1,2], 3)); // Expected: -1
console.log(searchInRotatedSortedArray([1], 0)); // Expected: -1

/**
 * Explanation:
 * 1. Use binary search, but check which half is sorted at each step.
 * 2. If left half is sorted, check if target is in that range; otherwise, search right half.
 * 3. If right half is sorted, check if target is in that range; otherwise, search left half.
 * 4. Repeat until found or range is empty.
 */ 