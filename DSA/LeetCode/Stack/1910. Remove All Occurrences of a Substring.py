class Solution:
    def removeOccurrences(self, s: str, part: str) -> str:

        stack = ""
        pL = len(part)
        for a in s:
            stack += a

            if len(stack) >= pL and stack[-pL:] == part:
                stack = stack[:-pL]

        return stack
