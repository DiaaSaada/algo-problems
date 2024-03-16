/**
 * 525. Contiguous Array
 * Given a binary array nums, return the maximum length of a
 * contiguous subarray with an equal number of 0 and 1.
 *
 * Example 1:
 * Input: nums = [0,1]
 * Output: 2
 * Explanation: [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.
 *
 * Example 2:
 * Input: nums = [0,1,0,0,1,0,0,1,0,]
 * Output: 2
 * Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {

    const map = {0: -1};
    let max = 0
    let sum = 0

    for (i = 0; i < nums.length; i++) {
        let num = nums[i]
        sum += num > 0 ? 1 : -1;
        if (sum in map)
            max = Math.max(max, i - map[sum])
        else
            map[sum] = i
    }
    return max;
};