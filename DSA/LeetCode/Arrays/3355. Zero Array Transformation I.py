class Solution:
    def isZeroArray(self, nums: List[int], queries: List[List[int]]) -> bool:

        L = len(nums)
        diff = [0] * (L+1)
         

        for i, [l,r] in enumerate(queries):
            
            diff[l] -= 1
            diff[r + 1] += 1
                
        
        for i in range(1, L+1):
            diff[i] += diff[i-1]

        
  
        for i in range(L):
            nums[i] = nums[i] + diff[i]
            if nums[i]>0:
                return False
         
         
        return True
        