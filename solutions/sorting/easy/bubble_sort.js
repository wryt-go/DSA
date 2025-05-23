/**
 * Solution for Bubble Sort
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 */

function bubbleSort(nums) {
    let n = nums.length;
    let arr = nums.slice(); // Copy to avoid mutating input
    for (let i = 0; i < n - 1; i++) {
        let swapped = false;
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        if (!swapped) break;
    }
    return arr;
}

// Test cases
console.log(bubbleSort([5,1,4,2,8])); // Expected: [1,2,4,5,8]
console.log(bubbleSort([3,2,1])); // Expected: [1,2,3]

/**
 * Explanation:
 * 1. Repeatedly swap adjacent elements if they are in the wrong order.
 * 2. After each pass, the largest element moves to the end.
 * 3. If no swaps are made in a pass, the array is sorted.
 * 4. Time complexity is O(n^2) in the worst case.
 */ 