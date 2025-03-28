from typing import List


class Solution:
    def maxPoints(self, grid: List[List[int]], queries: List[int]) -> List[int]:

        def bfs(r, c, q, visited, q_index2):
            if r < 0 or c < 0 or r >= len(grid) or c >= len(grid[0]):
                return
            if (r,c) in visited:
                return
            if grid[r][c] >= q:
                return
            visited[(r,c)] = 1
            print((r,c) , "visted for ", q,   q_index2)
            answer[q_index2] += 1
            bfs(r + 1, c, q, visited, q_index2)
            bfs(r - 1, c, q, visited, q_index2)
            bfs(r, c + 1, q, visited, q_index2)
            bfs(r, c - 1, q, visited, q_index2)




        answer = [0]* len(queries)
        for q_index, q_value in enumerate(queries):
             print( "SCAN for ", q_index, q_value)
             bfs(0, 0, q_value, {}, q_index)



        return answer


