/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function (nums, head) {

    const map = new Set(nums)

    let tempHead = new ListNode(0, head)

    let curr = tempHead

    while (curr) {
        if (map.has(curr.next?.val)) {
            curr.next = curr.next?.next
        } else {
            curr = curr.next
        }
    }

    return tempHead.next

};