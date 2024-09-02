/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {

    const stack = []
    let skip = false
    for (let a of asteroids) {
        skip = false
        while (stack.length > 0 && stack[stack.length - 1] > 0 && a < 0) {
            if (Math.abs(a) == stack[stack.length - 1]) {
                stack.pop()
                skip = true
                break
            } else if (Math.abs(a) > Math.abs(stack[stack.length - 1])) {
                stack.pop()

            } else {
                skip = true
                break
            }
        }
        if (!skip)
            stack.push(a)

    }
    return stack


};