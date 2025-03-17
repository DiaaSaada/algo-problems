import math
from typing import List


class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:

        piles.sort(reverse =  True)
        minPile =  piles[-1]
        maxPile =  piles[0]
        n = len(piles)
        mnSpeed = math.ceil( n*minPile / h )
        mxSpeed = math.ceil ( n*maxPile / (h- h%n) )
 
        res = mxSpeed
         
        while mnSpeed <= mxSpeed:
            mid = (mnSpeed+mxSpeed) // 2
            neededHours = 0 
            for p in piles:
                neededHours += math.ceil (p/mid)
                if neededHours > h:
                    break
             
            if neededHours > h:
                mnSpeed = mid +1
            else:
                res =  min( res, mid )
                mxSpeed = mid -1
             
           
        return res

#print ( [3,6,7,11] , 8 , Solution().minEatingSpeed([3,6,7,11] , 8) ,  "should be" ,  4)
#print ( [30,11,23,4,20] , 5 , Solution().minEatingSpeed([30,11,23,4,20] , 5) ,  "should be" ,  30 )
#print ( [30,11,23,4,20] , 6 , Solution().minEatingSpeed([30,11,23,4,20] , 6) ,  "should be" ,  23)
        