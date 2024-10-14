/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxKelements = function (nums, k) {

    const q = new MaxPriorityQueue();
    for (let a of nums)
        q.enqueue(a)


    let score = 0
    while (k > 0) {
        let n = q.dequeue()?.element ?? 0

        score += n


        q.enqueue(Math.ceil(n / 3))
        k--
    }



    return score

};