/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {

    const stack = [];

    for (let a of s.split("")) {
        if (stack.length === 0) {
            stack.push(a);
        }

        if (Math.abs(a.charCodeAt(0) - stack[stack.length - 1].charCodeAt(0)) === 32) {
            stack.pop()
        } else {
            stack.push(a);
        }
    }
    return stack.join("")

};

/// Solution 2
/**
 * @param {string} s
 * @return {string}
 */
var makeGood2 = function (s) {

    const stack = [];

    for (let a of s.split("")) {


        if (stack.length === 0) {
            stack.push(a);
        } else if (a != stack[stack.length - 1] && a.toLowerCase() == stack[stack.length - 1].toLowerCase()) {

            stack.pop()
        } else {
            stack.push(a);
        }
    }
    return stack.join("")

};