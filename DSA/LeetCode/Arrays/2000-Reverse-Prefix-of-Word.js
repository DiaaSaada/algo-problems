/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {

    const stack = [];
    const res = [];
    /**
     * Input: word = "abcdefd", ch = "d"
       Output: "dcbaefd"
     */
    for (let i = 0; i < word.length; i++) {

        stack.push(word[i])
        if (word[i] == ch) {
            // stack.reverse();
            while (stack.length > 0) {
                res.push(stack.pop())
            }

            return stack.join("") + word.substring(i + 1)
        }


    }
    return word

};