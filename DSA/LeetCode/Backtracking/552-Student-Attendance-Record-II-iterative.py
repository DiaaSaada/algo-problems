class Solution(object):
    def checkRecord(self, n):
        MOD = 10**9 + 7
    
        # Initialize dp table
        dp = [[[0] * 3 for _ in range(2)] for _ in range(n+1)]
        dp[0][0][0] = 1  # Base case
        
        for i in range(n):
            for j in range(2):
                for k in range(3):
                    # If we append 'P'
                    dp[i+1][j][0] = (dp[i+1][j][0] + dp[i][j][k]) % MOD
                    
                    # If we append 'A'
                    if j < 1:
                        dp[i+1][j+1][0] = (dp[i+1][j+1][0] + dp[i][j][k]) % MOD
                    
                    # If we append 'L'
                    if k < 2:
                        dp[i+1][j][k+1] = (dp[i+1][j][k+1] + dp[i][j][k]) % MOD
        
        # Sum up all valid sequences of length n
        result = 0
        for j in range(2):
            for k in range(3):
                result = (result + dp[n][j][k]) % MOD
        
        return result
        