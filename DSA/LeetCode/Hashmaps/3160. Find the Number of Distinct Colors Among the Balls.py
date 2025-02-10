from collections import defaultdict


class Solution:
    def queryResults(self, limit: int, queries: List[List[int]]) -> List[int]:
        
        
        index2Color = {}
        colorFreqMap = defaultdict(int)
        res = []

        for  [index, color] in queries:
            oldColor = False
            if  index in index2Color:
                oldColor = index2Color[index]
            oldColorFreq = colorFreqMap[oldColor]
            newColorFreq = colorFreqMap[color]
            if not oldColor:

                index2Color[index] = color
                colorFreqMap[color] =  newColorFreq + 1
            elif oldColor != color:


                if oldColorFreq == 1:
                    colorFreqMap.delete(oldColor)
                else:
                    colorFreqMap[oldColor] = oldColorFreq - 1
            

            index2Color[index] =  color
            colorFreqMap[color] = newColorFreq + 1

        

            res.append(colorFreqMap.size)
        return res
    