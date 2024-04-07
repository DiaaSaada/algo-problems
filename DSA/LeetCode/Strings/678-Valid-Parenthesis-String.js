/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {

    const arr = s.split("");


    if (arr[0] === ")" || arr[arr.length - 1] === "(") {
        return false;
    }
    let [open, asterisk, close, needToClose] = [0, 0, 0, 0];
    for (let char of arr) {
        if (char === "(") {
            open++
            needToClose++
        } else if (char === ")") {
            close++

            if (open + asterisk < close)
                return false
            needToClose = needToClose > 0 ? needToClose - 1 : 0
        } else {
            asterisk++
            needToClose = needToClose > 0 ? needToClose - 1 : 0
        }
    }


    return needToClose <= 0


};