// Solution #1 gives TimesOut
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair = function (nums, k) {


    const res = [];

    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {

            res.push(Math.abs(nums[i] - nums[j]))
        }
    }
    res.sort((a, b) => a - b)


    return res[k - 1]

};
//--------------------------------------------------------------

// Solution #2  still gives TimesOut
var smallestDistancePair = function (nums, k) {


    const numbersQueue = new MinPriorityQueue();

    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {

            numbersQueue.enqueue(Math.abs(nums[i] - nums[j]))
        }
    }
    let res
    while (k > 0) {
        res = numbersQueue.dequeue().priority

        k--
    }

    return res

};

//---------------------------------------------------------------------------------
