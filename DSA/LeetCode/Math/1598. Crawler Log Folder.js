/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function (logs) {

    let steps = 0

    for (log of logs) {
        if (log == "../") {
            steps -= 1
        }
    }

};