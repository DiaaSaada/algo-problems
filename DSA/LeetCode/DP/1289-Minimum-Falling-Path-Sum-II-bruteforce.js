/**
 * @param {number[][]} grid
 * @return {number}
 */
var minFallingPathSum = function (grid) {



    const res = [];

    function helper(r, l, prevSum, path) {



        if (r == grid.length - 1) {
            prevSum += grid[r][l]
            res.push(prevSum)
            return prevSum
        }

        prevSum += grid[r][l]


        for (let i = 0; i < grid.length; i++) {
            if (i == l) {
                continue;
            }
            let newPath = `${path}-(${r + 1}-${i})`

            helper(r + 1, i, prevSum, newPath)

        }
    }

    for (let l = 0; l < grid.length; l++) {

        helper(0, l, 0, "")

    }

    return Math.min(...res)

};