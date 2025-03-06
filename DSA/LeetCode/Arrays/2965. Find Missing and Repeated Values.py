class Solution:
    def findMissingAndRepeatedValues(self, grid: List[List[int]]) -> List[int]:

        n = len(grid)
        map_ = {}
        a = None
        
        for r in range(n):
            for c in range(n):
                if grid[r][c] in map_:
                    a = grid[r][c]
                map_[grid[r][c]] =  True

        b = None
        for i in range(1, n*n+1):
            if i not in map_:
                b = i
                return [a,b]

        return [a,b]
        
