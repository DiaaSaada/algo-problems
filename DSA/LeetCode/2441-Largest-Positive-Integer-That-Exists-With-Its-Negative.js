/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function (nums) {
    let max = -1
    const hash = new Map();


    for (let i = 0; i < nums.length; i++) {
        let counterValue = -1 * nums[i]; // we ned the counter value

        if (hash.has(counterValue)) { //if we alreadp passed over the counterValue
            max = Math.max(max, Math.abs(counterValue)) // set if this valueor the counter value > max
        } else {
            hash.set(nums[i]) // add thevlaue to the map
        }
    }




    return max

};