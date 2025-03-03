class Solution:
    def fib(self, n: int) -> int:
        memo = { 0 : 0 , 1:1}
        def rec(n):
            if n  in memo:
                return memo[n]
                
            
            memo[n] =  rec(n-1)+ rec(n-2)    
            return memo[n] 
        return   rec(n) 