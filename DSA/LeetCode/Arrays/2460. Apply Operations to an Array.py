from typing import List


class Solution:
    def applyOperations(self, nums: List[int]) -> List[int]:
        res = []
        L =  len(nums)
        for i in range(L):
            if nums[i] == 0:
                continue
            if i < L-1 and nums[i] == nums[i + 1]:
                nums[i] *= 2
                nums[i + 1] = 0
            res.append(nums[i])
        
        res.extend( [0] * (L-len(res)))
        return res
