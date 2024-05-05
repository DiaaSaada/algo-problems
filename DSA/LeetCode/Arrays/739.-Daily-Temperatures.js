/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {

    const res = new Array(temperatures.length).fill(0)
    for (i = temperatures.length - 2; i >= 0; i--) {

        let back = 1
        while (i + back < temperatures.length) {
            if (temperatures[i + back] <= temperatures[i]) {
                if (res[i + back] == 0) {
                    res[i] = 0
                    break;
                }
                back += res[i + back]

            } else {
                res[i] = back

                break;
            }
        }
    }
    return res

};