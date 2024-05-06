/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * Input: nums = [10,5,2,6], k = 100
 * [600,60,12,6]
 * Output: 8
 */
var numSubarrayProductLessThanK = function (nums, k) {
    let res = 0;
    let product = 1;
    let left = 0;
    for (let right = 0; right < nums.length; right++) {
        product *= nums[right]  ;
        while(left <= right && product >= k){
            product = Math.floor( product / nums[left] );
            left +=1
        }
        res += right - left + 1
    }
    return res;
};