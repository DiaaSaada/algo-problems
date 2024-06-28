/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximumImportance = function (n, roads) {

    const counts = new Array(n).fill(0);
    for (let [u, v] of roads) {
        counts[u]++;
        counts[v]++;
    }
    let sum = 0

    counts.sort((a, b) => b - a);
    for (let freq of counts) {
        sum += freq * n--
    }

    return sum

};