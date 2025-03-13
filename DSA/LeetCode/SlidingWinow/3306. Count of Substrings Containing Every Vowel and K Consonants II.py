from collections import defaultdict


class Solution:
    def countOfSubstrings(self, word: str, k: int) -> int:
        vowls=  "aeiou"

        def atleast_k(C):

            v_count =  defaultdict(int)
             

            c_count =  0
            left  =  0 
            
            res = 0 
            for right in range( len(word) ):
                if word[right] in vowls:
                    v_count[word[right]] +=1
                else:
                    c_count += 1

                while len(v_count) == 5 and c_count >= C:
                    res = res + len(v_count) + right

                    if word[left] in vowls:
                        v_count[word[left]] -=1
                    else:
                        c_count -= 1
                    if v_count[word[left]] == 0:
                        v_count.pop(word[left])
                    left += 1
                

            return res
            



        return atleast_k(k) -  atleast_k(k+1)