/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {


    return rec(numBottles, 0, numExchange);


    function rec(full, empty, numExchange) {
        if (full == 0)
            return 0
        let sum = (full + empty)
        if (sum < numExchange)
            return full

        return full +
            rec(Math.floor(sum / numExchange), sum % numExchange, numExchange)
    }


};