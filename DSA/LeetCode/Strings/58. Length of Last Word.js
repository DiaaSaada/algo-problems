/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {

// Solution #1
    let x = s.trim().split(" ")
    return x[x.length - 1].length

    // Solution #2
    s = s.trimEnd()
    let i = s.length - 1
    while (i >= 0) {
        if (s[i] == " ")
            return s.length - 1 - i
        i--
    }
    return s.length

};