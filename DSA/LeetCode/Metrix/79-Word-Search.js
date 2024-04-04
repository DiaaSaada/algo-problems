/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {

    let path = new Map()

    function rec(r, l, ci) {

        let c = word.charAt(ci)

        if (r < 0 || l < 0 || r >= board.length || l >= board[0].length) {
            return false
        }

        if (board[r][l] != c) {
            return false
        }

        if (path.has(`${r}-${l}`)) {
            return false
        }


        if (ci === word.length - 1) return true

        path.set(`${r}-${l}`, true)
        let res = rec(r, l + 1, ci + 1) || rec(r - 1, l, ci + 1) || rec(r + 1, l, ci + 1) || rec(r, l - 1, ci + 1)
        path.delete(`${r}-${l}`)
        return res
    }

    let WordCharIndex = 0
    for (let r = 0; r < board.length; r++)
        for (let l = 0; l < board[0].length; l++)
            if (rec(r, l, WordCharIndex))
                return true;
    return false;


};