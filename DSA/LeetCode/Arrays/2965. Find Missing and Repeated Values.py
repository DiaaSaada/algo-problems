class Solution:
    def findMissingAndRepeatedValues(self, grid: List[List[int]]) -> List[int]:

        n = len(grid)
        map_ = {}
        a = None
        sum_all = (n*n)*((n*n) +1)//2  # sum all elements from 1 to n
        for r in range(n):
            for c in range(n):
                
                if grid[r][c] in map_:
                    a = grid[r][c]
                else:
                    sum_all -= grid[r][c]
                map_[grid[r][c]] =  True

 

        return [a,sum_all]
        
