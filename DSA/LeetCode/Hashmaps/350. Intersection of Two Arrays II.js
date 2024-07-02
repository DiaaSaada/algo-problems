/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {

    const map1 = new Map();
    const map2 = new Map();
    for (let a of nums1) {
        map1.set(a, 1 + (map1.get(a) ?? 0))
    }

    for (let a of nums2) {
        map2.set(a, 1 + (map2.get(a) ?? 0))
    }

    const res = [];
    for (let [k, v] of map1) {
        let min = Math.min(
            map1.get(k) ?? 0,
            map2.get(k) ?? 0,
        )
        res.push(...Array(min).fill(k))
    }
    return res

};