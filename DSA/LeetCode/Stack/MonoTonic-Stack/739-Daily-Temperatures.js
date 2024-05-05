/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {

    const res = new Array(temperatures.length).fill(0)
    const monoTonicStack = []
    for (i = 0; i < temperatures.length; i++) {
        while (monoTonicStack.length > 0) {

            if (temperatures[i] > monoTonicStack[monoTonicStack.length - 1][0]) {
                const t = monoTonicStack.pop();
                res[t[1]] = i - t[1]
            } else {
                break;
            }
        }
        monoTonicStack.push([temperatures[i], i]);

    }
    return res
};