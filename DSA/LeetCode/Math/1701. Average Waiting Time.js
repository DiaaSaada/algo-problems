/**
 * @param {number[][]} customers
 * @return {number}
 */
var averageWaitingTime = function (customers) {

  /**
   * Input: customers = [[1,2],[2,5],[4,3]]
   * 2 , 5, 3 = 10
   * 0, 1, 4
     Output: 5.00000
   */
  let sum = 0
  let startAt = 0
  for (let [r, t] of customers) {
    startAt = Math.max(startAt, r)
    sum += startAt - r + t
    startAt += t
  }
  return sum / customers.length
};