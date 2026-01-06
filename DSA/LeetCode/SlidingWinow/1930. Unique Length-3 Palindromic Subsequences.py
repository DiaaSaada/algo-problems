class Solution:
    def countPalindromicSubsequence(self, s: str) -> int:

        unique = set()
        mostRight = {}
        mostLeft = {}
        for i in range(len(s)):
            mostRight[s[i]] =  i
            if s[i] not in mostLeft:
                mostLeft[s[i]] =  i

        r = 0
        for i in range(1,len(s)-1):
            for char, index in mostLeft.items():

                if index< i and mostRight[char]>i:
                    unique.add(f"{char}{s[i]}{char}"])
         
        return len(unique)

        