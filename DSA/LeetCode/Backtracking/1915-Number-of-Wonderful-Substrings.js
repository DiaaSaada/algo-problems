/**
 * @param {string} word
 * @return {number}
 */
var wonderfulSubstrings = function (word) {

    const LEN = word.length;

    let res = 0
    let oddsCount = 0
    let map = new Map()
    for (let i = 0; i < LEN; i++) {
        map.clear();
        oddsCount = 0
        for (let j = i; j < LEN; j++) {

            let char = word.charAt(j)

            let charOcur = (map.get(char) ?? 0) + 1

            map.set(char, charOcur)

            oddsCount += charOcur % 2 == 1 ? 1 : -1


            if (oddsCount <= 1) {
                res++
            }

        }
    }
    return res

};