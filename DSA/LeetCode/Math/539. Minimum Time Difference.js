/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {

    const MINUTESIN24HOURS = 24 * 60
    const militaryTime = []
    for (a of timePoints) {
        let time = parseInt(a.substr(0, 2) + a.substr(3, 2))
        time = 60 * Math.floor(time / 100) + time % 100
        militaryTime.push(time)
    }
    militaryTime.sort((a, b) => a - b)

    let min = MINUTESIN24HOURS
    for (let i = 0; i < militaryTime.length; i++) {
        let diff = militaryTime[(i + 1) % militaryTime.length] - militaryTime[i];

        if (diff == 0)
            return 0
        if (diff < 0) {
            diff += MINUTESIN24HOURS
        }

        min = Math.min(min, diff)

    }

    return min

};