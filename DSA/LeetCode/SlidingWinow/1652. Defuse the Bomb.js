// 1652. Defuse the Bomb

/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function (code, k) {

    let res = new Array(code.length).fill(0);
    if (k === 0)
        return res

    let sum = 0;
    let left = 0


    let key = k
    if (k < 0) {
        code.reverse()
        k *= -1
    }

    for (let r = 0; r < code.length + k; r++) { //r < 7
        sum += code[r % code.length]
        if (r >= k) {
            sum -= code[left]
            res[r - k] = sum
            left++
        }
    }

    return key > 0 ? res : res.reverse()
};