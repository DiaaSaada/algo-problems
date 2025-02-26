class Solution:
    def longestMonotonicSubarray(self, nums: List[int]) -> int:
        
        max_ =0 
        if len(nums)==1:
            return 1
        left = 0
        right = 1
        while right <  len(nums):
             
            if nums[right] <= nums[right-1]:
                max_ = max(  max_ , right - left)
                left  =  right                
             
            right += 1
        max_ = max(  max_ , right - left)

        left,right = 0,1
         
        while right <  len(nums):
             
            if nums[right] >= nums[right-1]:
                max_ = max(  max_ , right - left)
                left  =  right                
             
            right += 1
        max_ = max(  max_ , right - left)
         

        return max_