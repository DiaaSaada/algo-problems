/**
 * @param {string[]} words
 * @param {character[]} letters
 * @param {number[]} score
 * @return {number}
 */
var maxScoreWords = function (words, letters, score) {

    result = []
    scored = []


    let score = 0
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < set[i].length; j++) {

            score += set[i].charCodeAt(j)

        }

    }
    return 0


    for (let i = 0; i < 2 ** arr.length; i++) {

        const rep = (i >>> 0).toString(2).padStart(arr.length, '0').split('');
        const temp = []
        for (let j = 0; j < rep.length; j++) {
            if (rep[j] == 1) {
                temp.push(words[j])
            }

        }

        result.push(temp)

    }
    return result;

};


