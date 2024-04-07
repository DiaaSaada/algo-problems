/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function (grid) {

    const res = [];
    let CELLS = 0

    // find starting cell
    const [startR, startL] = startingPoint();
    backtrack(startR, startL, new Map())
    return res.length

    function startingPoint() {
        let startR, startL;
        for (let r = 0; r < grid.length; r++) {
            for (let l = 0; l < grid[0].length; l++) {
                if (grid[r][l] === 1) {
                    CELLS++
                    startR = r
                    startL = l
                } else if (grid[r][l] === 0) {
                    CELLS++
                }
            }
        }
        return [startR, startL]
    }


    function backtrack(r, l, path) {

        if (r < 0 || l < 0 || r > grid.length - 1 || l > grid[0].length - 1)
            return false

        if (grid[r][l] === 2) {  // Finish
            path.set(`${r}-${l}`, [r, l])
            if (path.size === CELLS)
                res.push([...path.values()])
            return path
        } else if (grid[r][l] === -1) {
            return false

        } else if (grid[r][l] === 0 || grid[r][l] === 1) {
            if (path.get(`${r}-${l}`)) { // visited
                return false
            } else {
                path.set(`${r}-${l}`, [r, l])
                backtrack(r - 1, l, new Map(path))
                backtrack(r + 1, l, new Map(path))
                backtrack(r, l - 1, new Map(path))
                backtrack(r, l + 1, new Map(path))
            }
        }
    }
};