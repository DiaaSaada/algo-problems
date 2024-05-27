class Solution(object):
    def wordBreak(self, s, word_dict):
        res = []

        prefix_map = {}
        # Build the prefix map
        for word in word_dict:
            pre = ''
            for i in range(len(word)):
                pre += word[i]
                if pre in prefix_map:
                    prefix_map[pre].append(word)
                else:
                    prefix_map[pre] = [word]

        def dp(start, current_set):
            if start >= len(s):
                res.append(" ".join(current_set))
                return
            possible_words = prefix_map.get(s[start], [])
            for possible_word in possible_words:
                if possible_word == s[start:start + len(possible_word)]:
                    dp(start + len(possible_word), current_set + [possible_word])

        dp(0, [])
        return res
        