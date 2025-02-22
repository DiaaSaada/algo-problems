class Solution:
    def smallestNumber(self, pattern: str) -> str:
        res = []
        lastVal = 0
        stack = []
        
        pattern += "X"  # Append 'X' to handle the last group

        for i, char in enumerate(pattern):
            lastVal += 1

            if i == 0 and char == "I":
                res.append(lastVal)
                continue

            if char in ("I", "X") and pattern[i - 1] == "I":
                res.append(lastVal)
                continue

            if char == "D":
                stack.append(lastVal)
                continue

             

            if char in ("I", "X") and pattern[i - 1] == "D":
                stack.append(lastVal)
                while stack:
                    res.append(stack.pop())

        return "".join(map(str, res))
