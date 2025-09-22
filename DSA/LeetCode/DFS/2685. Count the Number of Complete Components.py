from collections import defaultdict
from typing import List


class Solution:

    """
    Input: n = 6, edges = [[0,1],[0,2],[1,2],[3,4]]
    Output: 3
    """
    def countCompleteComponents(self, n: int, edges: List[List[int]]) -> int:
        
        dict = {}

        for [v1,v2]  in edges:
            v1set = set([])
            if v1 in dict:
                v1set = dict[v1]
            v1set.add( v2)
            dict[v1] = v1set
            v2set = set([])
            if v2 in dict:
                v2set = dict[v2]
            v2set.add( v1)
            dict[v2] = v2set

        print( dict )

        def isComplete(comp: set):
            for i in comp:
                if len(dict[i]) != len(comp)-1:
                    return False
            return True
        

        counter = 0
        def dfs(node, comp):
            comp.add(node)
            if node in visited:
                return 
            visited[node] = 1
             
            for v in dict[node]:
                dfs(v, comp )
            return comp

        visited = defaultdict(int)
        for i in range(n):
            if i not in dict:
                counter +=1 #not connected
            elif i not in visited:  # new compenent
                
                comp = dfs(i, {i})
                print( comp)
                if isComplete(comp):
                    counter +=1
                
        print("counter",  counter)
                

Solution().countCompleteComponents(6, [[0,1],[0,2],[1,2],[3,4]])
print( "should be 3")
Solution().countCompleteComponents(6, [[0,1],[0,2],[1,2],[3,4],[3,5]])
print( "should be 1")