/**
 * THis will throw TimeLimit Excption
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestIdealString = function (s, k) {

    const cache = new Map();
    
    function helper(i, prev) {
        if (i == s.length)
            return 0

        if (cache.has(`${i}-${prev}`))
            return cache.get(`${i}-${prev}`)
        let res = helper(i + 1, prev)

        if (prev == false || Math.abs(s.charCodeAt(i) - prev.charCodeAt(0)) <= k) {
            res = Math.max(res, 1 + helper(i + 1, s[i]))

        }
        cache.set(`${i}-${prev}`, res)
        return res
    }

    return helper(0, false)
};