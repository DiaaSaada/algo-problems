# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    
    max_ = 0
    res = 1
    def maxLevelSum(self, root: Optional[TreeNode]) -> int:
        levels = defaultdict(int)
        self.max_ = root.val
        self.res = 1
        def trev(node, level):
            if not node:
                return 0
            levels[level] +=   node.val
            trev(node.left, level+1)
            trev(node.right, level+1)
        trev(root, 1)
        
        
        for level, value in sorted(levels.items()):
            #print(level, value)
            if value > self.max_:
                    self.max_ = value
                    self.res = level


        return self.res
        
#----------------------------Using list instead of dict ----------------------------------------

class Solution:
    max_ = 0
    res = 1

    def maxLevelSum(self, root: Optional[TreeNode]) -> int:
        levels = []
        self.max_ = root.val
        self.res = 1

        def trev(node, level):
            if not node:
                return
            if len(levels) < level:
                levels.append(0)
            levels[level - 1] += node.val
            trev(node.left, level + 1)
            trev(node.right, level + 1)

        trev(root, 1)

        for i, value in enumerate(levels):
            if value > self.max_:
                self.max_ = value
                self.res = i + 1

        return self.res
