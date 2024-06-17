/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {

    s.sort((a, b) => a - b)
    g.sort((a, b) => a - b)

    let sI = 0;
    let gI = 0;
    let count = 0;
    while (sI < s.length && gI < g.length) {
        if (s[sI] >= g[gI]) {
            count++

            gI++
        }
        sI++;

    }

    return count;

};