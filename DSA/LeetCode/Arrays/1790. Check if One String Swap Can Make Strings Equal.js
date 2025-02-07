/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {

    if (s1 == s2)
        return true
    let counter = 0
    let diff = []
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] != s2[i]) {
            if (diff.length >= 2)
                return false
            diff.push(i)
        }
    }
    if (diff.length == 1) {
        return false
    }
    if (diff.length == 2) {
        const [i, j] = diff;
        return s1[i] == s2[j] && s1[j] == s2[i]
    }

    return true
};