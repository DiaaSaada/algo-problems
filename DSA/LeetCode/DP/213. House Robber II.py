from typing import List

class Solution:
    def rob(self, nums: List[int]) -> int:
        if not nums:
            return 0
        n = len(nums)
        if n == 1:
            return nums[0]
        
         
        def dp(i, end, memo):
            if i >= end:
                return 0
            if i in memo:
                return memo[i]
            memo[i] = max(nums[i] + dp(i + 2, end, memo), dp(i + 1, end, memo))
            return memo[i]
        
        # Since the houses are in a circle, we have two scenarios:
        # 1. Rob houses from 0 to n-1 (excluding the last house)
        # 2. Rob houses from 1 to n (excluding the first house)
        return max(dp(0, n - 1, {}), dp(1, n, {}))

# Example usage:
# solution = Solution()
# print(solution.rob([2, 3, 2]))  # Output: 3
# print(solution.rob([1, 2, 3, 1]))  # Output: 4