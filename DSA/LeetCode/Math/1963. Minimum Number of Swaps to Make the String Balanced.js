/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function (s) {
    let o = 0
    let c = 0
    for (let i = 0; i < s.length; i++) {

        if (s[i] == "]") {
            if (o > 0)
                o--
            else
                c++
        } else if (s[i] == "[") {
            o++
        }
    }
    return Math.ceil(c / 2)
};