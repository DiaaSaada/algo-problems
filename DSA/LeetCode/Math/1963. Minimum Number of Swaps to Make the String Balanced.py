class Solution:
    def minSwaps(self, s: str) -> int:
        o = 0
        c = 0
    
        for char in s:

            if char == "]":
                if o > 0:
                    o = o-1
                else:
                    c += 1
            elif char == "[":
                o +=1    
    
        return math.ceil(c / 2)