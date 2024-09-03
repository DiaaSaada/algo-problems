/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function (s, k) {

    let aAsciiCode = "a".charCodeAt(0) - 1

    // Convert to array of numbers
    let x = s.split("").map((val) => { return val.charCodeAt(0) - aAsciiCode })


    let res = x.join("")

    // transform
    while (k > 0) {
        res = `${res}`.split("").reduce((acc, val) => parseInt(val) + acc, 0)

        k--;
    }
    return res;
};