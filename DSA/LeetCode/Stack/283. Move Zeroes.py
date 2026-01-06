class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        nums =
        [0,1,0,3,12]
        Output
        [1,0,3,12,0]
        Expected
        [1,3,12,0,0]
        """
        zeroIndexStack = []
        for i in range(len(nums)):
             
            if nums[i]==0:
                zeroIndexStack.append(i)
            elif len(zeroIndexStack)>0:
                firstZeroIndex =   zeroIndexStack.pop(0)
                
                nums[firstZeroIndex] = nums[i]
                nums[i] = 0 
                zeroIndexStack.append(i)
                
        