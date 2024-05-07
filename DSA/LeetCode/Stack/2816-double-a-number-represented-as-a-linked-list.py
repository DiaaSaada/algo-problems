# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def doubleIt(self, head):
        """
        :type head: Optional[ListNode]
        :rtype: Optional[ListNode]
        """
        stack = []

        curr = head
        while curr:
            stack.append(curr)
            curr = curr.next
        

        acc = 0
        while  stack: 
             node = stack.pop()
             val = (node.val * 2) + acc
             acc, node.val =  divmod(val , 10)
            
        return ListNode(acc, head) if acc > 0 else head
        # return (acc > 0) ? new ListNode(acc, head) : head
        