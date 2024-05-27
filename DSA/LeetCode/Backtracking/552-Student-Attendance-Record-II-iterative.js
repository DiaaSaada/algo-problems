/**
 * @param {number} n
 * @return {number}
 */
var checkRecord = function (n) {
    const modulus = 1000000007;

    // dp[i][j][k] means the number of valid sequences of length i
    // with j 'A's and ending with 'k' consecutive 'L's
    let dp = Array.from({ length: n + 1 }, () =>
        Array.from({ length: 2 }, () => Array(3).fill(0))
    );

    // Base case: one sequence of length 0 (empty sequence)
    dp[0][0][0] = 1;

    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < 2; j++) {  // Number of 'A's
            for (let k = 0; k < 3; k++) {  // Number of trailing 'L's

                // Adding 'P' to the sequence
                dp[i][j][0] = (dp[i][j][0] + dp[i - 1][j][k]) % modulus;

                // Adding 'A' to the sequence (only if no 'A' has been added yet)
                if (j > 0) {
                    dp[i][j][0] = (dp[i][j][0] + dp[i - 1][j - 1][k]) % modulus;
                }

                // Adding 'L' to the sequence (only if there are less than 2 trailing 'L's)
                if (k > 0) {
                    dp[i][j][k] = (dp[i][j][k] + dp[i - 1][j][k - 1]) % modulus;
                }
            }
        }
    }

    // Sum all valid sequences of length n
    let result = 0;
    for (let j = 0; j < 2; j++) {
        for (let k = 0; k < 3; k++) {
            result = (result + dp[n][j][k]) % modulus;
        }
    }

    return result;
};
