from typing import List


class Solution:
    def findMinArrowShots(self, points: List[List[int]]) -> int:
        
        
        points.sort(key=lambda x: x[0])
        last = points[0]
        arrows = 0 
        for i in range(1, len(points)):
            ballon = points[i]
            if ballon[0] <= last[1]:
                last[0]= max(last[0], ballon[0] )
                last[1]= min(last[1], ballon[1] )
            else:
                arrows +=1
                last = ballon
        arrows += 1 # add 1 for the last range
        return arrows