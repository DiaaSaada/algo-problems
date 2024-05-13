/**
 * @param {number[][]} grid
 * @return {number}
 */
var matrixScore = function (grid) {


    // flip the rows
    for (let r = 0; r < grid.length; r++) {

        if (grid[r][0] == 0) {
            for (let c = 0; c < grid[0].length; c++) {
                grid[r][c] = grid[r][c] == 0 ? 1 : 0

            }
        }

    }


    // flip the columns tarting from column 1 if less than half are not ones
    for (let c = 1; c < grid[0].length; c++) {

        let sumCol = 0;
        for (let r = 0; r < grid.length; r++) {
            sumCol += grid[r][c];
        }

        if (sumCol < Math.ceil(grid.length / 2)) {
            for (let r = 0; r < grid.length; r++) {
                grid[r][c] = grid[r][c] == 0 ? 1 : 0

            }
        }
    }
    // read each row, convert to int and add to sum

    const sum = grid.reduce((sum, row) => sum + parseInt(row.join(''), 2), 0);

    return sum;

};