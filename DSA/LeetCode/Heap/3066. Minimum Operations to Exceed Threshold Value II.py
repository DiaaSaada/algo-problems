class Solution:
    def minOperations(self, nums: List[int], k: int) -> int:
         
        heapq.heapify(nums)
        ops = 0 
         
         
        while nums[0] < k:
            
            ops += 1
            x  =  heapq.heappop(nums)
            y  =  heapq.heappop(nums)
            n = min(x, y) * 2 + max(x, y)
            heapq.heappush(nums, n)
        return ops
            
        