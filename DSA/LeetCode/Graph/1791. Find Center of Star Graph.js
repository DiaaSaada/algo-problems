/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function (edges) {

    // Solution #1
    if (edges[0][0] == edges[1][0] || edges[0][0] == edges[1][1]) {
        return edges[0][0]
    }
    return edges[0][1]


    // Solution #2
    let map = new Map();
    let center = 0
    let max = 0
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            let count = 1 + (map.get(edges[i][j]) ?? 0)
            map.set(edges[i][j], count)
            if (count > max) {
                max = count
                center = edges[i][j]

            }
        }

    }

    return center

};