/**
 * Problem Link: https://leetcode.com/problems/max-number-of-k-sum-pairs/description
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
    const map = new Map();
    let counter = 0;
    for (const num of nums) {
        let comp = k - num;
        if (map.get(comp) > 0
            && comp + num === k) {
            counter++
            map.set(comp, map.get(comp) - 1)
        } else {
            // Set num in map
            if (map.get(num)) {

                map.set(num, map.get(num) + 1)
            } else {
                map.set(num, 1)
            }
        }
    }
    return counter;
};