from math import ceil
from typing import List


class Solution:
    def shipWithinDays(self, weights: List[int], days: int) -> int:
        mnW =  min(weights)
        mxW =  max(weights)
        n = len(weights)
        mnCapapacity = ceil( mnW * n  // days) #2
        mxCapapacity = ceil( mxW * n  // days )#20
        res = mxCapapacity
        print(f"mnW {mnW} mxW:{mxW} mnCapapacity:{mnCapapacity} mxCapapacity:{mxCapapacity}")
        while mnCapapacity <= mxCapapacity:
            midCapacity =  (mnCapapacity + mxCapapacity) //2 #11
            midCapacity =  max( mxW , midCapacity )
            load = 0 
            neededDays = 1 
            for w in weights:
                if load + w <= midCapacity:
                    load+= w
                else:
                    load = w
                    neededDays+=1
                print(midCapacity , load, w ,  neededDays )
                     
            if neededDays >  days:
                mnCapapacity = midCapacity+1
            else:
                mxCapapacity = midCapacity-1
                res=  min( res ,midCapacity )
        return res

            

