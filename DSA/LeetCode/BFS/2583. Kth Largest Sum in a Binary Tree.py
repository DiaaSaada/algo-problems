# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def kthLargestLevelSum(self, root: Optional[TreeNode], k: int) -> int:

        temp = []

        def bfs(node, l):
            if  node is None:
                return -1

            if len(temp) > l:
                temp[l] += node.val
            else:
                temp.append( node.val ) 

            bfs(node.left, l + 1)
            bfs(node.right, l + 1)

        bfs(root, 0)
        temp.sort(reverse=True)
        
        return temp[k - 1] if len(temp) >= k else -1
