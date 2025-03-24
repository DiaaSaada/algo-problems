from typing import List


class Solution:
    def countDays(self, days: int, meetings: List[List[int]]) -> int:
        

        meetings.sort(key=lambda item: item[0])
         
        
        merged = [meetings[0]]
        for i in range(1, len(meetings)):
            [s,e] =  meetings[i]
            [lastS, lastE]  =  merged[-1]            
            if s <= lastE:
                merged.pop()
                merged.append([ lastS , max(lastE, e)])
            else:
                merged.append(meetings[i])

        # free days at the beginning of meetings list
        freeDays =  merged[0][0] - 1
        for i in range( 1, len( merged )):
            freeDays += max( 0 , min(merged[i][0], days) - merged[i-1][1] -1  ) 

        # free days at the end of meetings list
        freeDays += max( 0 , days - merged[-1][1])

        return freeDays


        