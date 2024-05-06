/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
    let counter = 0


    for (i = 0; i < nums.length; i++) {

        if (nums[i] < k){

            counter += 1;
        } else
            continue;
        let temp = nums[i]
        let sub = [nums[i]];
        for (j = i + 1; j < nums.length; j++) {
            if (temp * nums[j] < k) {
                temp *= nums[j];
                sub.push(nums[j])
                counter++
            } else {
                break;
            }
        }
    }
    // console.log(res)
    return counter;
};