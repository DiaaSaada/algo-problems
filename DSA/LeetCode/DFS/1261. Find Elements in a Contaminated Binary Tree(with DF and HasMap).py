# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from collections import deque

class FindElements:

    def __init__(self, root: Optional[TreeNode]):
        self.root = root
        curr = root
        curr.val = 0
        def dfs(curr):
            
            if not curr:
                return 
             
            if curr.left:
                curr.left.val =  2* curr.val+1
                
                dfs(curr.left)
            if curr.right:
                curr.right.val =  2* curr.val+2
              
                dfs(curr.right)

            
            
        dfs(curr)
         

    def find(self, target: int) -> bool:

        
  
        queue = deque([self.root])
        self.res = False
        def bfs():
            curr = queue.popleft()  
              
            if curr and curr.val == target:
                self.res = True
                return
            else:
                curr.left and queue.append(curr.left)
                curr.right and queue.append(curr.right)
            
            len(queue) and bfs()
        bfs()
        return self.res


# Your FindElements object will be instantiated and called as such:
# obj = FindElements(root)
# param_1 = obj.find(target)