/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    if( head === null )
        return null

    if (head.next == null)
        return head

    let newList = null
    let curr = head
    let next;

    while( curr){
        next = curr.next
        curr.next =  newlist;
        curr = next

    }
    return newList






};