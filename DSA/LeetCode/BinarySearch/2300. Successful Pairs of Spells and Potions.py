import math
from typing import List


class Solution:
    def successfulPairs(self, spells: List[int], potions: List[int], success: int) -> List[int]:

            potions.sort()
            res =  [0]*len(spells)

            def binarySearch(potions , spell):
                l =0
                r = len(potions)-1 
                while l <= r:
                    c =   (l+r)//2 
                    print ( "-----------", l, r, c)
                    if potions[c]* spell >= success and (c== 0 or potions[c-1]* spell < success):
                        return c
                    elif potions[c]* spell < success:
                        l = c+1
                    else:
                        r = c-1
                        

                return 0
            
            for s,spell in enumerate(spells):
                index = binarySearch(potions , spell)
                print(s,spell, index )
                res[s] = len(potions)- index
                         

            
                        

            return res


print( Solution().successfulPairs([5,1,3], [1,2,3,4,5], 7))