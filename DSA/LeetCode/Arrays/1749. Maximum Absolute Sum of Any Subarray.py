from typing import List


class Solution:
    def maxAbsoluteSum(self, nums: List[int]) -> int:

        max_end_here = float('-inf')
        max_so_far = float('-inf')

        min_end_here = float('inf')
        min_so_far = float('inf')


        for n in nums:
            max_end_here = max(n, max_end_here + n)
            max_so_far = max(max_so_far, max_end_here)

            min_end_here = min(n, min_end_here + n)
            min_so_far = min(min_so_far, min_end_here)

        return max( abs(max_so_far) ,  abs(min_so_far))

#print([1, -3, 2, 3, -4], 5, Solution().maxAbsoluteSum([1, -3, 2, 3, -4]))
print([-7,-1,0,-2,1,3,8,-2,-6,-1,-10,-6,-6,8,-4,-9,-4,1,4,-9], 44, Solution().maxAbsoluteSum([-7,-1,0,-2,1,3,8,-2,-6,-1,-10,-6,-6,8,-4,-9,-4,1,4,-9]))