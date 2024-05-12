/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function (grid) {

    const maxMp = new Map()

    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid.length - 2; c++) {
            let max = Math.max(
                grid[r][c],
                grid[r][c + 1],
                grid[r][c + 2],
            )
            maxMp.set(`R${r}C${c}`, max)
        }
    }

    const res = [];
    for (let r = 0; r < grid.length - 2; r++) {
        res.push(new Array(grid.length - 2).fill(0))
    }
    for (let c = 0; c < grid.length - 2; c++) {
        for (let r = 0; r < grid.length - 2; r++) {
            let max = Math.max(
                maxMp.get(`R${r}C${c}`),
                maxMp.get(`R${r + 1}C${c}`) ?? 0,
                maxMp.get(`R${r + 2}C${c}`) ?? 0
            )
            res[r][c] = max
        }
    }
    return res;

};