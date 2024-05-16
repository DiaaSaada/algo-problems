/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function (grid) {

    /**
     * Every time you are located in a cell you will collect all the gold in that cell.
        From your position, you can walk one step to the left, right, up, or down.
        You can't visit the same cell more than once.
        Never visit a cell with 0 gold.
        You can start and stop collecting gold from any position in the grid that has some gold.
     */
    // const gCache = new Map();
    function dp(r, c, cache) {
        if (r < 0 || c < 0 || r > grid.length - 1 || c > grid.length[0] - 1
            || cache.has(`${r}-${c}`) || grid[r][c] == 0
        ) {
            return 0
        }

        cache.set(`${r}-${c}`, true)

        return Math.max(grid[r][c] + dp(r - 1, c, cache)
            , grid[r][c] + dp(r + 1, c, cache)
            , grid[r][c] + dp(r, c - 1, cache)
            , grid[r][c] + dp(r, c + 1, cache))
    }

    let max = 0
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if (grid[r][c] > 0) {
                max = Math.max(max, dp(r, c, 0, new Map()));
            }
        }
    }



    return max

};

