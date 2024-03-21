/**
 * 118. Pascal's Triangle
 * Given an integer numRows, return the first numRows of Pascal's triangle.
 *
 * In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
 *
 * 
 *
 *
 *
 *
 * Example 1:
 *
 * Input: numRows = 5
 * Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
 * Example 2:
 *
 * Input: numRows = 1
 * Output: [[1]]
 *
 *
 * Constraints:
 *
 * 1 <= numRows <= 30
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {

    let res = [[1]];

    function getValue(r, l) {
        if (l == -1)
            return 0
        if (l > r)
            return 0
        else
            return res[r][l];
    }


    for (row = 1; row < numRows; row++) {
        let temp = [];
        for (col = 0; col <= row; col++) {
            temp.push(getValue(row - 1, col - 1) + getValue(row - 1, col));
        }
        res.push(temp)

    }

    return res




};

;