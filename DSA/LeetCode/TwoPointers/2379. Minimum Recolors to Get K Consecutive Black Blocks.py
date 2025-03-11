class Solution:
    def minimumRecolors(self, blocks: str, k: int) -> int:

        """ Input: blocks = "WBBWWBBWBW", k = 7
            Output: 3   """
        wCount = 0
        for i in range(k):
            if blocks[i] == "W":
               wCount +=1

 
        left  =  1
        right = k

        min_ = wCount
        while right < len(blocks):
            if blocks[left-1] == 'W':
                wCount -= 1
            if blocks[right] == 'W':
                wCount += 1
            min_ = min ( min_,wCount )
            left +=1
            right +=1

            
        return min_

