class Solution:
    def checkPowersOfThree(self, n: int) -> bool:
        
        i = 0
        res=  []
        i_power_3 = 0 
        while i_power_3 <= n:
            i_power_3 =  3**i
            if i_power_3 <= n:
                res.append(i_power_3)
                i += 1
 

        for i_power_3  in reversed(res):
            if i_power_3 <= n:
                n -= i_power_3
       


        return n == 0