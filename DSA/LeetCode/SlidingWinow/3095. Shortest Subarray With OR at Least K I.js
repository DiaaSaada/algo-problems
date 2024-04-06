/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumSubarrayLength = function (nums, k) {

    let min = Infinity
    for (left = 0; left < nums.length; left++) {
        temp = nums[left]
        for (right = left; right < nums.length; right++) {
            temp = temp | nums[right]
            if (temp >= k) {
                min = Math.min(min, right - left + 1)
                break; // if we found a window, no need to continue the inner loop
            }
        }
    }
    return (min > nums.length) ? -1 : min;
};