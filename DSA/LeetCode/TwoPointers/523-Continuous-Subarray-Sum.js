/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {


    let l = 0
    let r = 0;
    let sums = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        sums[i] = sums[i - 1] + nums[i]
    }
    return false;

};