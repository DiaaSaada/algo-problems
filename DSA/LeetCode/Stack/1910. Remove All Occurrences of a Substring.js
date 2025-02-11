/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function (s, part) {

    let stack = ""
    let pL = part.length
    for (let i = 0; i < s.length; i++) {
        stack += s[i]
        if (stack.length >= pL && stack.substring(stack.length - pL) == part) {
            stack = stack.slice(0, - pL)
        }
    }

    return stack


};