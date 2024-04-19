/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {

    const visited = new Map()
    let islands = 0

    function dfs(i, j) {
        if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || visited.has(`${i}-${j}`) || grid[i][j] == '0') { // land
            return
        }
        visited.set(`${i}-${j}`, true)
        dfs(i + 1, j)
        dfs(i, j + 1)
        dfs(i, j - 1)
        dfs(i - 1, j)
    }

    for (let r = 0; r < grid.length; r++) {
        for (let l = 0; l < grid[0].length; l++) {
            if (!visited.has(`${r}-${l}`) && grid[r][l] == '1') { // land

                islands++;
                dfs(r, l)


            }
        }
    }
    return islands
};