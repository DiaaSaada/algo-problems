/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {

    let map1 = new Map()
    for (let w of s1.split(" ")) {
        map1.set(w, (map1.get(w) ?? 0) + 1);
    }


    for (let w of s2.split(" ")) {
        map1.set(w, (map1.get(w) ?? 0) + 1);
    }

    const uncommon = []
    for (let [word, value] of map1) {
        if (value == 1)
            uncommon.push(word)
    }

    return uncommon

};