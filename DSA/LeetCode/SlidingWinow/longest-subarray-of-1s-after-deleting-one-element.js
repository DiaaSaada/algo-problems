/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {


    if (nums.length === 1)
        return 0
    let max = 0
    let sums = [0, 0];

    let sum = 0

    for (i = 0; i < nums.length; i++) {
        let num = nums[i];
        sum += num
        if (num === 0 || i === nums.length - 1) {
            sums.push(sum)
            max = Math.max(max, sum - sums[sums.length - 3])
        }

    }
    if (sums.length === 3)
        return sum - 1


    return max;
};