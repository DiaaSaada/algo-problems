/**
 * @param {number} n
 * @return {number}
 */
var checkRecord = function (n) {

    const modulus = 1000000007
    const cache = new Map();
    function backtracking(absentCount, lateCount, currentArr) {

        if (x = cache.get(`${absentCount}-${lateCount}-${currentArr}`) ?? false) {
            return x;
        }

        if (absentCount >= 2 || lateCount >= 3) {
            return 0
        }


        if (currentArr == n) {
            return 1
        }

        const res = (((backtracking(absentCount + 1, 0, currentArr + 1) + // A
            backtracking(absentCount, lateCount + 1, currentArr + 1)) % modulus) +// L
            backtracking(absentCount, 0, currentArr + 1)) % modulus;// P

        cache.set(`${absentCount}-${lateCount}-${currentArr}`, res)
        /// console.log( cache)
        return res;

    }



    return (((backtracking(1, 0, 1) + // ['A']
        backtracking(0, 1, 1)) % modulus) + // ['L']
        backtracking(0, 0, 1)) % modulus; // ['P']



};