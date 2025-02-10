/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {

    let res = []
    for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
        res.push(word1[i] ?? "")
        res.push(word2[i] ?? "")
    }
    return res.join("")
};