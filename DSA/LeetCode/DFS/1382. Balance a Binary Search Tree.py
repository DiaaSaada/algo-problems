# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def balanceBST(self, root: TreeNode) -> TreeNode:

       
        def dfs(node):
            if not node:
                return []
            return dfs(node.left) + [node.val] + dfs(node.right)

        res = dfs(root)

        def rec(start, end):
            if start > end:
                return None
            mid = (start + end) // 2
            return TreeNode(
                res[mid],
                rec(start, mid - 1),
                rec(mid + 1, end)
            )

        return rec(0, len(res) - 1)
        