/**
 * 36. Valid Sudoku
 * Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
 *
 * Each row must contain the digits 1-9 without repetition.
 * Each column must contain the digits 1-9 without repetition.
 * Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
 * Note:
 *
 * A Sudoku board (partially filled) could be valid but is not necessarily solvable.
 * Only the filled cells need to be validated according to the mentioned rules.
 */

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    const map = new Map()

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let num = board[i][j];
            if (!isNaN(num)) {

                // Rows
                if (map.has(`R${i}-${num}`)) {
                    return false;
                } else {
                    map.set(`R${i}-${num}`, true)
                }

                // check columns
                if (map.has(`C${j}-${num}`)) {
                    return false;
                } else {
                    map.set(`C${j}-${num}`, true)
                }

                // check blocks
                let x = Math.floor(i / 3);
                let y = Math.floor(j / 3);
                if (map.has(`B${x}-${y}-${num}`)) {
                    return false;
                } else {
                    map.set(`B${x}-${y}-${num}`, true)
                }
            }
        }
    }
    return true;
};