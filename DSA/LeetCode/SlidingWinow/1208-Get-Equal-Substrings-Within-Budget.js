/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function (s, t, maxCost) {

    // Sliding window

    const scores = new Array(s.length)

    for (let i = 0; i < s.length; i++) {
        scores[i] = Math.abs(s[i].charCodeAt(0) - t[i].charCodeAt(0));
    }
    let maxSubstrLen = 0

    let left = 0;
    let right = 0;
    let currentCost = 0
    while (right < scores.length && left <= right) {
        currentCost += scores[right]
        if (currentCost > maxCost) {
            currentCost -= scores[left]
            left++
        } else {
            maxSubstrLen = Math.max(maxSubstrLen, right - left + 1)
        }
        right++
    }

    return maxSubstrLen

};