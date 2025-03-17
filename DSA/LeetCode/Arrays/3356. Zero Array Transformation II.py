class Solution:
    def minZeroArray(self, nums: List[int], queries: List[List[int]]) -> int:
         
         
        n = len(nums)
        diff = [0] * (n + 1)  # Difference Array
        
        # Applying queries
        for L, R, X in queries:
            diff[L] += X
            if R + 1 < n:
                diff[R + 1] -= X
        
        # Compute final array using prefix sum
        nums[0] = diff[0]
        for i in range(1, n):
            nums[i] = nums[i-1] + diff[i]
        
        return nums