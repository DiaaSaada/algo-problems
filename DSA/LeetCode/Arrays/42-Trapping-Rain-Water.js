// HARD

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {


    const maxLeft = []
    const maxRight = []

    let temp = 0
    for (let a of height) {
        maxLeft.push(temp)
        temp = Math.max(a, temp)

    }

    temp = 0
    for (let i = height.length - 1; i >= 0; i--) {
        let a = height[i]
        maxRight[i] = temp
        temp = Math.max(a, temp)

    }

    let sum = 0

    let traped;
    for (let i = 0; i < height.length; i++) {

        traped = Math.min(maxLeft[i], maxRight[i]) - height[i];

        sum += Math.max(0, traped)


    }

    return sum





};