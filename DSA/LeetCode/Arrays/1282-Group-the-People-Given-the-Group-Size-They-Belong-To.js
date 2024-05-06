/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function (groupSizes) {

    const map = new Map();
    const res = [];
    for (let i = 0; i < groupSizes.length; i++) {
        let gs = groupSizes[i];
        if (map.has(gs)) {
            map.set(gs, [...map.get(gs), i]);

        } else {
            map.set(gs, [i]);
        }
        if (map.get(gs).length === gs) {
            res.push(map.get(gs));
            map.set(gs, []);
        }
    }
    return res;
};