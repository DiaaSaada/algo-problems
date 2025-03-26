from typing import List


class Solution:
    def minOperations(self, grid: List[List[int]], x: int) -> int:

        ## Flatten teh grid
        flat =  []
        for r in grid:
            for c in r:
                flat.append(c)

        ## Sort the grid
        flat.sort()

        mid = flat[len(flat)//2]

        ## Calculate the number of operations
        operations = 0
        for i in range(len(flat)):
            if abs(flat[i] - mid) % x != 0:
                return -1
            operations += abs(flat[i] - mid) // x


        return operations




