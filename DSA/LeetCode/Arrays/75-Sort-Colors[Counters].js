/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {

    /** 
     * Iterate the array counting number of 0's, 1's, and 2's.
     * Overwrite array with the total number of 0's, then 1's and followed by 2's.
     */
    let counter = {
        '0': 0,
        '1': 0,
        '2': 0,
    }
    for (let i = 0; i < nums.length; i++) {
        counter[nums[i]] += 1
    }
    for (let i = 0; i < counter['0']; i++) {
        nums[i] = 0
    }
    for (let i = counter['0']; i < counter['0'] + counter['1']; i++) {
        nums[i] = 1
    }
    for (let i = counter['0'] + counter['1']; i < nums.length; i++) {
        nums[i] = 2
    }

};

