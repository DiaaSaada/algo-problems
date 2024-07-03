/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function (nums) {
    if (nums.length <= 4)
        return 0

    nums.sort((a, b) => a - b)

    const lastIndex = nums.length - 1
    return Math.min(
        // Skip 3 element from start and 0 element from end
        nums[lastIndex - 0] - nums[3],
        // Skip 2 element from start and 1 element from end
        nums[lastIndex - 1] - nums[2],
        // Skip 1 element from start and 2 element from end
        nums[lastIndex - 2] - nums[1],
        // Skip 0 element from start and 3 element from end
        nums[lastIndex - 3] - nums[0],
    );

};