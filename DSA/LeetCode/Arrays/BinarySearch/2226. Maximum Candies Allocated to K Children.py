"""
Input: candies = [10,8,6], k = 3
Output: 5
"""
class Solution:
    def maximumCandies(self, candies: List[int], k: int) -> int:
        sum_  =  sum(candies)
        if sum_  < k:
            return 0
        
        if sum_  == k:
            return 1
        
        max_ = sum_ // k
        min_ = 1
        #print( { "sum_" :  sum_} )
        #print( { "max_" :  max_} )
        res =  0
        while min_ <= max_:
            mid =  (min_ +  max_) //2
            #print( { "mid" :  mid})
            piles = 0
            for n in candies:
                piles += n//mid
                if piles >= k:
                    break
            #print( { "piles" :  piles})  

            if piles >= k:
                res =  max( res , mid )
                min_ = mid +1
           
                
            else:
                max_ = mid-1
             
        
        
        return res
        

            
        

        