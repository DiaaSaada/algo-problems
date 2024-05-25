class Solution(object):
    def subsets(nums):
        result = []
        n = len(nums)
        
        for i in range(2 ** n):
            binary_rep = format(i, '0' + str(n) + 'b')
            temp = []
            for j in range(len(binary_rep)):
                if binary_rep[j] == '1':
                    temp.append(nums[j])
            result.append(temp)
        
        return result
