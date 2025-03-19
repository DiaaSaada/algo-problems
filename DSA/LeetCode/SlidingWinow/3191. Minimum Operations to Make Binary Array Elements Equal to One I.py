from typing import List


class Solution:
    def minOperations(self, nums: List[int]) -> int:

        op  = 0

        for r in range(2, len(nums)):
            if nums[r-2] == 0:
                nums[r-2] = 1
                nums[r-1] = 1 - nums[r-1] 
                nums[r] = 1 - nums[r] 
                op +=1
        if (nums[-1] + nums[-2] +nums[-3]) == 3:
            return op
        return -1
        