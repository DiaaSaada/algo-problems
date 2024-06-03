class Solution:
    def appendCharacters(self, s: str, t: str) -> int:
        sP = 0
        tP = 0

        while  sP < len(s) and tP <len(t):
            if s[sP] == t[tP]:
                tP +=1
            sP +=1
            
        if tP != len(t):
            return len(t) - tP
        
        return 0
        