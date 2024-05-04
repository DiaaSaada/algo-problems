/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {

    people.sort((a, b) => b - a);

    let left = 0
    let right = people.length - 1;
    let boats = 0
    while (left <= right) {
        if (people[left] == limit
            || people[left] + people[right] > limit) {

            left++
        } else {
            left++
            right--
        }
        boats++
    }

    return boats

};