/**
 * @param {number[]} nums
 * @return {number}
 * With Extra space
 * T: O(n) S: O(n)
 */
var firstMissingPositive = function (nums) {
    const map = new Map();

    let max = 0;
    for (const a of nums) {

        max = Math.max(max, a);
        map.set(a, true);
    }


    for (let i = 1; i <= max + 1; i++) {
        if (!map.has(i)) {
            return i
        }
    }
};

///----- We need O(1) space


/**
 * @param {number[]} nums
 * @return {number}
 * With Extra space
 * T: O(n) S: O(n)
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {


    let max = nums.length + 1; // max possible answer

    // set zero and negative number to max since we do not care about them
    for (let i = 0; i <= nums.length - 1; i++) {
        if (nums[i] <= 0)
            nums[i] = max
    }

    // negate the vale of nums[Math.abs(nums[i]) - 1] to indicate
    // that value exists in the array
    for (let i = 0; i <= nums.length - 1; i++) {
        let indexToFlag = Math.abs(nums[i]) - 1
        if (nums[indexToFlag] > 0) // this handle out of bounce
            nums[indexToFlag] *= -1
    }


    for (let i = 0; i <= nums.length; i++) {
        if (nums[i] > 0)
            return i + 1
    }
    return max;
};



