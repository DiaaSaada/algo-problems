class Solution:
    def numberOfPowerfulInt(self, start: int, finish: int, limit: int, s: str) -> int:
        
        num = int(s)
        factor = 10 * len(s)
        
        """
        Input: start = 15, finish = 215, limit = 6, s = "10"
Output: 2
Explanation: The powerful integers in the range [15..215] are 110 and 210. All these integers have each digit <= 6, and "10" as a suffix."""

        i = 0
        count  = 0
        def check( n ):
            x = f"{n}"
            for c in x:
                if int(c) > limit:
                    return False
            print(x)
            return True
        val  = max(  start , i*10*factor + num ) 
        while i*factor + num  <= finish:
            
            
            if check(i*factor + num):
                count +=1
            i +=1
        
        
        
        return count
            
            
            
    