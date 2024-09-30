/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
    let max = nums[0]
    for (let a of nums) {
        max = Math.max(a, max)
    }

    let subLength = 0
    let maxSubLength = 0
    for (let i = 0; i < nums.length; i++) {

        if (nums[i] != max)
            subLength = 0
        else {
            subLength++
            maxSubLength = Math.max(subLength, maxSubLength)
        }
    }
    return maxSubLength
};