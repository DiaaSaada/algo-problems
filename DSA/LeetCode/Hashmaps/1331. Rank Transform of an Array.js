/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {

    const sorted = [...arr].sort((a, b) => a - b)

    const res = []
    let ranks = new Map()
    let rank = 1
    for (let i = 0; i < sorted.length; i++) {
        if (!ranks.has(sorted[i])) {
            ranks.set(sorted[i], rank)
            rank++
        }
    }

    for (let i = 0; i < arr.length; i++) {
        res.push(ranks.get(arr[i]))
    }


    return res

};