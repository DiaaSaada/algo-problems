class Solution(object):
    def maximumHappinessSum(self, happiness, k):
        """
        :type happiness: List[int]
        :type k: int
        :rtype: int
        """
        


        happiness.sort(reverse=True)
        decreaseby = 0
        sum = 0
        for i in range(k):
            child = happiness[i]
            sum +=  max(0, child - decreaseby)
            decreaseby += 1
        



        return sum

