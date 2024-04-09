/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function (tickets, k) {

    let sum = 0;
    for (let i = 0; i < tickets.length; i++) {
        if (i <= k) {
            sum += Math.min(tickets[k], tickets[i]);
        } else {
            sum += Math.min(tickets[k] - 1, tickets[i]);
        }
    }

    return sum;

};