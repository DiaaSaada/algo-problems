class Solution:
    def chalkReplacer(self, chalk: List[int], k: int) -> int:
        
        chalkSum = sum(chalk)
        if chalkSum < k:
            k =  k%chalkSum
        i = 0

        while chalk[i] <= k:
            k -= chalk[i]
            i +=1
            i = i % len(chalk)
        
        return i
        
        