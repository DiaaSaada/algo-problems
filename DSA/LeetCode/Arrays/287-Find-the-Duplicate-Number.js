/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {

    let fast = nums[0]
    let slow = nums[0]

    while (true) {
        slow = nums[slow]
        fast = nums[nums[fast]]
        if (fast === slow) {
            break;
        }
    }

    let ptr1 = nums[0]
    let ptr2 = slow
    while (ptr1 !== ptr2) {
        ptr1 = nums[ptr1];
        ptr2 = nums[ptr2];
    }
    return ptr1;
};