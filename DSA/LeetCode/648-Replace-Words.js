/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function (dictionary, sentence) {

    const dic = new Map()
    for (root of dictionary) {
        dic.set(root, root);
    }
    const words = sentence.split(" ");

    let res = [];

    function shortest(word) {
        for (let i = 0; i < word.length; i++) {
            let root = dic.get(word.slice(0, i));
            if (root) {
                return root
            }
        }
        return word
    }

    for (let word of words) {
        res.push(shortest(word));
    }
    return res.join(" ")
};