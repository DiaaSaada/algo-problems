/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function (s) {

    const stack = []

    for (let c of s.split("")) {
        if (isNaN(c)) {
            stack.push(c)
        } else {
            stack.pop();
        }

    }

    return stack.join("")

};