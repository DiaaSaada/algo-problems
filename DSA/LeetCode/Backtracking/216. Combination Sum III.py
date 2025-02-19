class Solution:
    def combinationSum3(self, k: int, n: int) -> List[List[int]]:
        res = []
        def backtracking(i, nums):
            if i > 9 or len(nums) > k:
                return

            if sum(nums) == n and len(nums) == k:
                res.append( nums)
            
            else:
                for j in range(i+1,10):
                     
                    backtracking(j,  [*nums, j])
                

        for i in range(1,10+1-k):
            backtracking(i,  [i])
        return res

        