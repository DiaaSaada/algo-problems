/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (scores) {

    const sorteScores = scores.toSorted((a, b) => b - a);
    const placesMap = new Map()
    for (i = 0; i < sorteScores.length; i++) {
        placesMap.set(sorteScores[i], i + 1)
    }
    const places = {
        '1': "Gold Medal",
        '2': "Silver Medal",
        '3': "Bronze Medal",
    }

    const res = [];
    for (let score of scores) {
        let place = placesMap.get(score)
        res.push(places[`${place}`] ?? `${place}`)
    }

    return res;
};