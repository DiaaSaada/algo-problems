/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function (nums) {

    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= nums.length - i && (nums[i - 1] ?? -1) < nums.length - i) {
            return nums.length - i
        }
    }
    return -1

};