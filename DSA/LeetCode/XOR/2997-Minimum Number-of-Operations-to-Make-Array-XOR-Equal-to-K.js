/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {

    let bitwiseNums = nums[0]
    for (i = 1; i < nums.length; i++) {
        bitwiseNums = bitwiseNums ^ nums[i]

    }
    
    if (bitwiseNums == k)
        return 0

    let diff = bitwiseNums ^ k;
    
    diff = (diff >>> 0).toString(2).split("")
    let sum = 0;
    

    for (a of diff) {
        sum += parseInt(a)
    }
    return sum;



};