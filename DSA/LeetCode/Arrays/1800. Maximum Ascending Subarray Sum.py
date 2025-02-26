class Solution:
    def maxAscendingSum(self, nums: List[int]) -> int:
        
        max_ = float('-inf')
        sum_ = 0
        for i in range(len(nums)):
            num = nums[i]
            if num <= nums[i-1]:
                max_ = max(  max_ , sum_)
                sum_ = num
            else:
                sum_ += num
        max_ = max(  max_ , sum_)
         

        return max_

        