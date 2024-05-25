/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (arr) {

    result = []
    for (let i = 0; i < 2 ** arr.length; i++) {

        const rep = (i >>> 0).toString(2).padStart(arr.length, '0').split('');
        const temp = []
        for (let j = 0; j < rep.length; j++) {
            if (rep[j] == 1) {
                temp.push(arr[j])
            }

        }
        result.push(temp)

    }
    return result;
};