from typing import List


class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        memo = {}
         
        def dp(index):
            if index <= 1:
                return 0

            if index in memo:
                return memo[index]

             
            cost1 = dp(index - 1) + cost[index - 1]
            cost2=  dp(index-2)  + cost[index-2]  
            memo[index] =  min( cost1 , cost2 )
            return memo[index]
        
        top = len(cost)
        return  dp(top )