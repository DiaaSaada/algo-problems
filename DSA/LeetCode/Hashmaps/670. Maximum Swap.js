/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function (num) {


    let digits = `${num}`.split("")
    let map = new Map()
    for (let i = digits.length - 1; i >= 0; i--) {
        if (!map.has(digits[i])) {
            map.set(digits[i], i)
        }
    }

    let found = false

    for (let i = 0; i < digits.length; i++) {

        if (found)
            break;
        let find = +digits[i] + 1

        for (let j = 9; j >= find; j--) {

            if (map.has(`${j}`) && i < map.get(`${j}`)) {

                let temp = digits[i]
                digits[i] = j
                digits[map.get(`${j}`)] = temp
                found = true

                break;
            }
        }
    }


    return +digits.join("")

};