# Definition for singly-linked list.
class ListNode:
     def __init__(self, val=0, next=None):
         self.val = val
         self.next = next
from typing import Optional

# time O(n), space O(n)

class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if head is None:
            return None
            
        stack = []
        curr = head
         
        while curr:
             
            stack.append(curr.val)
            curr = curr.next
         
         
        root = ListNode(stack.pop())
        curr = root
        while len(stack):
            
            curr.next = ListNode(stack.pop())
            curr = curr.next
        return root


        