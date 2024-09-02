/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function (chalk, k) {


    let sum = chalk.reduce((accm, val) => accm + val);

    if (sum < k) {
        k = k % sum
    }

    let i = 0;
    while (k >= chalk[i]) {
        k -= chalk[i]
        i++
        i = i % chalk.length
    }

    return i;
};