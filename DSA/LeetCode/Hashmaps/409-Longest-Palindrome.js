/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {

    const map = new Map()
    for (let i = 0; i < s.length; i++) {
        let rep = map.get(s[i]) ?? 0
        rep++;
        map.set(s[i], rep);
    }
    let count = 0

    let OddsCount = 0
    for (let k of map.values()) {
        if (k % 2 == 0) {
            count += k
        } else {
            count += k - 1
            OddsCount++
        }
    }

    if (OddsCount > 0)
        count += 1
    return count

};