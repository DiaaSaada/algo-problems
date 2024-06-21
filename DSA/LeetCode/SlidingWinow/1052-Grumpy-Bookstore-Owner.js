/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function (customers, grumpy, minutes) {
    let totalSatisfied = 0;
    let additionalSatisfied = 0;
    let maxAdditionalSatisfied = 0;

    for (let i = 0; i < customers.length; i++) {
        if (grumpy[i] == 0) {
            totalSatisfied += customers[i];
        }
    }

    for (let i = 0; i < minutes; i++) {
        additionalSatisfied += grumpy[i] ? customers[i] : 0;
    }

    maxAdditionalSatisfied = additionalSatisfied;

    for (let i = minutes; i < customers.length; i++) {
        additionalSatisfied += grumpy[i] ? customers[i] : 0;
        additionalSatisfied -= grumpy[i - minutes] ? customers[i - minutes] : 0;
        maxAdditionalSatisfied = Math.max(maxAdditionalSatisfied, additionalSatisfied);
    }

    return totalSatisfied + maxAdditionalSatisfied;
};
