/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {

    let res = nums[0]
    for (i = 1; i < nums.length; i++) {
        res = res ^ nums[i]

    }
    console.log(res);
    if (res == k)
        return 0

    let diff = res ^ k;
    console.log(diff);
    diff = (diff >>> 0).toString(2).split("")
    let sum = 0;
    console.log((7 >>> 0).toString(2))

    for (a of diff) {
        sum += parseInt(a)
    }
    return sum;



};