/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var appendCharacters = function (s, t) {

    let sP = 0
    let tP = 0

    while (sP < s.length && tP < t.length) {
        if (s[sP] == t[tP]) {

            tP++
        }
        sP++


    }
    if (tP !== t.length) {
        return t.length - tP
    }
    return 0

};