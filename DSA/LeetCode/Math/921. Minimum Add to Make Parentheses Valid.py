class Solution:
    def minAddToMakeValid(self, s: str) -> int:

        close=0 
        open=0
        

        for c in s:
            if c == "(":
                open +=1
            else:
                if open >0:
                    open -=1
                else:
                    close +=1

        return close +  open