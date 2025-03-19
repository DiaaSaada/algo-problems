"""
Input: nums = [1,3,8,48,10]
Output: 3
Explanation: The longest nice subarray is [3,8,48]
"""
from typing import List


class Solution:
    def longestNiceSubarray(self, nums: List[int]) -> int:
        
        res  = 1 
        l,r = 0,1
        mask = nums[l]
        while r < len(nums) and l < r:
            if (mask & nums[r]) == 0:
                mask =  mask | nums[r]
                res =  max (r-l+1, res)
                r +=1
            else:
                l += 1
                r =  max( r , l+1 )
                mask =  nums[l]
                for i in range(l, r):
                    mask =  mask | nums[i] 
        return res
    
print ( Solution().longestNiceSubarray([1,3,8,48,10]), 3 )
print ( Solution().longestNiceSubarray([3,1,5,11,13]), 1 )
        
        
        
        