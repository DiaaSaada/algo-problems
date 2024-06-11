/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {

    const map = new Map();

    for (let n of arr1) {
        map.set(n, (map.get(n) ?? 0) + 1);
    }

    const res = [];

    for (let n of arr2) {
        let rpeat = map.get(n) ?? 0
        res.push(...Array(rpeat).fill(n))
        map.delete(n)
    }

    let temp = []
    for (let [num, rpeat] of map)
        temp.push(...Array(rpeat).fill(num))

    temp.sort((a, b) => a - b)
    res.push(...temp)

    return res
}; 