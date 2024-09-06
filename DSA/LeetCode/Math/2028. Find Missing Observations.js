/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
var missingRolls = function (rolls, mean, n) {

    let sum = rolls.reduce((acc, val) => acc + val, 0)
    const count = n + rolls.length

    let needed = mean * count - sum

    let neededAvg = needed / n;
    if (neededAvg > 6 || neededAvg < 1)
        return []
    neededAvg = Math.floor(neededAvg)
    let res = new Array(n).fill(Math.floor(neededAvg))

    let remaning = needed - n * neededAvg

    let index = 0
    while (remaning > 0) {
        res[index] += 1
        remaning--
        index++
    }
    return res

};