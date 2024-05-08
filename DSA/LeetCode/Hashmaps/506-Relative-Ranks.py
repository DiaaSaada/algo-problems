class Solution(object):
    def findRelativeRanks(self, scores):
        """
        :type score: List[int]
        :rtype: List[str]
        """
        sorted_scores = sorted(scores, reverse=True)
        places_map = {}
        for i in range(len(sorted_scores)):
            places_map[sorted_scores[i]] = i + 1

        places = {
            1: "Gold Medal",
            2: "Silver Medal",
            3: "Bronze Medal",
        }

        res = []
        for score in scores:
            place = places_map[score]
            res.append(places.get(place, str(place)))

        return res
        