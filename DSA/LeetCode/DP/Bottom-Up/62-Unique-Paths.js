/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {

    const newGrid = new Array(n).fill(0);

    for (let r = m - 1; r >= 0; r--) {
        newGrid[r] = new Array(n);
        for (let l = n - 1; l >= 0; l--) {

            if (r === m - 1 || l === n - 1) {
                newGrid[r][l] = 1
            } else {
                newGrid[r][l] = newGrid[r + 1][l] + newGrid[r][l + 1]
            }
        }
    }
    return newGrid[0][0]

};