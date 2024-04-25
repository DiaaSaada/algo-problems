/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
    const memo = {
        '0': 0,
        '1': 1,
        '2': 1,
    };

    function rec(n) {

        if (memo[n] !== undefined)
            return memo[n];

        memo[n] = rec(n - 1) + rec(n - 2) + rec(n - 3)
        return memo[n]
    }
    return rec(n)
};