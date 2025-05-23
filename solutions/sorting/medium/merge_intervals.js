/**
 * Solution for Merge Intervals
 * Time Complexity: O(n log n)
 * Space Complexity: O(n)
 */

function mergeIntervals(intervals) {
    if (!intervals.length) return [];
    // Sort intervals by start time
    intervals.sort((a, b) => a[0] - b[0]);
    const result = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
        const last = result[result.length - 1];
        if (intervals[i][0] <= last[1]) {
            // Overlap, merge intervals
            last[1] = Math.max(last[1], intervals[i][1]);
        } else {
            // No overlap, add to result
            result.push(intervals[i]);
        }
    }
    return result;
}

// Test cases
console.log(mergeIntervals([[1,3],[2,6],[8,10],[15,18]])); // Expected: [[1,6],[8,10],[15,18]]
console.log(mergeIntervals([[1,4],[4,5]])); // Expected: [[1,5]]

/**
 * Explanation:
 * 1. Sort intervals by start time.
 * 2. Iterate through intervals, merging if they overlap.
 * 3. If no overlap, add interval to result.
 * 4. Time complexity is O(n log n) due to sorting.
 */ 