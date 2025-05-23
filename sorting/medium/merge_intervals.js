/**
 * Sorting for Interval Problems
 * 
 * Many interval problems can be solved efficiently by sorting the intervals first.
 * Sorting helps to bring related intervals together and makes it easier to merge or process them.
 *
 * This problem demonstrates how sorting can be used to merge overlapping intervals.
 */

/**
 * Merge Intervals
 *
 * Problem Statement:
 * Given an array of intervals where intervals[i] = [start_i, end_i], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
 *
 * Input Format:
 * - An array of intervals, each interval is an array of two integers [start, end]
 *
 * Output Format:
 * - An array of merged intervals
 *
 * Example 1:
 * Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
 * Output: [[1,6],[8,10],[15,18]]
 *
 * Example 2:
 * Input: intervals = [[1,4],[4,5]]
 * Output: [[1,5]]
 *
 * Constraints:
 * - 1 <= intervals.length <= 10^4
 * - intervals[i].length == 2
 * - 0 <= start_i <= end_i <= 10^4
 *
 * Hints:
 * 1. Sort the intervals by start time
 * 2. Merge intervals if they overlap
 * 3. Use a result array to store merged intervals
 */

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function mergeIntervals(intervals) {
    // Your code here
}

// Test cases
console.log(mergeIntervals([[1,3],[2,6],[8,10],[15,18]])); // Expected: [[1,6],[8,10],[15,18]]
console.log(mergeIntervals([[1,4],[4,5]])); // Expected: [[1,5]] 