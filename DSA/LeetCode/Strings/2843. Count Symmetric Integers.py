class Solution:
    def countSymmetricIntegers(self, low: int, high: int) -> int:

        res = 0
        val = max( low, 11 ) # first Symmetric Integer is 11
        memo = {}
        while val <= high:
            s = f"{val}"
            l = len(s)
            if l % 2 == 1:
                val +=1
                continue
            sum1, sum2 = 0, 0
            n =  int(l / 2)
             
            if s[:n] not in memo:
                memo[s[:n]] = sum( int(c) for c in s[:n]  )
            
            sum1 = memo[s[:n]]


            sum2 = sum(int(c) for c in s[n:])
            if sum1 == sum2:
                res +=1
            val +=1
        return res
            
                
