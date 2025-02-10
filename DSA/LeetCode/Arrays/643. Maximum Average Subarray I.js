/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {



    let max = nums.slice(0, k).reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    }, 0);
    let temp = max;

    let start = 1
    let end = k;

    while (end < nums.length) {
        temp = temp - nums[start - 1] + nums[end]

        max = temp > max ? temp : max

        start++;
        end++;


    }
    return max / k

};