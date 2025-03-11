""""
Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
Output: 1

Input: intervals = [[1,2],[1,2],[1,2]]
Output: 2
"""
from typing import List


class Solution:
    def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:
        
        intervals.sort(key=lambda x: x[0])
 
        lastIntervalEnd =  intervals[0][1]
        count = 0 
        for i in range(1, len(intervals)):
            if intervals[i][0] >= lastIntervalEnd:
                lastIntervalEnd = intervals[i][1]

            elif  lastIntervalEnd > intervals[i][1]:
                lastIntervalEnd = intervals[i][1]
                count +=1

            else:
                count +=1
        return count

Solution().eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]])
Solution().eraseOverlapIntervals( [[1,2],[1,2],[1,2]])
Solution().eraseOverlapIntervals([[1,5],[2,5],[3,5],[4,5],[5,6]])