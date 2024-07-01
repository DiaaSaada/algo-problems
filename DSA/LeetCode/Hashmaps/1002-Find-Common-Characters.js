/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {

    const freqs = [];
    for (let word of words) {
        const freq = new Map();
        for (let char of word) {
            freq.set(char, 1 + (freq.get(char) ?? 0))
        }
        freqs.push(freq)
    }

    const baseFreq = freqs[0]
    for (let freq of freqs) {
        for (let [key, value] of baseFreq) {
            let x = freq.get(key) ?? 0
            if (x == 0) {
                baseFreq.delete(key)
            } else {
                baseFreq.set(key,
                    Math.min(freq.get(key), baseFreq.get(key))
                )
            }
        }
    }

    const res = []
    for (let [key, value] of baseFreq) {
        res.push(...Array(value).fill(key))
    }



    return res;

};