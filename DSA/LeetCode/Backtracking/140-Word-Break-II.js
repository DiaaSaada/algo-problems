/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {

    const res = []

    const map = new Map();
    // Build the prefix map
    for (word of wordDict) {
        let pre = '';
        for (let i = 0; i < word.length; i++) {
            pre += word[i];
            let words = map.get(pre) ?? []
            words.push(word)
            map.set(pre, words);
        }
    }


    function dp(start, set) {
        if (start >= s.length) {
            res.push(set.join(" "))
            return
        }
        let possibleWords = map.get(s[start]);
        for (const possibleWord of possibleWords ?? []) {

            if (possibleWord == s.substring(start, start + possibleWord.length))
                dp(start + possibleWord.length, [...set, possibleWord])
        }
    }
    dp(0, [])
    return res
};