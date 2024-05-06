/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {

    nums.sort()

    const res = [];
    for (i = 1; i < nums.length; i++) {
        if (nums[i] == nums[i - 1])
            res.push(nums[i])

    }
    return res;

};

//-----------------------------------------------------
// Better solution
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {


    const duplicates = [];
    for (let i = 0; i < nums.length; i++) {
        let index = Math.abs(nums[i]) - 1;
        if (nums[index] < 0) {
            duplicates.push(Math.abs(nums[i]))
        } else {

            nums[index] *= -1
        }
    }
    return duplicates;
};