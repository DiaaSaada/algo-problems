/**
 * @param {number} limit
 * @param {number[][]} queries
 * @return {number[]}
 */
var queryResults = function (limit, queries) {

    const index2Color = new Map();
    const colorFreqMap = new Map()
    let res = []

    for (q of queries) {
        const [index, color] = q

        let oldColor = index2Color.get(index)
        let oldColorFreq = colorFreqMap.get(oldColor) ?? 0
        let newColorFreq = colorFreqMap.get(color) ?? 0
        if (!oldColor) {

            index2Color.set(index, color)
            colorFreqMap.set(color, newColorFreq + 1)
        } else if (oldColor != color) {


            if (oldColorFreq == 1) {
                colorFreqMap.delete(oldColor)
            } else {
                colorFreqMap.set(oldColor, oldColorFreq - 1)
            }

            index2Color.set(index, color)
            colorFreqMap.set(color, newColorFreq + 1)

        }

        res.push(colorFreqMap.size)



    }

    return res

};