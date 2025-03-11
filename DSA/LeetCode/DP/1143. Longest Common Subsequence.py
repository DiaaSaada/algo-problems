class Solution:
    def longestCommonSubsequence(self, text1: str, text2: str) -> int:
        # Use a dictionary for memoization
        memo = {}

        def dp(p1: int, p2: int) -> int:
            # Base case: if either pointer goes out of bounds, return 0
            if p1 >= len(text1) or p2 >= len(text2):
                return 0

            # Create a unique key for memoization
            key = (p1, p2)
            if key in memo:
                return memo[key]

            # If characters match, move both pointers and add 1 to the result
            if text1[p1] == text2[p2]:
                memo[key] = 1 + dp(p1 + 1, p2 + 1)
            else:
                # If characters don't match, take the maximum of moving either pointer
                memo[key] = max(dp(p1 + 1, p2), dp(p1, p2 + 1))

            return memo[key]

        # Start the recursion from the beginning of both strings
        return dp(0, 0)