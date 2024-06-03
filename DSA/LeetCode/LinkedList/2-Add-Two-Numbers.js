/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let c1 = l1
    let c2 = l2
    let caryOn = 0

    let resArr = []
    while (c1 || c2) {
        let v1 = c1?.val ?? 0
        let v2 = c2?.val ?? 0
        let v = v1 + v2 + caryOn

        resArr.push(v % 10)

        caryOn = Math.floor(v / 10)

        c1 = c1?.next;
        c2 = c2?.next
    }
    if (caryOn > 0)
        resArr[resArr.length] = caryOn

    function rec(i) {
        if (i == resArr.length - 1) {
            return new ListNode(resArr[i], null)
        } else {
            return new ListNode(resArr[i], rec(i + 1))
        }


    }
    let res = rec(0);

    return res
};