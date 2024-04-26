/**
 * @param {number[][]} grid
 * @return {number}
 */
var minFallingPathSum = function (grid) {


    const newGrid = [];
    for (var i = 0; i < grid.length; i++) {
        newGrid[i] = new Array(grid.length);
    }

    for (let r = grid.length - 1; r >= 0; r--) {
        for (let l = 0; l < grid.length; l++) {


            newGrid[r][l] = grid[r][l] + minFromBelowRow(r, l)

        }

    }

    function minFromBelowRow(r, l) {
        if (r == grid.length - 1)
            return 0
        let x = [...grid[r + 1]]
        x[l] = Infinity
        return Math.min(...x);
    }

    console.log(newGrid)
    console.log("------------------------")
    return Math.min(...newGrid[0])

};