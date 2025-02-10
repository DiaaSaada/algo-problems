class Solution(object):
    def findMinDifference(self, timePoints):
        """
        :type timePoints: List[str]
        :rtype: int
        """
        MINUTES_IN_24_HOURS = 24 * 60
        militaryTime = []

        
        for time in timePoints:
            hours = int(time[:2])
            minutes = int(time[3:])
            totalMinutes = hours * 60 + minutes
            militaryTime.append(totalMinutes)
        
        militaryTime.sort()
        

        min_diff = MINUTES_IN_24_HOURS

        
        for i in range(len(militaryTime)):
            diff = militaryTime[(i + 1) % len(militaryTime)] - militaryTime[i]

            if diff == 0:
               return 0
            
            
            if diff < 0:
                diff += MINUTES_IN_24_HOURS
            

            min_diff = min(min_diff, diff)
        

        return min_diff
    
        