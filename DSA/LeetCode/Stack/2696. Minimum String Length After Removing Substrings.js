/**
 * @param {string} s
 * @return {number}
 */
var minLength = function (s) {


    const stack = []

    for (let a of s.split("")) {
        const L = stack.length
        if (L == 0) {
            stack.push(a)
        } else if ((a == "B" && stack[L - 1] == "A") || (a == "D" && stack[L - 1] == "C")) {
            stack.pop();
        } else {
            stack.push(a)
        }
    }
    return stack.length

};