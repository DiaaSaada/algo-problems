/**
 * https://leetcode.com/problems/product-of-array-except-self/?envType=daily-question&envId=2024-03-15
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {


    let prefix = 1
    let suffix = 1
    const res = [];
    for (let i = 0; i < nums.length; i++) {
        res[i] = prefix
        prefix *= nums[i]
    }

    for (let i = nums.length - 1; i >= 0; i--) {
        res[i] *= suffix
        suffix *= nums[i]
    }
    return res

};