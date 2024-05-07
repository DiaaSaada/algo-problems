/**
 * Definition for singly-linked list.
 * public class ListNode {
 * int val;
 * ListNode next;
 * ListNode() {}
 * ListNode(int val) { this.val = val; }
 * ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode doubleIt(ListNode head) {

        Stack<ListNode> stack = new Stack<ListNode>();

        ListNode curr = head;
        while (curr != null) {
            stack.push(curr);
            curr = curr.next;
        }

        int acc = 0;
        while (!stack.isEmpty()) {
            ListNode node = stack.pop();
            int val = (node.val * 2) + acc;
            node.val = val % 10;
            acc = val / 10;
        }

        return (acc > 0) ? new ListNode(acc, head) : head;
    }
}