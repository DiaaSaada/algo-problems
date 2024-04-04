/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function (s, k) {
    let count = 0
    let i = 0;
    while (i < s.length) {
        if (s[i] != " " && s[i + 1] == " ") {
            count++
            if (count === k)
                return s.substring(0, i + 1)
        }
        i++
    }
    return s
};