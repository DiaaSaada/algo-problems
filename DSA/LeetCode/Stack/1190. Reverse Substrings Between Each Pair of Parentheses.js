/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function (s) {
    /**
     * Input: s = "(ed(et(oc))el)"
        Output: "leetcode"

    Input: s = "(u(love)i)"
    Output: "iloveu"
     */

    let stacks = [[]]
    for (a of s) {
        if (a == "(") {
            stacks.push([])
        } else if (a == ")") {
            const lastStack = stacks[stacks.length - 1]
            while (lastStack.length > 0) {
                stacks[stacks.length - 2].push(lastStack.pop())
            }
            stacks.pop()

        } else {
            // lastStack
            stacks[stacks.length - 1].push(a)
        }
    }
    return stacks[0].join("")

};