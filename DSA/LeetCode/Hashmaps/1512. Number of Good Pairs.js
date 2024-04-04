/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {

    let count = 0
    let map = new Map()
    for (let a of nums) {
        let freq = map.get(a);
        if (freq >= 1) {
            count += freq
            map.set(a, freq + 1)
        } else {
            map.set(a, 1)
        }
    }
    return count

};