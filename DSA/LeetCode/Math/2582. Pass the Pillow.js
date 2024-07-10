/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function (n, time) {

    const ROUND = n - 1
    if (ROUND >= time)
        return time + 1


    if (Math.floor(time / ROUND) % 2 == 1) { // Odd even round
        return n - (time % ROUND)
    } else {
        // Odd Rounds
        return (time % ROUND) + 1
    }
};