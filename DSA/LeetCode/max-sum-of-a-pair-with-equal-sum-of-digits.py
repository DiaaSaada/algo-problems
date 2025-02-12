"""Input: nums = [18,43,36,13,7]
Output: 54
#Explanation: The pairs (i, j) that satisfy the conditions are:
#- (0, 2), both numbers have a sum of digits equal to 9, and their sum is 18 + 36 = 54.
#- (1, 4), both numbers have a sum of digits equal to 7, and their sum is 43 + 7 = 50.
#So the maximum sum that we can obtain is 54."""


class Solution:
    def maximumSum(self, nums: List[int]) -> int:
        max_val = -1
        map = {}

        for n in nums:
            
            sum_digits = sum(int(digit) for digit in str(n))     
            
            
            if sum_digits in map:
                map[sum_digits].append( -1*n)
            else:
                map[sum_digits] = [-1*n]

         

        for sum_val, pairs in map.items():
            if len(pairs) >= 2:
                heapq.heapify(pairs)            
                n1 = -1 * heapq.heappop(pairs) 
                n2 = -1 * heapq.heappop(pairs) 
                 
                max_val = max( max_val , n1+n2 )
            

        return max_val
