class Solution:
    def pivotArray(self, nums: List[int], pivot: int) -> List[int]:

        less = []
        bigger = []
        count = 0 
        for n in nums:
            if n < pivot:
                less.append(n)
            elif n > pivot:
                bigger.append(n)
            else:
                count +=1

        return less + [pivot]*count + bigger
