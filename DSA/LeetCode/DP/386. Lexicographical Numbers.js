/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function (n) {


    function dp(start) {
        let res = []
        let i = start
        let max = start == 1 ? start + 8 : start + 9
        while (i <= n && i <= max) {

            res.push(i)
            res.push(...dp(i * 10))
            i++
        }
        return res
    }
    return dp(1);
};