/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {

    const map = new Map();
    for (let i = 0; i <= c; i++) {
        let r = i * i;

        if (r == c)
            return true
        if (r > c)
            break;

        map.set(r, r)
        if (r + (map.get(c - r) ?? 0) == c) {
            return true
        }



    }
    return false

};