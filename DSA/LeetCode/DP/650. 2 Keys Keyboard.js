/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function (n) {


    function dp(count, mem, op) {



        if (count == n) {
            return op
        }

        if (count > n) {
            return Infinity
        }



        return Math.min(
            dp(count + mem, mem, op + 1), //ctrl+V
            dp(count * 2, a.length, op + 2),  //ctrl+C => ctrl+V
        )

    }

    if (n == 1)
        return 0
    if (n == 2)
        return 2


    return dp(2, 1, 2)

};