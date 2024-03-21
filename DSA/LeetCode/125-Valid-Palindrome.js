/**
 * Input: s = "A man, a plan, a canal: Panama"
 * Output: true
 * Explanation: "amanaplanacanalpanama" is a palindrome.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (message) {
    if (!message.length) {
        return true
    }
    message= message.toLowerCase();
    let left = 0
    let right = message.length - 1

    while (left < right) {
        let [l,charL] = getNextChar(message, left, 1)
        let [r,charR] = getNextChar(message, right, -1)
        left =  l+1;
        right =  r-1;
        if (charL !== charR)
            return false;
    }
    return true
};


var getNextChar = function (s, i, dir) {

    if (i < 0 || i > s.length)
        return [i, undefined];
    let char = s[i];
    const regExp = /^[A-Za-z0-9]+$/;
    if (char.match(regExp)) {
        return [i, char];
    }
    return getNextChar(s, i + (dir * 1), dir);
}