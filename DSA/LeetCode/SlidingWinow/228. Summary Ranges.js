/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {

    if (!nums || nums.length == 0)
        return []

    const res = []
    let temp = []
    temp.push(nums[0]);
    for (i = 1; i < nums.length; i++) {
        if (nums[i] == nums[i - 1] + 1) {
            if (temp.length == 0)
                temp.push(nums[i]);
            else
                temp[1] = nums[i];
            console.log(temp);
        } else {
            res.push(temp.join("->"));
            temp = [nums[i]];

        }
    }
    res.push(temp.join("->"));
    return res

};