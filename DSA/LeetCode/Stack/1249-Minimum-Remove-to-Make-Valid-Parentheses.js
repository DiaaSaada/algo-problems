// 1249. Minimum Remove to Make Valid Parentheses


/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {


    const parenthesesStack = []
    const letters = []

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            parenthesesStack.push(i)
            letters.push(s[i])
        } else if (s[i] === ")" && parenthesesStack.length > 0) {
            parenthesesStack.pop()
            letters.push(s[i])
        } else if (s[i] === ")" && parenthesesStack.length === 0) {
            letters.push("")
        } else {
            letters.push(s[i])
        }
    }

    if (parenthesesStack.length > 0) {
        for (let i = letters.length; i >= 0 && parenthesesStack.length > 0; i--) {
            if (i === parenthesesStack[parenthesesStack.length - 1]) {
                letters[i] = "";
                parenthesesStack.pop()
            }

        }
    }

    return letters.join("")
};