class Solution:
    def uncommonFromSentences(self, s1: str, s2: str) -> List[str]:

        dict1 = defaultdict(int)
        for w in s1.split():
            dict1[w] += 1

        for w in s2.split():
            dict1[w] += 1

        res = []
        for k, v in dict1.items():
            if v == 1:
                res.append(k)

        return res
