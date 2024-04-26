/**
 * @param {number[][]} grid
 * @return {number}
 */
var minFallingPathSum = function (grid) {

    const cache = new Map()



    function helper(r, l) {



        if (r == grid.length - 1) {

            return grid[r][l]
        }

        if (cache.has(`${r}-${l}`)) {
            return cache.get(`${r}-${l}`)
        }


        const res = [];
        let min = Infinity
        for (let i = 0; i < grid.length; i++) {
            if (i != l) {
                let k = grid[r][l] + helper(r + 1, i)
                min = Math.min(min, k);
                cache.set(`${r}-${l}`, min);

            }
        }
        return min
    }


    const res2 = grid.map((_, l) => helper(0, l));


    return Math.min(...res2)

};