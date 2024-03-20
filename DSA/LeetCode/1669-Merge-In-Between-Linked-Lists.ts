/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeInBetween(list1: ListNode | null, a: number, b: number, list2: ListNode | null): ListNode | null {

    let curr = list2;
    let lastNodeInList2 = list2;
    let list2Length = 0;
    while (curr) {
        lastNodeInList2 = curr;
        curr = curr.next;
        list2Length++;
    }

    curr = list1;
    let aNode = null;
    let bNode = null;
    let i = 0;
    while (i <= b) {
        if (i == a-1) {
            aNode = curr;
        }
        if (i == b) {
            bNode = curr;
        }
        curr = curr.next;
        i++;
    }
    lastNodeInList2.next = bNode.next;
    aNode.next = list2;

    return list1;
};