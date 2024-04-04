/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {

    const stack = [];
    let max = 0
    for (let p of s) {
        if (p == "(") {
            stack.push(p)
            max = Math.max(max, stack.length)
        } else if (p == ")") {
            stack.pop()
        }
    }
    return max

};