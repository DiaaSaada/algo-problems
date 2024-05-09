/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
var maximumHappinessSum = function (happiness, k) {


    happiness.sort((a, b) => b - a)
    let decreaseby = 0;
    let sum = 0
    for (let i = 0; i < k; i++) {
        let child = happiness[i]
        sum += Math.max(0, child - decreaseby)
        decreaseby++
    }



    return sum

};