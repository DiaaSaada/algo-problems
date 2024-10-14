import math
class Solution(object):
    def maxKelements(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """
        pq = [] 
        for a in nums:
            heappush(pq, -a)

        heapq.heapify(pq)
        score = 0 

        while k > 0:
            n = -1*heappop(pq)             
            score += n            
            heappush(pq, -math.ceil(n / 3.00))
            k -=1
            
        return int(score)